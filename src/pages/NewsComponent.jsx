import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../assets/_DSC5182.jpeg";

export default function NewsComponent() {
  const newsList = [
    {
      id: 1,
      title: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता",
      text: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता, समाजसेवी और धार्मिक आयोजक हैं, जिन्होंने अपने कार्यों से राजनीति, समाजसेवा और धार्मिक क्षेत्रों में अहम भूमिका निभाई है।",
      img: img1,
    },
    {
      id: 2,
      title: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता",
      text: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता, समाजसेवी और धार्मिक आयोजक हैं, जिन्होंने अपने कार्यों से राजनीति, समाजसेवा और धार्मिक क्षेत्रों में अहम भूमिका निभाई है।",
      img: img1,
    },
    {
      id: 3,
      title: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता",
      text: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता, समाजसेवी और धार्मिक आयोजक हैं, जिन्होंने अपने कार्यों से राजनीति, समाजसेवा और धार्मिक क्षेत्रों में अहम भूमिका निभाई है।",
      img: img1,
    }
  ];

  return (
    <>
      <h2 className="text-center mb-5 display-3">Latest From Newsroom</h2>
      <Row xs={1} md={2} className="g-4">
        {newsList.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.text}
                  {/* Link to specific news */}
                  <Link to={`/news/${item.id}`}>....Read More</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
