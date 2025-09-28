import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
  const { id } = useParams(); // get news id from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    file: null,
    place: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch news item by ID on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`https://basantagbackend.onrender.com/news/${id}`);
        setFormData({
          title: res.data.title || "",
          text: res.data.text || "",
          file: null, // file input stays empty
          place: res.data.place || "",
        });
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("text", formData.text);
      data.append("place", formData.place);
      if (formData.file) data.append("image", formData.file);

      await axios.put(`https://basantagbackend.onrender.com/news/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("News updated successfully!");
    } catch (err) {
      console.error("Error updating news:", err);
    } finally {
      setLoading(false);
      navigate("/admin"); // go back to admin/news list
    }
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h3>Edit News</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label> Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="text"
            placeholder="Enter Text"
            value={formData.text}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="place">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Enter Place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            disabled={loading}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="file">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleChange} 
            disabled={loading}/>
        </Form.Group>
        <div className="d-flex gap-2 mb-2">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Updating...
              </>
            ) : (
              "Update News"
            )}
          </Button>
          <Button variant="danger" onClick={(e) => navigate("/admin")}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditNews;
