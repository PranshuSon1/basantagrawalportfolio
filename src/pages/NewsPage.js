import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Element } from "react-scroll";
import NotFoundPage from "./NotFoundPage";

const NewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNewsById = async (newsId) => {
    try {
      const response = await axios.get(`https://basantagbackend.onrender.com/news/${newsId}`);
      if (response.data) {
        //parse the date and time from the timestamp
        response.data.date = new Date(response?.data?.createdAt).toLocaleDateString();
        response.data.time = new Date(response?.data?.createdAt).toLocaleTimeString();
        setNews(response.data);
      } else {
        setNews(null);
      }
    } catch (error) {
      console.log("failed to fetch news by id :>> ", error);
      setNews(null);
    } finally {
      setLoading(false); 
    }
  };
  useEffect(() => {
    if (id) {
      fetchNewsById(id);
    }
  }, [id]);
console.log('news :>> ', news);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" role="status" />
        <span className="ms-2">Loading news...</span>
      </div>
    );
  } else if (!news) return <NotFoundPage />;
  return (
    <Element name="Profile">
      <div className="section container text-white">
        {/* <h1 className="text-center mb-4">{news.title}</h1> */}
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>
                  <h2>{news.title}</h2>
                </Card.Title>
                <Card.Img variant="top" src={news.image}></Card.Img>
                <blockquote className="blockquote mb-0">
                  {news.text.split("\n").map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  <footer className="blockquote-footer">
                    {news.date} {news.time}{" "}
                    <cite title={news.place}> {news.place}</cite>
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
