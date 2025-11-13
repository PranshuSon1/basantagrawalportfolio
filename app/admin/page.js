// Next.js Admin page migrated from src/pages/Admin.js
"use client";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import { useAuth } from "@/src/context/AuthContext";
import { newsService } from "@/src/services/newsService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

export default function Admin() {
  const { logout } = useAuth();
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const result = await newsService.getAllNews();
      if (result.success) {
        setNewsList(result.data);
      } else {
        alert("Failed to fetch news. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
      alert("An error occurred while fetching news.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news item?")) {
      return;
    }
    try {
      setDeleting(id);
      const result = await newsService.deleteNews(id);
      if (result.success) {
        alert("News deleted successfully!");
        fetchNews();
      } else {
        alert("Failed to delete news. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while deleting news.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <ProtectedRoute>
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Admin Panel</h2>
          <div className="d-flex gap-2">
            <Button variant="primary" onClick={() => router.push("/add-news")}>
              + Add New News
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3">News List ({newsList.length})</h3>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : newsList.length === 0 ? (
            <Card>
              <Card.Body className="text-center py-5">
                <p className="text-muted mb-3">No news items found.</p>
                <Button variant="primary" onClick={() => router.push("/add-news")}>
                  Create Your First News Item
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Row className="g-4">
              {newsList.map((news) => (
                <Col key={news._id} md={6} lg={4}>
                  <Card className="h-100 shadow-sm">
                    {news.image && (
                      <Card.Img
                        variant="top"
                        src={news.image}
                        alt={news.title}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h5">{news.title}</Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        {news.text && news.text.length > 100
                          ? `${news.text.substring(0, 100)}...`
                          : news.text}
                      </Card.Text>
                      {news.place && (
                        <Badge bg="secondary" className="mb-2 align-self-start">
                          {news.place}
                        </Badge>
                      )}
                      {news.createdAt && (
                        <small className="text-muted mb-3">
                          {new Date(news.createdAt).toLocaleDateString()}
                        </small>
                      )}
                      <div className="d-flex gap-2 mt-auto">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => router.push(`/edit-news/${news._id}`)}
                          className="flex-fill"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(news._id)}
                          disabled={deleting === news._id}
                          className="flex-fill"
                        >
                          {deleting === news._id ? (
                            <>
                              <Spinner animation="border" size="sm" className="me-1" />
                              Deleting...
                            </>
                          ) : (
                            "Delete"
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </ProtectedRoute>
  );
}
