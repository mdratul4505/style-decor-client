import React from "react";
import { FiHeart } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const values = [
  {
    title: "Creativity",
    desc: "We bring unique, innovative ideas to every project, ensuring your space stands out.",
    bg: "bg-pink-100",
    text: "text-pink-500",
  },
  {
    title: "Quality",
    desc: "We use premium materials and meticulous attention to detail in every decoration.",
    bg: "bg-teal-100",
    text: "text-teal-500",
  },
  {
    title: "Reliability",
    desc: "Count on us for timely delivery and consistent excellence in every project.",
    bg: "bg-amber-200",
    text: "text-amber-600",
  },
  {
    title: "Customer Focus",
    desc: "Your vision is our priority. We listen, adapt, and exceed expectations.",
    bg: "bg-pink-100",
    text: "text-pink-500",
  },
];

const OurValues = () => {
  return (
    <section className="bg-[#fffaf6] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold rounded-full bg-yellow-200 text-yellow-700">
          Our Values
        </span>

        <h2 className="text-5xl flex items-center justify-center my-5 taitle font-bold ">
          What{" "}
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["Drives"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          Us
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
             <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0px 20px 40px rgba(34,197,94,0.35)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gray-50 rounded-2xl p-6 space-y-5 shadow-md cursor-pointer"
            >
              <div
                className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl ${item.bg}`}
              >
                <FiHeart className={`text-2xl ${item.text}`} />
              </div>

              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default OurValues;
