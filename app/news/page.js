// Next.js News page migrated from src/pages/NewsComponent.jsx
"use client";
import { newsService } from '@/src/services/newsService';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";

export default function NewsComponent() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const result = await newsService.getAllNews();
      if (result.success) {
        setNewsList(result.data);
      } else {
        console.error("Error fetching news:", result.error);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className="ms-2">Loading news...</span>
      </div>
    );
  }

  if (newsList.length === 0) {
    return (
      <>
        <h2 className="text-center mb-5 display-3">Latest From Newsroom</h2>
        <p className="text-center">No news available at the moment.</p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center mb-5 display-3">Latest From Newsroom</h2>
      <Row xs={1} md={2} className="g-4">
        {newsList.map((item) => (
          <Col key={item._id}>
            <Link href={`/news-page/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="h-100" style={{ cursor: 'pointer' }}>
                {item.image && (
                  <Card.Img variant="top" src={item.image} alt={item.title} style={{ height: "200px", objectFit: "cover" }} />
                )}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  {item.text && (
                    <Card.Text className="clipped-text">{item.text}</Card.Text>
                  )}
                  {item.place && (
                    <Card.Text className="text-muted"><small>{item.place}</small></Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
