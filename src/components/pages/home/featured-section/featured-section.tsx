'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
      {
            title: 'Web Development',
            description: 'We create immersive gaming experiences for all platforms.',
            media: [
                  {
                        type: 'video',
                        src: '/videos/web2.mp4',
                        alt: 'Web Development Demo',
                        poster: '/images/thumbnails/web-dev-thumb.jpg'
                  },
                  {
                        type: 'video',
                        src: '/videos/web1.mp4',
                        alt: 'Web Development Demo 2',
                        poster: '/images/thumbnails/web-dev-thumb-2.jpg'
                  },
            ],
      },
      {
            title: 'App Development',
            description: 'We develop mobile apps for iOS and Android.',
            media: [
                  {
                        type: 'video',
                        src: '/videos/app2.mp4',
                        alt: 'App Development Demo',
                        poster: '/images/thumbnails/app-dev-thumb.jpg'
                  },
                  {
                        type: 'video',
                        src: '/videos/app1.mp4',
                        alt: 'App Development Demo 2',
                        poster: '/images/thumbnails/app-dev-thumb-2.jpg'
                  },
            ],
      },
      {
            title: 'UI/UX Design',
            description: 'We create stunning user interfaces and experiences.',
            media: [
                  {
                        type: 'video',
                        src: '/videos/ux1.mp4',
                        alt: 'UI/UX Design Demo',
                        poster: '/images/thumbnails/ui-ux-thumb.jpg'
                  },
                  {
                        type: 'video',
                        src: '/videos/ux2.mp4',
                        alt: 'UI/UX Design Demo 2',
                        poster: '/images/thumbnails/ui-ux-thumb-2.jpg'
                  },
            ],
      },
];

type TFeature = (typeof features)[0];

function FeaturedSection({ feature, index }: { feature: TFeature; index: number }) {
      const sectionRef = useRef(null);
      const leftImgRef = useRef(null);
      const rightImgRef = useRef(null);
      const textRef = useRef(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.set([leftImgRef.current, rightImgRef.current], {
                        rotate: -5,
                        scale: 1.05,
                        opacity: 1,
                  });
                  gsap.set(textRef.current, { opacity: 0, y: 30 });

                  const tl = gsap.timeline({
                        scrollTrigger: {
                              trigger: sectionRef.current,
                              start: 'top top',
                              end: '+=100%',
                              scrub: true,
                              pin: true,
                              anticipatePin: 1,
                              invalidateOnRefresh: true,
                              markers: false, // set true for debugging
                        },
                  });

                  tl.to(
                        leftImgRef.current,
                        {
                              x: '-100%',
                              opacity: 0,
                              rotate: -15,
                              ease: 'power2.inOut',
                        },
                        0
                  );

                  tl.to(
                        rightImgRef.current,
                        {
                              x: '100%',
                              opacity: 0,
                              rotate: 15,
                              ease: 'power2.inOut',
                        },
                        0
                  );

                  tl.to(
                        textRef.current,
                        {
                              opacity: 1,
                              y: 0,
                              ease: 'power2.out',
                        },
                        0.5
                  );

                  return () => {
                        if (tl.scrollTrigger) tl.scrollTrigger.kill();
                        tl.kill();
                  };
            }, sectionRef);

            return () => ctx.revert();
      }, []);

      return (
            <section
                 
                  ref={sectionRef}
                  className="relative min-h-screen  flex items-center justify-center overflow-hidden"
            >
                  {/* Left Video */}
                  <div ref={leftImgRef} className="absolute rounded-[20px] left-0 top-1/2 -translate-y-1/2 w-[50%] p-4">
                        <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full object-cover h-[70vh] rounded-[20px] shadow-2xl"
                              poster={feature.media[0].poster}
                        >
                              <source src={feature.media[0].src} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                  </div>

                  {/* Right Video */}
                  <div ref={rightImgRef} className="absolute rounded-[20px] right-0 top-1/2 -translate-y-1/2 w-[50%] p-4">
                        <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full object-cover h-[70vh] rounded-[20px] shadow-2xl"
                              poster={feature.media[1].poster}
                        >
                              <source src={feature.media[1].src} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                  </div>

                  {/* Center Text */}
                  <div
                
                       
                        ref={textRef}
                        className="relative   z-10 text-center  px-4"
                  >
                        <h2 className="text-white text-5xl font-bold mb-4">{feature.title}</h2>
                        <p className="text-gray-300 mb-6">{feature.description}</p>
                        <button className="px-6 py-3 bg-[#7CCF00] text-black rounded-full font-semibold hover:bg-[#c9f685e3] transition">
                              See Project
                        </button>
                  </div>
            </section>
      );
}

export default function FeaturedSections() {
      return (
            <div className='radial-bg '>
                  <div
                  
                  style={{
                        boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
                  }}
                  className='text-white text-center p-8'>
                        <h2 className="text-primary text-5xl font-bold mb-4">What We Do</h2>
                        <p className=" mb-6">Here is what we do</p>
                  </div>



                  {features.map((feature, idx) => (
                        <FeaturedSection key={idx} feature={feature} index={idx} />
                  ))}
            </div>
      );
}
