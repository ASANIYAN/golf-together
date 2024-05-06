import { Button } from "@/components/ui/button";

import golf_video from "@/assets/golf_video.mp4";
import gif_fallback from "@/assets/gif_fallback_golf_img.png";
import golf_together_logo from "@/assets/golf_together_logo.svg";
import ring from "@/assets/rings.svg";

import "./landing.css";
import { useEffect, useState } from "react";

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <div
        className={`${
          !loaded ? "" : "-translate-y-full"
        } absolute top-0 left-0 w-full h-[130vh] bg-[#477C15] z-20 transition-all duration-500`}
      >
        <div className="h-screen w-full grid place-content-center z-30 bg-[#477C15]">
          <img src={ring} className="w-[90px] z-40" alt="loading animation" />
        </div>
      </div>
      <section className="">
        <section className="w-full bg-[#477C15] min-h-[48px] flex flex-wrap items-center justify-center text-white gap-2.5 p-2.5">
          <p> Upcoming Golf Together championship Inter-state competition</p>
          <p className="font-semibold underline underline-offset-2 decoration-1 text-center tracking-[-0.4px]">
            {" "}
            JoinNow{" "}
          </p>
        </section>
        <section className="flex flex-wrap justify-center min-[360px]:justify-between items-start gap-5 px-[2%] mt-2.5">
          <img
            width={92}
            height={47}
            src={golf_together_logo}
            alt="golf_together_logo"
          />

          <section className="flex items-center gap-3 py-2.5">
            {/* <section className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white shadow-md">
            <UserRound color="#477C15" width={20} height={20} />
          </section> */}
            <Button className="w-[78px] h-[32px] font-medium flex justify-center items-center border rounded-full bg-white border-[#477C15] text-[#477C15] hover:bg-[#477C15] hover:text-white text-sm leading-[22px]">
              {" "}
              Sign in
            </Button>
            <Button className="w-[91px] h-[32px] font-medium flex justify-center items-center border rounded-full bg-[#477C15] border-[#477C15] text-white hover:bg-white hover:text-[#477C15] text-sm leading-[22px]">
              {" "}
              Join now
            </Button>
          </section>
        </section>

        <section className="relative w-full h-screen">
          <section className="h-full w-full absolute -z-10 bg-black opacity-40" />
          <section className="h-full flex-col items-center justify-center">
            <section
              className={`text-white font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl text-center h-full flex flex-col justify-center items-center w-full mx-auto max-w-[600px] opacity-0 scale-[0.8] ${
                loaded && "fadeIn"
              }`}
            >
              {" "}
              <h1 className="leading-16">Unleash Your Golfing Passion </h1>
              <span className="text-white opacity-85 font-medium text-lg max-w-[600px] mt-5">
                {" "}
                A competition where passionate golfers around the world meet,
                connect and compete in an annual inter-state golf tournament.{" "}
              </span>
              <Button className="bg-[#477C15] border-[1.5px] border-[#477C15] hover:border-[#5d8e30] hover:bg-[#5d8e30] rounded-full flex justify-center items-center text-center font-semibold text-lg text-white w-full max-w-[238px] h-[48px] mt-5 hover:scale-[0.95] transition duration-300">
                {" "}
                Apply to Join{" "}
              </Button>
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
      </section>
    </>
  );
};

export default Landing;
