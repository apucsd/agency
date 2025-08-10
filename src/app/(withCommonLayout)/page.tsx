import BannerSection from '@/components/pages/home/banner/banner-section';
import FeaturedSection from '@/components/pages/home/featured-section/featured-section';
import HeroSection from '@/components/pages/home/hero/hero-section';
import React from 'react';

const HomePage = async () => {
  
    return (
        <div>
           <HeroSection />
           <BannerSection />
           <FeaturedSection />
        </div>
    );
};

export default HomePage;