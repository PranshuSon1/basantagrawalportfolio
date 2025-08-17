import { Element } from 'react-scroll';
import ImageSlider from '../components/ImageSlider';
import ProfileSection from '../components/ProfileSetion';
import SocialLinksSection from "../components/SocialLinksSection";
import AboutUs from './AboutUs';
// import NavbarComponent from './components/NabBarComponent';
import MediaCenter from './MediaCenter';
import News from './NewsComponent';


export default function Home() {
  return (
   <>
      {/* <NavbarComponent /> */}

      <Element name="home">
        <ImageSlider />
      </Element>

      <Element name="Profile">
        <div className="section container text-white">
          <ProfileSection />
        </div>
      </Element>
       <Element name="media">
        <div className="container text-white max_height50vh">
          <MediaCenter />
        </div>
      </Element>

      <Element name="news">
        <div className="section container text-white">
          <News/>
          </div>
      </Element>
      <Element name="SocialLinks">
        <div className="section container text-white">
          <SocialLinksSection />
        </div>
      </Element>
      <Element name="about">
        <div className="section container text-white">
          <AboutUs />
        </div>
      </Element>

     

      {/* <Element name="contact">
        <div className="section container text-white">
          <ContactUs />
        </div>
      </Element> */}

      <footer className="footer">Copyright © 2024 Basant Agrawal</footer>
    </>
  );
}
