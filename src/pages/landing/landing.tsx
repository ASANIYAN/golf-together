import ring from "@/assets/rings.svg";

import "./landing.css";
import { useEffect, useState } from "react";
import Hero from "@/components/landing/hero";
import Header from "@/components/landing/header";

const Landing = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 2500);
  }, []);

  return (
    <>
      <div
        className={`${
          loaded ? "" : "-translate-y-full"
        } absolute top-0 left-0 w-full h-[130vh] bg-[#477C15] z-20 transition-all duration-500`}
      >
        <div className="h-screen w-full grid place-content-center z-30 bg-[#477C15]">
          <img src={ring} className="w-[90px] z-40" alt="loading animation" />
        </div>
      </div>
      <section className="">
        <Header />
        <Hero loaded={loaded} />
      </section>
    </>
  );
};

export default Landing;
