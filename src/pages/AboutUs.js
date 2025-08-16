import { Card, Col, Row } from 'react-bootstrap';
import profileImg from "../assets/coverPhotoBS.jpg"; // replace with your image path

export default function AboutUs() {
  return (
    <>
      <h2 className="text-center mb-4">About Us</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow">
            <Card.Body>
              <Card.Title>बसंत अग्रवाल</Card.Title>
              <Card.Text>
               <p> बंसत अग्रवाल ने अपने समुदाय के विकास के प्रति लगातार अटूट प्रतिबद्धता का प्रदर्शन किया है। उनका नेतृत्व केवल राजनीति तक सीमित नहीं है, बल्कि उन्होंने जमीनी स्तर की पहलों में गहराई से भाग लिया है जो जनता के कल्याण को प्राथमिकता देती हैं।</p>
               <p>स्वास्थ्य और सामाजिक सेवा शिविरों के आयोजन में उनके प्रयासों के साथ-साथ पूर्व शक्ति केंद्र प्रभारी के रूप में उनकी भूमिका ने लोगों को सशक्त बनाने और एकता की भावना को प्रोत्साहित करने में स्थायी प्रभाव डाला है।</p>
               <p>ईमानदारी और स्पष्ट दृष्टिकोण के साथ नेतृत्व करने की उनकी क्षमता ने उन्हें विभिन्न क्षेत्रों में सम्मान दिलाया है, जिससे वे ऐसे नेता बन गए हैं जिनके कार्य शब्दों से अधिक प्रभावशाली हैं|</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center profile-image-col">

         
            <img src={profileImg} alt="Profile" className="img-fluid profile-img" />
          {/* </Col> */}
          {/* <Card className="h-100 shadow">
            <Card.Body>
              <Card.Title>Political Career</Card.Title>
              <Card.Text>
                Our political journey focuses on transparency, people-first policies, and sustainable development for future generations.
              </Card.Text>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </>
  );
}
