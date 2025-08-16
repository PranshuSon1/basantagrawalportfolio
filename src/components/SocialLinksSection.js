import { Card, Col, Container, Row } from "react-bootstrap";


export default function SocialLinks() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Reach Us By Following</h2>
        <Row className="g-4">
          {/* Facebook */}
          <Col md={4} sm={12}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                {/* Facebook Embed */}
                <div style={{ maxWidth: "340px", width: "100%" }}>
                  <iframe
                    title="Facebook"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasantagrawalofficial&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="100%"
                    height="300"
                    // frameborder="0"
                    // allowfullscreen="true"
                    // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Twitter */}
          {/* <Col md={2} sm={6}>
            <Card className="h-50 shadow-sm border-0 text-center">
              <Card.Body>
                <FaTwitter size={40} color="#1da1f2" className="mb-3" />
                <h5>Twitter</h5>
                <a
                  className="twitter-timeline"
                  data-height="300"
                  href="https://twitter.com/BasantAgrwl33?ref_src=twsrc%5Etfw"
                >
                  Tweets by BasantAgrwl33
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></script>
              </Card.Body>
            </Card>
          </Col>  */}

          {/* Instagram */}
          <Col md={4} sm={12}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <iframe
                  title="Instagram"
                  src="https://www.instagram.com/basantagrawalofficial/embed/"
                  width="100%"
                  height="300"
                 
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
          {/*Youtube*/}
          <Col md={4} sm={12}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <iframe
                  title="youtube"
                  src="https://www.youtube.com/embed?listType=playlist&list=UUkurYu1nmxrijZSbaxEb9Dw"
                  width="100%"
                  height="300"
                  
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
