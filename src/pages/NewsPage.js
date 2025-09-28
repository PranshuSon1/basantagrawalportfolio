import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Element } from "react-scroll";
import NotFoundPage from "./NotFoundPage";
const NewsPage = () => {
  const { id } = useParams();

  // Example news data

  console.log("id :>> ", id);
  const news = {
      id: 1,
      title: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता",
      img: "https://dl.dropboxusercontent.com/scl/fi/ujlucbg4ypuzj609ys7ew/1759061122258-d-koi-COFXWa6LJdw-unsplash.jpg?rlkey=13s92wqjk87eyx3fuqhg80kvo&dl=0",
      text: "बसंत अग्रवाल एक प्रतिष्ठित भाजपा नेता, समाजसेवी और धार्मिक आयोजक हैं, जिन्होंने अपने कार्यों से राजनीति, समाजसेवा और धार्मिक क्षेत्रों में अहम भूमिका निभाई है। उनके व्यक्तित्व का  मुख्य आकर्षण उनकी समाज के प्रति अपार प्रतिबद्धता और भाजपा की विचारधारा के प्रति दृढ़ निष्ठा है। \nअग्रवाल मित्र मण्डल और अग्रवाल नवयुवक मण्डल में विभिन्न पदों पर कार्य करते हुए समाज  के लिए कई प्रकार के दायित्वों का सफलतापूर्वक निर्वहन कर चुके हैं। वे अग्रवाल सभा के आजीवन सदस्य हैं और सामाजिक एवं धार्मिक आयोजनों में निरंतर सक्रिय रहते हैं। \n भोरमदेव कांवर यात्रा: उन्होंने साजा-धमधा विधानसभा क्षेत्र में लगातार छह वर्षों तक भोरमदेव कांवर पदयात्रा का आयोजन किया,जिसमें लाखों कांवरियों की सेवा का अवसर प्राप्त हुआ। \n धार्मिक कथा और आयोजनों का संचालन: बसंत अग्रवाल ने प्रसिद्ध संतों के श्रीमुख से रामकथा, श्रीमद्भागवत कथा और श्री हनुमंत कथा का आयोजन किया, जिससे लाखों लोगों को धार्मिक और सांस्कृतिक अनुभव हुआ।",
      date: "August 17, 2025",
      time: "02:17 PM",
      place: "Raipur, C.G.",
    }



  if (!news) return <NotFoundPage />;
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
                <Card.Img variant="top" src={news.img}></Card.Img>
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
