import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  const sponsors = [
    { name: "Swiggy", image: "/swiggy_logo.png" },
    { name: "Jharkhand Tourism", image: "/titlesplogo.png" },
    { name: "Domino's", image: "/dominos_logo.png" },
    { name: "Hero MotoCorp", image: "/hero_logo.png" },
    { name: "The Social House", image: "/social_house_logo.png" },
    { name: "Himalaya Health Care", image: "/himalaya_hair_care_logo.png" },
    { name: "VLCC", image: "/sponsors/previousSponsors/vlcc.png" },
    {
      name: "Chicago Pizza",
      image: "/sponsors/previousSponsors/chicagoPizza.png",
    },
    { name: "Beyond", image: "/sponsors/previousSponsors/beyond.png" },
    {
      name: "Career Launcher",
      image: "/sponsors/previousSponsors/careerLauncher.png",
    },
    {
      name: "Coding Blocks",
      image: "/sponsors/previousSponsors/CodingBlocks.png",
    },
    {
      name: "cureMantra",
      image: "/sponsors/previousSponsors/cureMantra.png",
    },
    {
      name: "dareCompete",
      image: "/sponsors/previousSponsors/dareCompete.png",
    },
    {
      name: "FairAndHandsome",
      image: "/sponsors/previousSponsors/FairAndHandsome.png",
    },
    {
      name: "IES Master",
      image: "/sponsors/previousSponsors/IESMaster.png",
    },
    {
      name: "Pizza Hut",
      image: "/sponsors/previousSponsors/PizzaHut.png",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        backgroundImage: "url(/bg13.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Rotating Logo Positioned in Top-Left Corner */}
      <Link href="/" className="absolute left-5 top-5">
        <img
          src="colorLogo.png"
          alt="CULFEST Logo"
          className="animate-bounce-slow h-auto w-20 rounded-lg bg-gray-800 bg-opacity-50 p-2 backdrop-blur-md md:w-28"
        />
      </Link>

      {/* Sponsors Heading */}
      <div className="heading-container">
        <h1 className="heading font-AnotherFont">Our Sponsors</h1>
      </div>

      {/* New Sponsor Section */}
      <div className="sponsor-section">
       
        <div className="sponsor-image-box">
          <Image
            src="/titlesp.png" // Replace with the actual path to the title sponsor image
            alt="Title Sponsor"
            width={300}
            height={200}
            className="title-sponsor-image"
          />
        </div>
        <h2 className="sponsor-section-title font-Pacifico text-4xl text-white ml-12" >Title  Sponsor</h2>
      </div>

      {/* Sponsors Grid */}
      <div className="sponsor-container">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-box">
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={180}
              height={100}
              className="sponsor-image"
            />
            <div className="sponsor-name">{sponsor.name}</div>
          </div>
        ))}
      </div>
  
      {/* Styles */}
      <style jsx>{`
        /* Rotating Logo */
        .logo-container {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 12vw; /* Responsive logo size */
          max-width: 150px; /* Prevent excessive size */
        }

        .rotating-logo {
          width: 100%;
          height: auto;
          animation: rotateLogo 8s linear infinite;
        }

        @keyframes rotateLogo {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Static Heading */
        .heading-container {
          margin-bottom: 20px;
        }

        .heading-box {
          display: inline-block;
          padding: 15px 30px;
          border-radius: 12px;
          background-color: #1a1a1a; /* Dark background */
          position: relative;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff; /* White text color */
          text-align: center;
          margin: 0;
          letter-spacing: 1.5px;
          text-transform: none;
        }

        /* Sponsors Grid */
        .sponsor-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 20px auto;
          width: 100%;
        }

        .sponsor-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border: 2px solid black;
          border-left: 10px solid black;
          height: 180px;
          margin: auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          transform: scale(0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sponsor-box:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
        }

        .sponsor-image {
          transition: transform 0.3s ease;
        }

        .sponsor-box:hover .sponsor-image {
          transform: scale(1.2);
        }

        .sponsor-name {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          width: 100%;
          text-align: center;
          padding: 5px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sponsor-box:hover .sponsor-name {
          opacity: 1;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .heading {
            font-size: 1.8rem;
          }

          .sponsor-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .sponsor-box {
            height: 160px;
          }

          .logo-container {
            width: 15vw;
            max-width: 100px;
          }
        }

        @media (max-width: 480px) {
          .heading {
            font-size: 1.5rem;
          }

          .sponsor-container {
            grid-template-columns: 1fr;
          }

          .sponsor-box {
            height: 140px;
          }

          .logo-container {
            width: 20vw;
            max-width: 80px;
          }
        }
      `}</style>
    </div>
  );
}
