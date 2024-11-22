// pages/about.tsx
import React from 'react';
import Image from 'next/image';
import { FaStar, FaCalendarAlt, FaUsers, FaMusic, FaPaintBrush } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="relative">
      {/* Background image with opacity */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40 z-1"
        style={{ backgroundImage: "url('/party.jpg')" }}
      ></div>

      {/* Content on top of the background image */}
      <div className="relative z-10 bg-gradient-to-r from-black via-gray-900 to-black min-h-screen text-gray-100 p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 font-serif text-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
              Welcome to Culfest 2025
            </span>
          </h1>
          <p className="text-xl mb-8 font-light tracking-wide opacity-90">
            Dive into the heart of creativity, culture, and celebration. Culfest 2025 is your gateway to a world where talents shine, cultures blend, and unforgettable memories are created!
          </p>

          <Image
            src="/4.png"
            alt="Cultural Fest"
            width={700}
            height={450}
            className="mx-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500">
                About Culfest
              </span>
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Culfest is not just an event; it's an experience! Hosted annually, it brings together participants from across the globe to celebrate art, music, dance, and everything in between. This is where budding artists find their stage, creative minds find inspiration, and communities come together to revel in the magic of culture.
            </p>
            <p className="text-lg opacity-90 leading-relaxed mt-4">
              Over the years, Culfest has become a beacon of talent and togetherness, featuring workshops, competitions, and electrifying performances that captivate audiences of all ages. Whether you're an artist, a performer, or simply someone who loves vibrant energy, there's something here for you.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg">
              <FaCalendarAlt className="text-5xl text-yellow-400 mb-4" />
              <h3 className="font-semibold text-2xl">Dates</h3>
              <p>March 12-14, 2025</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg">
              <FaUsers className="text-5xl text-purple-400 mb-4" />
              <h3 className="font-semibold text-2xl">Team</h3>
              <p>A collective of passionate organizers making it happen!</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg">
              <FaStar className="text-5xl text-pink-400 mb-4" />
              <h3 className="font-semibold text-2xl">Events</h3>
              <p>Live music, dance-offs, art exhibits, and much more!</p>
            </div>
          </div>

          <section className="mt-16 text-left px-6">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500">
                Why Attend Culfest 2025?
              </span>
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Culfest 2025 promises an array of spectacular events, captivating performances, and interactive workshops. Join us to:
            </p>
            <ul className="list-disc list-inside text-lg opacity-90 mt-4 leading-relaxed">
              <li>Immerse yourself in the vibrant world of art and culture.</li>
              <li>Showcase your talent on a platform that celebrates creativity.</li>
              <li>Network with like-minded individuals and industry experts.</li>
              <li>Experience the thrill of live music, dance, and much more!</li>
              <li>Connect with fellow artists, performers, and enthusiasts.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
                Highlights
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg">
                <FaMusic className="text-5xl text-indigo-500 mb-4" />
                <h3 className="font-semibold text-xl">Live Music</h3>
                <p>
                  Groove to the beats of live bands, DJ nights, and electrifying performances.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg">
                <FaPaintBrush className="text-5xl text-pink-500 mb-4" />
                <h3 className="font-semibold text-xl">Art & Creativity</h3>
                <p>
                  Witness stunning art installations, participate in creative workshops, and ignite your imagination.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
