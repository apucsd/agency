import { Button } from '@/components/ui/button';

export default function HeroSection() {
      return (
            <div className="min-h-[calc(100vh-100px)] bg-[#121212] text-white relative overflow-hidden">
                  {/* Decorative X elements */}
                  <div className="absolute top-32 left-20 text-primary text-6xl font-bold opacity-80">×</div>
                  <div className="absolute bottom-32 right-20 text-primary text-6xl font-bold opacity-80">×</div>

                  {/* Hero Content */}
                  <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto">
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

                  {/* landscape carousel */}
                  <div className="absolute bottom-20 left-0 right-0 h-36 overflow-hidden">
                        <div className="relative h-full">
                              <div className="flex items-center h-full transform skew-y-[3deg] animate-scroll-left">
                                    <div className="flex items-center gap-8 bg-secondary text-white font-semibold text-lg whitespace-nowrap">
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  
                  <div className="absolute bg bottom-20 left-0 right-0 h-36 overflow-hidden">
                        <div className="relative h-full">
                              <div className="flex items-center h-full transform skew-y-[-3deg] animate-scroll-left">
                                    <div className="flex items-center gap-8 text-white bg-primary font-semibold text-lg whitespace-nowrap">
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                          <span className="flex items-center gap-2">
                                                <span className="text-white">✦</span>
                                                Social Media Marketing
                                                <span className="text-primary">✦</span>
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
