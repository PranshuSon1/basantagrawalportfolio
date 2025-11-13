// Next.js Add News page
"use client";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import { newsService } from "@/src/services/newsService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";

const AddNews = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", text: "", place: "" });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image file first!");
      return;
    }
    setUploading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("text", formData.text);
      data.append("place", formData.place);
      data.append("image", file);
      const result = await newsService.createNews(data);
      if (result.success) {
        alert("News created successfully!");
        router.push("/admin");
      } else {
        alert(result.error || "Failed to create news.");
      }
    } catch {
      alert("An error occurred while creating news.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Container style={{ maxWidth: 600 }}>
        <h2 className="text-center mb-4">Add New News</h2>
        <Button variant="secondary" onClick={() => router.push("/admin")} className="mb-3">
          ← Back to Admin
        </Button>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              name="text" 
              value={formData.text} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control 
              name="place" 
              value={formData.place} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} required />
          </Form.Group>
          <div className="d-flex gap-2">
            <Button type="submit" disabled={uploading}>
              {uploading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Creating...
                </>
              ) : (
                "Create News"
              )}
            </Button>
            <Button variant="outline-secondary" onClick={() => router.push("/admin")}>
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    </ProtectedRoute>
  );
};

export default AddNews;

