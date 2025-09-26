// src/pages/Admin.js
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { logout } = useAuth();
  const [newsList, setNewsList] = useState([]);
  const [newNews, setNewNews] = useState({ title: "", text: "", img: "" });

  // Fetch news from API
  useEffect(() => {
    fetch("/api/news") // 🔹 Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setNewsList(data))
      .catch(console.error);
  }, []);

  // Add news
  const handleAddNews = (e) => {
    e.preventDefault();
    fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNews),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewsList([...newsList, data]);
        setNewNews({ title: "", text: "", img: "" });
      })
      .catch(console.error);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h2>Admin Panel</h2>
      <Button variant="danger" onClick={logout} className="mb-3">
        Logout
      </Button>

      <h3>Add News</h3>
      <Form onSubmit={handleAddNews} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Title"
            value={newNews.title}
            onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Text"
            value={newNews.text}
            onChange={(e) => setNewNews({ ...newNews, text: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Image URL"
            value={newNews.img}
            onChange={(e) => setNewNews({ ...newNews, img: e.target.value })}
          />
        </Form.Group>
        <Button type="submit">Add News</Button>
      </Form>

      <h3>Existing News</h3>
      {newsList.map((item) => (
        <Card key={item.id} className="mb-2">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            {item.img && <Card.Img src={item.img} style={{ maxWidth: "200px" }} />}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
