import { Col, Container, Row } from "react-bootstrap";
import bgShape from "../assets/BJP.png";
import profileImg from "../assets/profile.png"; // replace with your image path

export default function ProfileSection() {
  return (
    <section className="profile-section py-5">
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Left Side - Image */}

          {/* <Col
            md={6}
            className="d-flex align-items-center justify-content-center profile-image-col"
          >
            <img src={profileImg} alt="Profile" className="img-fluid profile-img" />
          </Col> */}
           <Col md={6} className="position-relative text-center">
            {/* Background PNG */}
            <img
              src={bgShape}
              alt="Background Shape"
              className="profile-bg"
            />
            {/* Foreground PNG */}
            <img
              src={profileImg}
              alt="Person"
              className="profile-foreground"
            />
          </Col>

          {/* Right Side - Content */}
          <Col
            md={6}
            className="d-flex align-items-center profile-text-col text-white"
          >
            <div className="p-5">
              <h2 className="fw-bold mb-4">बसंत अग्रवाल</h2>
              <p>
                बसंत अग्रवाल, जिनका जन्म 24 जनवरी 1983 को हुआ, ने सेवा और नेतृत्व के
                माध्यम से भविष्य को आकार देने में अपना जीवन समर्पित किया है। अखिल
                भारतीय विद्यार्थी परिषद (ABVP) के एक सक्रिय सदस्य के रूप में उन्होंने
                कॉलेज चुनावों में महत्वपूर्ण भूमिका निभाई है...
              </p>
              <p>
                समाज कल्याण के प्रति उनकी प्रतिबद्धता उनकी ओर से आयोजित
                नेत्र जांच शिविरों, रक्तदान शिविरों और स्वास्थ्य शिविरों के माध्यम
                से स्पष्ट रूप से दिखाई देती है...
              </p>
              <p>
                थाना चुनावों के सफल आयोजन में भी बसंत अग्रवाल की नेतृत्व क्षमता
                स्पष्ट रूप से झलकती है...
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// export default function ProfileSection() {
//   return (
//     <section className="profile-section py-5">
//       <Container>
//         <Row className="align-items-center">
//           {/* Text Section */}
//           <Col md={6} className="text-center text-md-start">
//             <h2 className="fw-bold mb-3">Basant Kumar Agrawal</h2>
//             <p className="lead">
//               Social & Political Leader dedicated to serving the community and 
//               promoting development initiatives across the state.
//             </p>
//           </Col>

//           {/* Image Section */}
//           <Col md={6} className="position-relative text-center">
//             {/* Background PNG */}
//             <img
//               src={bgShape}
//               alt="Background Shape"
//               className="profile-bg"
//             />
//             {/* Foreground PNG */}
//             <img
//               src={personImg}
//               alt="Person"
//               className="profile-foreground"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }
