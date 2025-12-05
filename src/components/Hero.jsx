import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" py-20 bg-gradient-to-br from-[#fff7f3] via-[#fffdfb] to-[#f3f6ff]">
      <div className="grid width lg:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT SECTION */}
        <div data-aos="fade-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-5">
            <FaStar className="text-orange-500" />
            <p className="text-sm font-medium text-gray-600">
              Trusted by 10,000+ customers
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Transform Your <br />
            <span className="text-pink-500">Space</span>
            <span className="ml-2">Into</span>
            <span className="ml-2 text-[#D6B4EA]">Magic</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            Book professional decorators for weddings, parties, home styling,
            and more. Beautiful designs, hassle-free booking, unforgettable
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-6">
            <button className="px-8 py-3 w-full rounded-full font-bold text-white shadow-md bg-gradient-to-r from-[#FFA8C8] to-[#D6B4EA] hover:scale-110 transition">
              Book Decoration Service →
            </button>

            <button className="px-8 py-3 w-full rounded-full border-2 font-bold text-gray-700 border-[#FFA8C8] hover:bg-[#FFA8C8] hover:text-white hover:scale-95 transition">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 mt-12 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">500+</h3>
              <p className="text-gray-600">Expert Decorators</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-500">15K+</h3>
              <p className="text-gray-600">Events Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-500">4.9</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            className="absolute -top-6 right-3 bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2"
          >
            <span className="text-pink-500 text-xl">❤️</span>
            <p className="text-sm font-semibold">100% Satisfaction</p>
          </div>

          {/* Floating Badge — Bottom Left */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            className="absolute -bottom-5 left-5 z-20 bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-2"
          >
            <span className="text-teal-500 text-xl">⭐</span>
            <p className="text-sm font-semibold">
              Excellent Service <br />
              <span className="text-xs text-gray-500">
                2,500+ 5-star reviews
              </span>
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="mt-10 space-y-5">
              <img
                data-aos="fade-right"
                src="https://i.ibb.co.com/Ldg5t7Fh/2b14de10902cd3c557dbc9734481396b.jpg"
                className="rounded-3xl h-68 w-full"

              />

              <img
                data-aos="fade-up"
                src="https://i.ibb.co.com/k2DntGzn/59096e0f4a73d0cc1152fbc61bbe1caf.jpg"
                className="rounded-3xl h-68 w-full shadow-lg  "
              />
            </div>

            <div className="space-y-5 mb-10">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                src="https://i.ibb.co.com/9m71QVvF/48a0ad101060d06ee744d978da48948d.jpg"
                className="rounded-3xl h-68 w-full shadow-lg  "
              />

              <img
                data-aos="fade-left"
                src="https://i.ibb.co.com/HDK5BYj2/7f7ca576752554d6dd2fd5de3e130d63.jpg"
                className="rounded-3xl h-68 w-full shadow-lg  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
