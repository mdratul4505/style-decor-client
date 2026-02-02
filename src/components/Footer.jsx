import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuFlower2 } from "react-icons/lu";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-16">
      <div className="container mx-auto   grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex font-bold space-x-1 items-center taitle text-4xl">
            <p>
            {" "}
            <button className="bg-gradient-to-r from-pink-300 to-purple-300 p-2 rounded-2xl">
              <LuFlower2 /> </button>
                </p>
           <p> Style <span className="text-pink-400">Decor</span></p>
          </div>
          
          <p className="text-gray-300">
            Transform your special moments with our professional decoration
            services. From weddings to corporate events, we bring your vision to
            life.
          </p>

          {/* Contact Info */}
          
        </div>



        {/* Company */}
        <div className="space-y-2">
          <h3 className="font-bold text-white mb-2">Company</h3>
          <ul className="space-y-1 text-gray-300">
            <Link to=''>About Us</Link>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h3 className="font-bold text-white mb-2">Support</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
        <div>
            <div className="space-y-1 text-gray-300">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> dev.ratul.coder@gmail.com
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 rotate-90" /> +880 1985 435655
            </p>

          </div>

          {/* Working Hours */}
          <div className="bg-[#4B362D] p-4 rounded-lg text-left text-gray-300 mt-4">
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4  mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">© 2025 StyleDecor. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400">
         <Link to='https://www.facebook.com/cadet.ratul.2024'> <FaFacebookF  className="hover:text-white block cursor-pointer" /></Link>
          <Link to='https://www.instagram.com/'><FaInstagram to='' className="hover:text-white cursor-pointer" /></Link>
         <Link to='https://x.com/'> <FaXTwitter className="hover:text-white cursor-pointer" /></Link>
          <Link to='https://www.linkedin.com/in/mdratul-hasan/'><FaLinkedinIn  className="hover:text-white cursor-pointer" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
