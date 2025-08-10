import BannerSection from '@/components/pages/home/banner/banner-section';
import HeroSection from '@/components/pages/home/hero/hero-section';
import React from 'react';

const HomePage = async () => {
  
    return (
        <div>
           <HeroSection />
           <BannerSection />
        </div>
    );
};

export default HomePage;