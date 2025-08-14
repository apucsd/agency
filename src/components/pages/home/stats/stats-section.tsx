'use client';
import { useInView } from 'framer-motion';
import { Globe, BarChart3, Monitor, Users, Award, Code, Clock, Percent } from 'lucide-react';
import { useRef } from 'react';
import CountUp from 'react-countup';
export default function StatsSection() {
    const metrics = [
        {
            icon: Globe,
            value: '20',
            label: 'Websites Launched',
        },
        {
            icon: Monitor,
            value: '15',
            label: 'Mobile Apps Built',
        },
        {
            icon: Users,
            value: '17',
            label: 'Satisfied Clients',
        },
        {
            icon: Award,
            value: '3',
            label: 'Industry Awards',
        },
        {
            icon: Code,
            value: '4',
            label: 'Years Experience',
        },
        {
            icon: BarChart3,
            value: '98',
            label: 'Client Retention %',
        },
        {
            icon: Clock,
            value: '24',
            label: 'Hours of Support',
        },
        {
            icon: Percent,
            value: '97',
            label: 'Success Rate',
        },
    ];

      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
      return (
            <div className="flex overflow-hidden radial-bg md:bg-[#000921]  flex-col items- justify-start min-h-[130vh] px-6 text-center relative z-10">
                  <video
                        src="/videos/globe-new.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute bottom-0 hidden md:block  w-full  z-[-1] min-h-[80vh] object-cover"
                  />
                  {/* <div className="absolute h-screen inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-[-1]" /> */}
                  <div className="container mt-20">
                        {/* Hero Video */}

                        <div>
                              <h1 className="text-4xl text-primary md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text bg-gradient-to-r from-[#d3d847] to-[#c67700]">
                                    What We Done So Far
                              </h1>
                        </div>
                        <div className="w-full max-w-6xl mx-auto p-6">
                              <div
                                    className="radial-bg rounded-[20px] p-8 relative"
                                    style={{
                                          boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
                                    }}
                              >
                                    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-px">
                                          {metrics.map((metric, index) => {
                                                const IconComponent = metric.icon;
                                                return (
                                                      <div
                                                            key={index}
                                                            className=" p-8 flex flex-col items-start justify-center min-h-[160px]"
                                                      >
                                                            <IconComponent className="w-6 h-6 text-white mb-4" />
                                                            <CountUp   end={isInView ? Number(metric.value) : 0} duration={isInView ? 2 : 0} className="text-4xl font-bold text-white mb-2" />
                                                            <div className="text-slate-400 text-sm">{metric.label}</div>
                                                      </div>
                                                );
                                          })}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
