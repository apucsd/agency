import BannerSection from '@/components/pages/home/banner/banner-section';
import FeaturedSection from '@/components/pages/home/featured-section/featured-section';
import HeroSection from '@/components/pages/home/hero/hero-section';
import StatsSection from '@/components/pages/home/stats/stats-section';
import WhyChooseUs from '@/components/pages/home/why-choose-us/why-choose-us';
import React from 'react';

const HomePage = async () => {
  
    return (
        <div>
           <HeroSection />
           <BannerSection />
           <FeaturedSection />
           <StatsSection />
           <WhyChooseUs /> 
        </div>
    );
};

export default HomePage;