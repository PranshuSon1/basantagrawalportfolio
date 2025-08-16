import { Element } from 'react-scroll';
import ImageSlider from './components/ImageSlider';
import NavbarComponent from './components/NabBarComponent';
import ProfileSection from './components/ProfileSetion.js';
import SocialLinksSection from "./components/SocialLinksSection";
import AboutUs from './pages/AboutUs';
import MediaCenter from './pages/MediaCenter';

export default function App() {
  return (
    <>
      <NavbarComponent />

      <Element name="home">
        <ImageSlider />
      </Element>

      <Element name="Profile">
        <div className="section container text-white">
          <ProfileSection />
        </div>
      </Element>
      <Element name="Profile">
        <div className="section container text-white">
          <SocialLinksSection />
        </div>
      </Element>
      <Element name="about">
        <div className="section container text-white">
          <AboutUs />
        </div>
      </Element>

      <Element name="media">
        <div className="section container text-white">
          <MediaCenter />
        </div>
      </Element>

      {/* <Element name="news">
        <div className="section container text-white">
          <News/>
          </div>
      </Element> */}

      {/* <Element name="contact">
        <div className="section container text-white">
          <ContactUs />
        </div>
      </Element> */}

      <footer className="footer">Copyright © 2024 Basant Agrawal</footer>
    </>
  );
}
