'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
      {
            title: 'Web Development',
            description: 'We create immersive gaming experiences for all platforms.',
            images: [
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'left',
                  },
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'right',
                  },
            ],
      },
      {
            title: 'Mobile App Development',
            description: 'We create immersive gaming experiences for all platforms.',
            images: [
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'left',
                  },
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'right',
                  },
            ],
      },
      {
            title: 'UI/UX Design',
            description: 'We create immersive gaming experiences for all platforms.',
            images: [
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'left',
                  },
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'right',
                  },
            ],
      },
      {
            title: 'SEO',
            description: 'We create immersive gaming experiences for all platforms.',
            images: [
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'left',
                  },
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'right',
                  },
            ],
      },
      {
            title: 'Branding',
            description: 'We create immersive gaming experiences for all platforms.',
            images: [
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'left',
                  },
                  {
                        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=1170&q=80',
                        alt: 'right',
                  },
            ],
      },
];

type TFeature = (typeof features)[0];

function GamingSection({ feature, index }: { feature: TFeature; index: number }) {
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
                  className="relative min-h-screen radial-bg  flex items-center justify-center overflow-hidden"
            >
                  {/* Left Image */}
                  <div ref={leftImgRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] p-4">
                        <img src={feature.images[0].src} alt={feature.images[0].alt} className="w-full rounded-xl " />
                  </div>

                  {/* Right Image */}
                  <div ref={rightImgRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] p-4">
                        <img src={feature.images[1].src} alt={feature.images[1].alt} className="w-full rounded-xl " />
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

export default function GamingSections() {
      return (
            <div>
                  {features.map((feature, idx) => (
                        <GamingSection key={idx} feature={feature} index={idx} />
                  ))}
            </div>
      );
}
