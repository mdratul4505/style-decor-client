import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const reviews = [
  {
    name: "Jennifer Wilson",
    role: "Bride",
    image: "https://i.pravatar.cc/100?img=32",
    quote:
      "StyleDecor made our wedding day absolutely magical! The attention to detail was incredible, and they understood our vision perfectly.",
    color: "bg-pink-100 text-pink-500",
  },
  {
    name: "Robert Chen",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?img=12",
    quote:
      "Transformed our living room into a stunning space. The team was professional, punctual, and the results exceeded our expectations!",
    color: "bg-teal-100 text-teal-500",
  },
  {
    name: "Amanda Foster",
    role: "Event Planner",
    image: "https://i.pravatar.cc/100?img=45",
    quote:
      "I've worked with many decorators, but StyleDecor stands out. Their creativity and execution are top-notch!",
    color: "bg-purple-100 text-purple-500",
  },
];

const ClientReview = () => {
  return (
    <section className="py-20 container mx-auto text-center">
      {/* Header */}
      <div>
        <button className="font-bold px-10 text-2xl rounded-3xl py-3 bg-pink-200 text-pink-500">
          Testimonials
        </button>

        <h2 className="text-5xl flex items-center justify-center my-5 font-bold">
          What Our
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["Clients"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          Say
        </h2>

        <p className="text-gray-500 font-semibold mt-2 mb-12">
          Don't just take our word for it – hear from our happy customers
        </p>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
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
              {/* Quote Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}
              >
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600">"{item.quote}"</p>

              <hr />

              {/* User */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
