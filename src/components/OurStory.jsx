import React from 'react';
import Typewriter from "typewriter-effect";

const OurStory = () => {
    return (
         <div className="py-20 container mx-auto  text-center">
      <button className="font-bold taitle px-10 text-2xl rounded-3xl py-3 bg-green-200 text-green-400">
        Our Team
      </button>
         <h2 className="text-5xl flex items-center justify-center my-5 taitle font-bold ">
          From Passion to{" "}
          <span className="text-pink-400 mx-3">
            <Typewriter
              options={{
                strings: ["Profession"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          
        </h2>

        <p className='text-gray-500 text-center w-6/12 mx-auto m-10 '>
            StyleDecor began as a small dream of two friends who believed that beautiful spaces create beautiful memories. What started as helping friends and family with their celebrations has grown into a network of over 500 talented decorators serving clients across 50+ cities.
        </p>
        <p className='text-gray-500 w-6/12 mx-auto text-center'>
            Today, we're proud to have transformed over 15,000 spaces – from cozy living rooms to grand wedding venues. Our mission remains the same: to make professional decoration accessible, affordable, and absolutely delightful for everyone.
        </p>
      </div>
    );
};

export default OurStory;