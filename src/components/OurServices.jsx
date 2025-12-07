import Aos from "aos";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

const OurServices = () => {

    useEffect(() => {
  Aos.init({
    duration: 1000,
    once: true, 
  });
}, []);

  return (
    <div className="container my-20 mx-auto">
      <div 
     data-aos="fade-up"
     data-aos-duration="3000"

      className="text-center ">
        <button className="text-pink-400 bg-pink-200 font-bold px-10 text-2xl rounded-3xl py-3">
          Our Services
        </button>
        <h2 className="text-5xl flex items-center justify-center my-5 taitle font-bold ">
          Popular{" "}
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["Decoration"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          Services
        </h2>
        <p className="font-semibold">From intimate gatherings to grand celebrations, our expert decorators bring your <br /> vision to life</p>
      </div>
    </div>
  );
};

export default OurServices;
