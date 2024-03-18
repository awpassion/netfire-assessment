import GradientText from "@/components/UI/GradientText";
import dynamic from "next/dynamic";

const CustomVideoPlayer = dynamic(
  () => import("@/components/UI/CustomVideoPlayer"),
  {
    ssr: false,
  }
);

const HeroSection = () => {
  return (
    <div className="my-4 md:my-0 flex flex-col justify-center w-screen relative overflow-hidden">
      <div className="container mx-auto md:absolute z-10 md:left-1/2 top-20 lg:top-1/4 md:-translate-x-1/2 my-6">
        <div className="flex flex-col items-start">
          <div className="border bg-white/10 md:text-white border-stone-700 uppercase px-4 py-3 rounded-xl text-xs font-exo">
            Lorem Ipsum
          </div>

          <div className="text-xl md:text-3xl mt-4 md:mt-10 md:max-w-[50%] font-semibold leading-10 font-exo">
            <GradientText>Lorem Ipsum, Dolor Sit Amet </GradientText>
            <p className="md:text-white">
              Consectetur adipisicing elit. Hic cumque vero ipsum elit.
            </p>
          </div>
        </div>
      </div>
      <CustomVideoPlayer url="heroVideo.mp4" />
    </div>
  );
};

export default HeroSection;
