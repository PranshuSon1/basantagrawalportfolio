"use client";
import Script from "next/script";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


export default function SocialLinks() {
  useEffect(() => {
    // Suppress Facebook iframe errors (non-fatal errors from Facebook's internal code)
    if (typeof window !== 'undefined') {
      const originalError = console.error;
      const originalWarn = console.warn;
      
      // Suppress Facebook-related console errors
      console.error = (...args) => {
        const errorString = args.join(' ');
        if (
          errorString.includes('Facebook') || 
          errorString.includes('u_1_2o_5L') ||
          errorString.includes('__elem_') ||
          errorString.includes('ErrorUtils') ||
          errorString.includes('Permissions policy violation')
        ) {
          return; // Suppress Facebook errors
        }
        originalError.apply(console, args);
      };

      // Suppress Facebook-related console warnings
      console.warn = (...args) => {
        const warnString = args.join(' ');
        if (
          warnString.includes('Permissions policy violation') ||
          warnString.includes('unload')
        ) {
          return; // Suppress Facebook warnings
        }
        originalWarn.apply(console, args);
      };

      // Load Twitter widget script after it loads
      const loadTwitterWidget = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      };
      
      // Check if script is already loaded
      if (window.twttr) {
        loadTwitterWidget();
      }

      // Restore original console methods on cleanup
      return () => {
        console.error = originalError;
        console.warn = originalWarn;
      };
    }
  }, []);

  return (
    <>
      <Script 
        src="https://platform.twitter.com/widgets.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        }}
      />
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4 display-3">Reach Us By Following</h2>
          <Row className="g-4">
            {/* Facebook */}
            <Col md={4} sm={12}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body>
                  {/* Facebook Embed */}
                  <div style={{ maxWidth: "340px", width: "100%" }}>
                    <iframe
                      title="Facebook"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasantagrawalofficial&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="100%"
                      height="300"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      allow="encrypted-media"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Instagram */}
            <Col md={4} sm={12}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body>
                  <iframe
                    title="Instagram"
                    src="https://www.instagram.com/basantagrawalofficial/embed/"
                    width="100%"
                    height="300"
                    style={{ border: 'none' }}
                    scrolling="no"
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
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </Card.Body>
              </Card>
            </Col>
            {/* Twitter */}
            <Col md={3} sm={5}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body>
                  <a 
                    href="https://twitter.com/BasantAgrwl33?ref_src=twsrc%5Etfw" 
                    className="twitter-follow-button" 
                    data-show-count="false"
                  >
                    Follow @x
                  </a>
                </Card.Body>
              </Card>
            </Col> 
          </Row>
        </Container>
      </section>
    </>
  );
}
