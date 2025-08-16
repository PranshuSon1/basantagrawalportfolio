import { Card, Col, Row } from 'react-bootstrap';

export default function NewsComponent() {
  const newsList = [
    { id:1, title: 'Campaign Launch', text: 'We successfully launched our campaign with community support.' },
    {id:2, title: 'Policy Update', text: 'Introduced new policies for better healthcare access.' },
    {id:3, title: 'Community Meet', text: 'Held an open forum to hear citizens’ voices.' },
  ];

  return (
    <>
      <h2 className="text-center mb-4">Latest News</h2>
      <Row className="g-4">
        {newsList.map( (news, index) => (
          <Col md={4} key={news.id}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
         ))} 
      </Row>
    </>
  );
}
