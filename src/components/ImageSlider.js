"use client";
import { Carousel } from 'react-bootstrap';

export default function ImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="/_DSC5182.jpeg" alt="basant at Shivaji maharaj jayanti" loading='lazy' />
        <Carousel.Caption>
          <h1 className='display-1'> उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image2.jpg" alt="Basant With youth" loading='lazy'/>
        <Carousel.Caption>
          <h1 className='display-1'> आपकी आवाज़, मेरा मिशन!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image3.jpg" alt="Basant with press" loading='lazy'/>
        <Carousel.Caption>
          <h1 className='display-1'>उद्देश्यपूर्ण नेतृत्व, भविष्य का निर्माण!</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
