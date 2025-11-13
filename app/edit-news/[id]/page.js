// Next.js Edit News page migrated from src/pages/EditNews.js
"use client";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import { newsService } from "@/src/services/newsService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";

const EditNews = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const [formData, setFormData] = useState({ title: "", text: "", place: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const result = await newsService.getNewsById(id);
        if (result.success && result.data) {
          setFormData({
            title: result.data.title || "",
            text: result.data.text || "",
            place: result.data.place || "",
          });
        } else {
          alert("Failed to load news. Redirecting to admin panel.");
          router.push("/admin");
        }
      } catch (err) {
        alert("An error occurred while loading news.");
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchNews();
  }, [id, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("text", formData.text);
      data.append("place", formData.place);
      if (file) data.append("image", file);
      const result = await newsService.updateNews(id, data);
      if (result.success) {
        alert("News updated successfully!");
        router.push("/admin");
      } else {
        alert(result.error || "Failed to update news.");
      }
    } catch {
      alert("An error occurred while updating news.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <ProtectedRoute>
      <Container style={{ maxWidth: 600 }}>
        <h2 className="text-center mb-4">Edit News</h2>
        <Button variant="secondary" onClick={() => router.push("/admin")} className="mb-3">
          ← Back to Admin
        </Button>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" name="text" value={formData.text} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control name="place" value={formData.place} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
          <Form.Text className="text-muted">Leave empty to keep current image</Form.Text>
        </Form.Group>
        <div className="d-flex gap-2">
          <Button type="submit" disabled={updating}>
            {updating ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Updating...
              </>
            ) : (
              "Update News"
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

export default EditNews;

