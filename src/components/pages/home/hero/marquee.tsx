'use client';
import { motion } from 'framer-motion';
import React from 'react';

const SERVICES = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Graphics Design',
  'SEO Optimization',
  'Content Strategy',
  'Branding',
  'Digital Marketing',
  'Social Media Management',
  'E-commerce Solutions',
];

export default function MarqueeSection() {
  const textItems = SERVICES.map((service, i) => (
    <span key={i} className="flex items-center gap-2 mr-8">
      <span className="text-primary">✦</span>
      {service}
      <span className="text-primary">✦</span>
    </span>
  ));

  return (
    <>
      {/* 🔺 Top Marquee: Left scroll */}
      <div className="absolute z-10 bottom-32 left-0 right-0 h-18 overflow-hidden transform skew-y-[4deg]">
        <div className="bg-secondary h-18 w-full flex items-center">
          <motion.div
            className="flex items-center gap-8 text-white text-[20px] md:text-[28px] font-semibold whitespace-nowrap w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {textItems}
            {textItems}
          </motion.div>
        </div>
      </div>

      {/* 🔻 Bottom Marquee: Right scroll */}
      <div className="absolute z-10 bottom-20 left-0 right-0 h-18 overflow-hidden transform skew-y-[-4deg]">
        <div className="bg-primary h-18 w-full flex items-center">
          <motion.div
            className="flex items-center gap-8 text-white text-[20px] md:text-[28px] font-semibold whitespace-nowrap w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {textItems}
            {textItems}
          </motion.div>
        </div>
      </div>
    </>
  );
}
