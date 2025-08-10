import { ShimmerButton } from "@/components/ui/shimmer-button";

const BannerSection = () => {
      return (
            <div className="bg-[#000921] min-h-screen">
            <div className="container flex flex-col items-center justify-center h-screen px-6 text-center relative z-10">
                  <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-medium mb-8 bg-clip-text bg-gradient-to-r from-[#d3d847] to-[#c67700]">The World’s Leading AI-Powered Digital Agency</h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Full-service digital agency crafting impactful websites, mobile apps, UI/UX designs, SEO strategies, and branding that drives real growth.</p>

                  <video
                        src="/videos/website.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className=" w-full h-fit md:h-[560px] z-[-1] object-cover"
                  />
                  <div className="w-fit mx-auto mt-8">
                        <ShimmerButton>
                              Explore Our Services
                        </ShimmerButton>
                  </div>
            </div>
            </div>
      );
};

export default BannerSection;
