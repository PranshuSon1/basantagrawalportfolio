// Next.js News Page migrated from src/pages/NewsPage.js
"use client";
import { newsService } from "@/src/services/newsService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Element } from "react-scroll";

const NewsPage = () => {
  const params = useParams();
  const id = params?.id;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNewsById = async (newsId) => {
    try {
      setLoading(true);
      const result = await newsService.getNewsById(newsId);
      if (result.success && result.data) {
        const newsData = {
          ...result.data,
          date: new Date(result.data.createdAt).toLocaleDateString(),
          time: new Date(result.data.createdAt).toLocaleTimeString(),
        };
        setNews(newsData);
      } else {
        setNews(null);
      }
    } catch (error) {
      setNews(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchNewsById(id);
  }, [id]);

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

  if (!news) {
    return <div>News not found.</div>;
  }

  return (
    <Element name="Profile">
      <div className="section container text-white">
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>
                  <h2>{news.title}</h2>
                </Card.Title>
                {news.image && (
                  <Card.Img variant="top" src={news.image} alt={news.title} style={{ maxHeight: "400px", objectFit: "cover" }} />
                )}
                <blockquote className="blockquote mb-0 mt-3">
                  {news.text.split("\n").map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  <footer className="blockquote-footer">
                    {news.date} {news.time}{" "}
                    {news.place && <cite title={news.place}>{news.place}</cite>}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Element>
  );
};

export default NewsPage;

