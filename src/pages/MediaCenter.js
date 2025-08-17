import { Container } from "react-bootstrap";
import Slider from "react-slick";
const images = [
  "/MCP_3859.jpeg",
  "/_DSC4890.jpeg",
  "/_DSC5182.jpeg",
  "/TWC_5442.jpeg",
  "/TWC_5847.jpeg",
];

export default function MediaCenter() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets & small laptops
        settings: {
          slidesToShow: 2,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "40px"
        }
      }
    ]
  };

  return (
    <section className="py-5" >
      <Container>
        <h2 className="text-center fw-bold mb-5">Media Center</h2>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="media-img"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
                loading='lazy'
              />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
