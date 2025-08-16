import { Carousel } from 'react-bootstrap';
import slider1 from '../assets/_DSC5182.jpeg';
import slider2 from '../assets/image2.jpg';
import slider3 from '../assets/image3.jpg';

export default function ImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h1> <strong>उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण!</strong></h1>
          {/* <p>Making a difference together</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
        <Carousel.Caption>
          <h1><strong> आपकी आवाज़, मेरा मिशन!</strong></h1>
          {/* <p>Empowering communities</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
        <Carousel.Caption>
          <h1><strong>उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण! </strong></h1>
          {/* <p>Building a better tomorrow</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
