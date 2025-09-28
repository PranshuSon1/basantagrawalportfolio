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
  const [newsList, setNewsList] = useState([
    {
      id:"1",
      title: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता",
      img: "",
      text: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता, समाजसेवी और धार्मिक आयोजक हैं, जिन्होंने अपने कार्यों से राजनीति, समाजसेवा और धार्मिक क्षेत्रों में अहम भूमिका निभाई है। उनके व्यक्तित्व का  मुख्य आकर्षण उनकी समाज के प्रति अपार प्रतिबद्धता और भाजपा की विचारधारा के प्रति दृढ़ निष्ठा है। अग्रवाल मित्र मण्डल और अग्रवाल नवयुवक मण्डल में विभिन्न पदों पर कार्य करते हुए समाज  के लिए कई प्रकार के दायित्वों का सफलतापूर्वक निर्वहन कर चुके हैं। वे अग्रवाल सभा के आजीवन सदस्य हैं और सामाजिक एवं धार्मिक आयोजनों में निरंतर सक्रिय रहते हैं। /n भोरमदेव कांवर यात्रा: उन्होंने साजा-धमधा विधानसभा क्षेत्र में लगातार छह वर्षों तक भोरमदेव कांवर पदयात्रा का आयोजन किया,जिसमें लाखों कांवरियों की सेवा का अवसर प्राप्त हुआ। /n धार्मिक कथा और आयोजनों का संचालन: बसंत अग्रवाल ने प्रसिद्ध संतों के श्रीमुख से रामकथा, श्रीमद्भागवत कथा और श्री हनुमंत कथा का आयोजन किया, जिससे लाखों लोगों को धार्मिक और सांस्कृतिक अनुभव हुआ।",
      place: "Raipur, C.G.",
    },
  ]);
  const [newNews, setNewNews] = useState({ title: "", text: "", place: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // Fetch news from API
  useEffect(() => {
    fetchNews();
  }, []);
  async function fetchNews() {
    try {
      const response = await axios.get("/getNewsList");
      if (response.body.length) {
        setNewsList(response.body);
      }
    } catch (error) {
      console.log("failed to fetch news :>> ", error);
    }
  }
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
    formData.append("file", file);
    formData.append("title", newNews.title);
    formData.append("text", newNews.text);

    try {
      setLoading(true);
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload success:", response.data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("File upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://your-api.com/news/${id}`);
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
            {item.img && (
              <Card.Img src={item.img} style={{ maxWidth: "200px" }} />
            )}
            <Card.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/editNews/${item.id}`); // navigate to edit page
              }}
            >
              Edit
            </Card.Link>
            <Card.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item.id); // call delete API
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
