import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq.jsx';
import News from './News/News';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';
import SocialBanner from './SocialBanner/SocialBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <SocialBanner/>
      <News />
      <Reviews />
      <Faq />
    </div>
  );
};

export default Home;
