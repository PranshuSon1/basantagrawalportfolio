import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NewsComponent() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" role="status" />
        <span className="ms-2">Loading news...</span>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center mb-5 display-3">Latest From Newsroom</h2>
      <Row xs={1} md={2} className="g-4">
        {newsList.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image}  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.text}
                  <Link to={`/news/${item._id}`}> ....Read More</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
