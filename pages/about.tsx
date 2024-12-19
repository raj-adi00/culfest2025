import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaMusic,
  FaPaintBrush,
} from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with opacity hello world */}
      <div
        className="absolute left-0 top-0 z-0  bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/party.jpg')" }}
      ></div>

      {/* Content on top of the background image */}
      <div
        className="relative z-10 min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-8 text-gray-100"
        style={{
          backgroundImage: "url('/Background4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // width: "100vw", // Ensures the width spans the viewport
          // height: "100vh", // Ensures the height spans the viewport
          // minHeight: "100vh", // A fallback to ensure minimum height fills the screen
        }}
      >
        <div className="flex">
          {" "}
        
          <div className="container mx-auto text-center">
            <h1 className="2 text-shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-red-500 bg-clip-text font-Pacifico text-5xl font-bold text-transparent">
              Welcome to Culfest 2025
            </h1>

            <Image
              src="/colorLogo.png"
              alt="Cultural Fest"
              width={700}
              height={450}
              className="mx-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 animate-pulse"
            />


            <section className="mt-16">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                  About Culfest
                </span>
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Culfest is not just an event; it's an experience! Hosted
                annually, it brings together participants from across the globe
                to celebrate art, music, dance, and everything in between. This
                is where budding artists find their stage, creative minds find
                inspiration, and communities come together to revel in the magic
                of culture.
              </p>
              <p className="mt-4 text-lg leading-relaxed opacity-90">
                Over the years, Culfest has become a beacon of talent and
                togetherness, featuring workshops, competitions, and
                electrifying performances that captivate audiences of all ages.
                Whether you're an artist, a performer, or simply someone who
                loves vibrant energy, there's something here for you.
              </p>
            </section>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                <FaCalendarAlt className="mb-4 text-5xl text-yellow-400" />
                <h3 className="text-2xl font-semibold">Dates</h3>
                <p>March 12-14, 2025</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                <FaUsers className="mb-4 text-5xl text-purple-400" />
                <h3 className="text-2xl font-semibold">Team</h3>
                <p>A collective of passionate organizers making it happen!</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                <FaStar className="mb-4 text-5xl text-pink-400" />
                <h3 className="text-2xl font-semibold">Events</h3>
                <p>Live music, dance-offs, art exhibits, and much more!</p>
              </div>
            </div>

            <section className="mt-16 px-6 text-left">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                  Why Attend Culfest 2025?
                </span>
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Culfest 2025 promises an array of spectacular events,
                captivating performances, and interactive workshops. Join us to:
              </p>
              <ul className="mt-4 list-inside list-disc text-lg leading-relaxed opacity-90">
                <li>
                  Immerse yourself in the vibrant world of art and culture.
                </li>
                <li>
                  Showcase your talent on a platform that celebrates creativity.
                </li>
                <li>
                  Network with like-minded individuals and industry experts.
                </li>
                <li>
                  Experience the thrill of live music, dance, and much more!
                </li>
                <li>
                  Connect with fellow artists, performers, and enthusiasts.
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  Highlights
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                  <FaMusic className="mb-4 text-5xl text-indigo-500" />
                  <h3 className="text-xl font-semibold">Live Music</h3>
                  <p>
                    Groove to the beats of live bands, DJ nights, and
                    electrifying performances.
                  </p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                  <FaPaintBrush className="mb-4 text-5xl text-pink-500" />
                  <h3 className="text-xl font-semibold">Art & Creativity</h3>
                  <p>
                    Witness stunning art installations, participate in creative
                    workshops, and ignite your imagination.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
