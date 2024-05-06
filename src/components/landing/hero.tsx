import golf_video from "@/assets/golf_video.mp4";
import gif_fallback from "@/assets/gif_fallback_golf_img.png";
import { Link } from "react-router-dom";

type HeroProps = {
  loaded: boolean;
};

const Hero: React.FC<HeroProps> = ({ loaded }) => {
  return (
    <section className="relative w-full h-screen">
      <section className="h-full w-full absolute -z-10 bg-black opacity-40" />
      <section className="h-full flex-col items-center justify-center">
        <section
          className={`text-white font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl text-center h-full flex flex-col justify-center items-center w-full mx-auto max-w-[600px] opacity-0 scale-[0.8] ${
            !loaded && "fadeIn"
          }`}
        >
          {" "}
          <h1 className="leading-16">Unleash Your Golfing Passion </h1>
          <span className="text-white opacity-85 font-medium text-lg max-w-[600px] mt-5">
            {" "}
            A competition where passionate golfers around the world meet,
            connect and compete in an annual inter-state golf tournament.{" "}
          </span>
          <Link
            to={"/login"}
            className="bg-[#477C15] border-[1.5px] border-[#477C15] hover:border-[#5d8e30] hover:bg-[#5d8e30] rounded-full flex justify-center items-center text-center font-semibold text-lg text-white w-full max-w-[238px] h-[48px] mt-5 hover:scale-[0.95] transition duration-300"
          >
            {" "}
            Apply to Join{" "}
          </Link>
        </section>
      </section>
      <video
        className="w-full h-full top-0 left-0 absolute object-cover -z-20 select-none"
        autoPlay
        loop
        muted
        playsInline
        poster={gif_fallback}
      >
        <source src={golf_video} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
