import Aos from "aos";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";
import { FiSearch, FiCalendar, FiFeather, FiAward } from "react-icons/fi";
import Typewriter from "typewriter-effect";
const SimpleProcess = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-40 mb-20 container mx-auto ">
      <div data-aos="fade-up" data-aos-duration="3000" className="text-center">
        <button className="text-purple-400 bg-purple-200 font-bold px-10 text-2xl rounded-3xl py-3">
          Simple Process
        </button>

        <h2 className="text-5xl flex items-center justify-center my-5 taitle font-bold ">
          How{" "}
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["StyleDecor"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          Works
        </h2>
        <p className="font-semibold">
          Book your perfect decoration in just a few simple steps
        </p>
      </div>

      <div className="container mx-auto my-20 px-5">
        <div className=" gap-10  relative">
          <Marquee>
            {/* STEP 1 */}
            <div className="relative text-center mx-25 z-10">
              <div className="relative flex flex-col items-center">
                {/* Step Number */}
                <span className="absolute -top-3 bg-[#0d1b2a] text-white h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold">
                  1
                </span>

                {/* Icon Box */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px #fc7cab",
                  }}
                  className="h-28 w-28 bg-pink-100 rounded-2xl flex items-center justify-center"
                >
                  <FiSearch className="text-pink-400 text-5xl" />
                </motion.div>

                <h3 className="font-bold text-lg mt-4">Browse Services</h3>
                <p className="text-gray-600 mt-2">
                  Explore our wide range of decoration <br />
                  services for any occasion
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative text-center z-10">
              <div className="relative flex flex-col items-center">
                <span className="absolute -top-3 bg-[#0d1b2a] text-white h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold">
                  2
                </span>

                <div className="h-28 w-28 bg-green-100 rounded-2xl flex items-center justify-center">
                  <FiCalendar className="text-green-500 text-5xl" />
                </div>

                <h3 className="font-bold text-lg mt-4">Book a Date</h3>
                <p className="text-gray-600 mt-2">
                  Choose your preferred date and fill in <br />
                  event details
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative mx-25 text-center z-10">
              <div className="relative flex flex-col items-center">
                <span className="absolute -top-3 bg-[#0d1b2a] text-white h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold">
                  3
                </span>

                <div className="h-28 w-28 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <FiFeather className="text-purple-500 text-5xl" />
                </div>

                <h3 className="font-bold text-lg mt-4">Get Decorated</h3>
                <p className="text-gray-600 mt-2">
                  Our expert decorators transform your <br />
                  space beautifully
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="relative text-center z-10">
              <div className="relative flex flex-col items-center">
                <span className="absolute -top-3 bg-[#0d1b2a] text-white h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold">
                  4
                </span>

                <div className="h-28 w-28 bg-yellow-200 rounded-2xl flex items-center justify-center">
                  <FiAward className="text-yellow-600 text-5xl" />
                </div>

                <h3 className="font-bold text-lg mt-4">Celebrate!</h3>
                <p className="text-gray-600 mt-2">
                  Enjoy your stunning space and create <br />
                  lasting memories
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SimpleProcess;
