'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MarqueeSection from './marquee';


export default function HeroSection() {
      return (
            <div className="min-h-[calc(100vh-100px)] bg-[#121212] text-white relative overflow-hidden">
                  {/* Decorative X elements */}
                  <div className="absolute top-32 left-20 text-primary text-6xl font-bold opacity-80">×</div>
                  <div className="absolute bottom-32 right-20 text-primary text-6xl font-bold opacity-80">×</div>

                  {/* Hero Content */}
                  <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center relative z-10">
                        <div className="mx-auto">
                              {/* Hero Video */}
                              <video
                                src="/videos/globe.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                               onEnded={
                                    (e) => {
                                        const video = e.target as HTMLVideoElement;
                                        video.currentTime = 0;
                                        video.play();
                                    }
                               }
                                className="absolute bg-black bg-blend-overlay  inset-0 w-full  z-[-1] h-[calc(100vh-100px)] object-cover"
                              />
                               <div className="absolute inset-0 bg-black/30 z-[-1]" />
                              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                                    We Build Brands
                                    <br />
                                    <span className="text-primary">That People Love</span>
                              </h1>

                              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Full-service digital agency crafting impactful websites, mobile apps, UI/UX designs, SEO strategies, and
                                    branding that drives real growth.
                              </p>

                              <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full text-lg">
                                    Explore Our Services
                              </Button>
                        </div>
                  </div>
<MarqueeSection />
            </div>
      );
}
