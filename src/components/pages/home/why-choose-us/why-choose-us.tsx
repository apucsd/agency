'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function WhyChooseUs() {
    const sliders = [
        {
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            title: 'Expert Team',
            description: 'Our seasoned professionals bring years of industry experience to deliver exceptional results.'
        },
        {
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            title: 'Custom Solutions',
            description: 'Tailored strategies designed specifically for your unique business needs and goals.'
        },
        {
            img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
            title: 'Proven Results',
            description: 'Track record of delivering measurable success and ROI for our clients.'
        },
        {
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            title: 'Client-Centric',
            description: 'Your success is our priority. We build lasting partnerships through transparency and communication.'
        }
    ];
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    return (
        <div className='min-h-screen radial-bg py-10 md:py-20'>
            <div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
                <div className='max-w-4xl mx-auto text-center mb-12 md:mb-20 px-4'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-3 md:mb-4'>Why Choose Us</h1>
                    <p className='text-base sm:text-lg text-white/70'>Here is why you should choose us</p>
                </div>
                
                {/* Mobile View - Vertical Stack */}
                <div className='lg:hidden space-y-6 max-w-2xl mx-auto'>
                    {sliders.map((slide, idx) => (
                        <div 
                            key={idx}
                            className='relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-lg group'
                        >
                            <Image 
                                src={slide.img} 
                                alt={slide.title}
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6'>
                                <h2 className='text-2xl font-bold text-white'>{slide.title}</h2>
                                <p className='mt-2 text-white/90 text-sm sm:text-base'>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View - Horizontal Slider */}
                <div className="hidden lg:flex h-[600px] items-center justify-center gap-4">
                    {sliders?.map((slide, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onMouseLeave={() => setActiveIndex(0)}
                            className={`${activeIndex === idx ? 'w-[400px] opacity-100 shadow-lg' : 'w-[200px] opacity-70 grayscale hover:opacity-90'} ${idx % 2 === 0 ? 'translate-y-16' : ''} relative h-full duration-500 ease-in-out transition-all`}
                        >
                            <Image 
                                src={slide.img} 
                                alt={slide.title}
                                fill
                                className="rounded-md object-cover shadow-md"
                            />
                            <div className={`${activeIndex === idx ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent duration-500 ease-in-out`}>
                                <div className={`relative text-center text-white/80 ${activeIndex === idx ? 'top-1/2 -translate-y-1/2 opacity-100' : 'top-3/4 opacity-0'} duration-500 ease-in-out px-4`}>
                                    <h2 className="text-2xl font-bold mb-3">{slide.title}</h2>
                                    <p className={`text-sm text-white/80 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
