import { Carousel } from 'react-bootstrap';
import slider1 from '../assets/_DSC5182.jpeg';
import slider2 from '../assets/image2.jpg';
import slider3 from '../assets/image3.jpg';

export default function ImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="basant at Shivaji maharaj jayanti" loading='lazy' />
        <Carousel.Caption>
          <h1> <strong>उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण!</strong></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Basant With youth" loading='lazy'/>
        <Carousel.Caption>
          <h1><strong> आपकी आवाज़, मेरा मिशन!</strong></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Basant with press" loading='lazy'/>
        <Carousel.Caption>
          <h1><strong>उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण! </strong></h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
