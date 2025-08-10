import React from 'react';

const MarqueeSection = () => {
      const brands = [
            { id: 1, img: '/images/brands/svg1.svg' },
            { id: 2, img: '/images/brands/svg2.svg' },
            { id: 3, img: '/images/brands/svg3.svg' },
            { id: 4, img: '/images/brands/svg4.svg' },
            { id: 5, img: '/images/brands/svg5.svg' },
            { id: 6, img: '/images/brands/svg6.svg' },
            { id: 7, img: '/images/brands/svg7.svg' },
            { id: 8, img: '/images/brands/svg8.svg' },
            { id: 9, img: '/images/brands/svg9.svg' },
            { id: 10, img: '/images/brands/svg10.svg' },
            { id: 11, img: '/images/brands/svg11.svg' },
            { id: 12, img: '/images/brands/svg12.svg' },
            { id: 13, img: '/images/brands/svg13.svg' },
            { id: 14, img: '/images/brands/svg14.svg' },
            { id: 15, img: '/images/brands/svg15.svg' },
            { id: 16, img: '/images/brands/svg16.svg' },
            { id: 17, img: '/images/brands/svg17.svg' },
            { id: 18, img: '/images/brands/svg18.svg' },
            { id: 19, img: '/images/brands/svg19.svg' },
            { id: 20, img: '/images/brands/svg20.svg' },
            { id: 21, img: '/images/brands/svg21.svg' },
      ];

      return (
            <div className="absolute bottom-0 w-full overflow-hidden py-6">
                  <div className="marque-container">
                        <div className="Marquee-content">
                              {brands.map((brand, index) => (
                                    <div key={`${brand.id}-${index}`} className="inline-block mx-8">
                                          <img
                                                src={brand.img}
                                                alt={brand.id.toString()}
                                                className="h-8 w-auto object-contain  hover:opacity-100 transition-opacity"
                                                style={{ maxWidth: '120px' }}
                                          />
                                    </div>
                              ))}
                        </div>
                  </div>
                  <style jsx>{`
                        .marque-container {
                              width: 100%;
                              overflow: hidden;
                              white-space: nowrap;
                        }
                        .Marquee-content {
                              display: inline-block;
                              white-space: nowrap;
                              animation: marquee 40s linear infinite running;
                        }
                        .Marquee-content:hover {
                              animation-play-state: paused;
                        }
                        @keyframes marquee {
                              0% {
                                    transform: translateX(0);
                              }
                              100% {
                                    transform: translateX(-50%);
                              }
                        }
                  `}</style>
            </div>
      );
};

export default MarqueeSection;
