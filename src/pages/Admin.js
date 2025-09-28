// src/pages/Admin.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [newsList, setNewsList] = useState([  ]);
  const [newNews, setNewNews] = useState({ title: "", text: "", place: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // Fetch news from API
  useEffect(() => {
    fetchNews();
  }, []);
  const fetchNews = async () => {
    try {
      const response = await axios.get("https://basantagbackend.onrender.com/news"); 
      setNewsList(response.data);
      console.log("Fetched news data:", response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false); 
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // store the first selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", newNews.title);
    formData.append("text", newNews.text);
    formData.append("place", newNews.place);

    try {
      setLoading(true);
      const response = await axios.post("https://basantagbackend.onrender.com/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload success:", response.data);
      alert("File uploaded successfully!");
      fetchNews()
    } catch (error) {
      console.error("Upload failed:", error);
      alert("File upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://basantagbackend.onrender.com/news/${id}`);
      // Optionally refetch the list after deletion
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h2>Admin Panel</h2>
      <Button variant="danger" onClick={logout} className="mb-3">
        Logout
      </Button>

      <h3>Add News</h3>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label> Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={newNews.title}
            onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
            required
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Text"
            value={newNews.text}
            onChange={(e) => setNewNews({ ...newNews, text: e.target.value })}
            required
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            placeholder="Place"
            value={newNews.place}
            onChange={(e) => setNewNews({ ...newNews, place: e.target.value })}
            required
            disabled={loading}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-2">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image URL"
            value={newNews.img}
            onChange={handleFileChange}
            disabled={loading}
          />
        </Form.Group>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Uploading...
            </>
          ) : (
            "Upload"
          )}
        </Button>
      </Form>

      <h3>News List</h3>
      {newsList.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="clipped-text">{item.text}</Card.Text>
            {item.image && (
              <Card.Img src={item.image} style={{ maxWidth: "200px" }} />
            )}
            <Card.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/editNews/${item._id}`); // navigate to edit page
              }}
            >
              Edit
            </Card.Link>
            <Card.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item._id); // call delete API
              }}
            >
              Delete
            </Card.Link>

          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
