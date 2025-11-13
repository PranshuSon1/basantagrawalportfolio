// This is the Next.js page for the home route, migrated from src/pages/Home.js
"use client";
import ImageSlider from '@/src/components/ImageSlider';
import ProfileSection from '@/src/components/ProfileSetion';
import SocialLinksSection from "@/src/components/SocialLinksSection";
import { Element } from 'react-scroll';
import AboutUs from './about/page';
import MediaCenter from './media-center/page';
import News from './news/page';

export default function Home() {
  return (
   <>
      <Element name="home" id="home">
        <ImageSlider />
      </Element>
      <Element name="Profile" id="Profile">
        <div className="section container text-white">
          <ProfileSection />
        </div>
      </Element>
      <Element name="media" id="media">
        <div className="container text-white max_height50vh">
          <MediaCenter />
        </div>
      </Element>
      <Element name="news" id="news">
        <div className="section container text-white">
          <News/>
        </div>
      </Element>
      <Element name="SocialLinks" id="SocialLinks">
        <div className="section container text-white">
          <SocialLinksSection />
        </div>
      </Element>
      <Element name="about" id="about">
        <div className="section container text-white">
          <AboutUs />
        </div>
      </Element>
      <footer className="footer">Copyright © 2024 Basant Agrawal</footer>
    </>
  );
}
