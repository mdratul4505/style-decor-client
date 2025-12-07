import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Wedding & Events",
    location: "New York",
    rating: 4.9,
    projects: 156,
    image: "https://i.ibb.co.com/snXLf0V/37c5bab193f67416b5c14cc89c3d03eb.jpg",
    color: "bg-pink-300",
  },
  {
    name: "James Anderson",
    role: "Home Interiors",
    location: "Los Angeles",
    rating: 4.8,
    projects: 203,
    image: "https://i.ibb.co.com/7JzWChZ5/a43fdd8fd01019f6999f5f431f7d19bf.jpg",
    color: "bg-green-300",
  },
  {
    name: "Emily Chen",
    role: "Corporate Events",
    location: "Chicago",
    rating: 4.9,
    projects: 178,
    image: "https://i.ibb.co.com/d4d6K95Z/39fdec4fbb9ae80ec24db1fda998aa03.jpg",
    color: "bg-purple-300",
  },
  {
    name: "Michael Torres",
    role: "Party & Celebrations",
    location: "Miami",
    rating: 4.7,
    projects: 134,
    image: "https://i.ibb.co.com/Nn2F12sR/66314326752a917d5fef1e49de1606a4.jpg",
    color: "bg-yellow-400",
  },
];

const OurTeam = () => {
  return (
    <div className="py-20 container mx-auto  text-center">
      <button className="font-bold px-10 text-2xl rounded-3xl py-3 bg-green-200 text-green-400">
        Our Team
      </button>

      <h2 className="text-5xl flex items-center justify-center my-5 taitle font-bold ">
          Meet Our{" "}
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["Top Decorators"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
        </h2>
      <p className="text-gray-500 mt-2 mb-10">
        Experienced professionals ready to transform your vision into reality
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px #BBF7D0" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="shadow-2xl bg-gray-50  rounded-xl p-6 flex flex-col items-center cursor-pointer"
          >
            <div
              className="w-28 h-28 rounded-full overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className={`absolute mt-[-1.5rem] ml-[3rem] p-2 rounded-full ${member.color} text-white shadow-md`}
            >
              🏅
            </span>

            <h3 className="font-bold text-lg mt-4">{member.name}</h3>
            <p className={`text-sm mt-1 ${member.color}`}>{member.role}</p>
            <p className="flex items-center text-gray-400 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" /> {member.location}
            </p>

            <div className="flex items-center justify-center mt-4 space-x-4">
              <span className="flex items-center text-yellow-400 font-semibold">
                <FaStar className="mr-1" /> {member.rating}
              </span>
              <span className="text-gray-600 font-semibold">{member.projects} projects</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
