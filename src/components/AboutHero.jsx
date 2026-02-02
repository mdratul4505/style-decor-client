import React from 'react';

const AboutHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-pink-100 text-pink-400">
          About Us
        </span>

        <h1 className="text-5xl taitle font-extrabold leading-tight text-gray-900">
          Transforming Spaces Into{" "}
          <span className="text-pink-400">Memorable Experiences</span>
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
          Since 2015, StyleDecor has been turning ordinary spaces into
          extraordinary experiences. Our passionate team of decorators brings
          creativity, precision, and heart to every project – from intimate home
          makeovers to grand celebrations.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold px-8 py-4 rounded-full transition">
          Explore Our Services
          <span>→</span>
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative flex gap-6 justify-center md:justify-end">
        
        {/* Main Image */}
        <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
            alt="Decor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="w-56 h-72 rounded-2xl overflow-hidden shadow-lg mt-12">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Experience Card */}
        <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-xl">
          <h3 className="text-2xl font-bold text-pink-400">10+</h3>
          <p className="text-sm text-gray-500">Years of Excellence</p>
        </div>
      </div>
    </section>
    );
};

export default AboutHero;