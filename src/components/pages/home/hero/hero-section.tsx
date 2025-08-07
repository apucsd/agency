'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';
export default function HeroSection() {
      const text = 'That People Love';
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      return (
            <div className="flex flex-col items-center justify-center h-screen px-6 text-center relative z-10">
                  <video
                        ref={ref}
                        src="/videos/globe.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onEnded={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.currentTime = 0;
                              video.play();
                        }}
                        className="absolute  inset-0 w-full  z-[-1] h-screen object-cover"
                  />
                  <div className="absolute h-screen inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-[-1]" />
                  <div className="mx-auto">
                        {/* Hero Video */}

                        <div className=" w-full h-full">
                              <div>
                                    <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text bg-gradient-to-r from-[#d3d847] to-[#c67700]">
                                          We Build Brands
                                          <br />
                                          <div className="inline-block ">
                                                <AnimatePresence>
                                                      {text.split('').map((char, i) => (
                                                            <motion.span
                                                                  key={i}
                                                                  initial={{ opacity: 0, y: 20 }}
                                                                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                                  transition={{ duration: 0.5, delay: i * 0.05 }}
                                                                  className="inline-block text-[#fbe30ae5]"
                                                            >
                                                                  {char === ' ' ? <span>&nbsp;</span> : char}
                                                            </motion.span>
                                                      ))}
                                                </AnimatePresence>
                                          </div>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                          Full-service digital agency crafting impactful websites, mobile apps, UI/UX designs, SEO
                                          strategies, and branding that drives real growth.
                                    </p>

                                  <div className='w-fit mx-auto'>
                                    <ShimmerButton>
                                          Explore Our Services
                                    </ShimmerButton>
                                  </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
