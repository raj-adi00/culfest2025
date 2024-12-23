import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { name: "Swiggy", image: "/swiggy_logo.png" },
    { name: "Domino's", image: "/dominos_logo.png" },
    { name: "Hero MotoCorp", image: "/hero_logo.png" },
    { name: "The Social House", image: "/social_house_logo.png" },
    { name: "Himalaya Health Care", image: "/himalaya_hair_care_logo.png" },
    { name: "Sponsor 6", image: "/sponsor1.png" },
    { name: "Sponsor 7", image: "/sponsor2.png" },
    { name: "Sponsor 8", image: "/sponsor3.png" },
    { name: "Sponsor 9", image: "/sponsor4.png" },
    { name: "Sponsor 10", image: "/sponsor5.png" },
    { name: "Sponsor 11", image: "/sponsor1.png" },
    { name: "Sponsor 12", image: "/sponsor2.png" },
    { name: "Sponsor 13", image: "/sponsor3.png" },
    { name: "Sponsor 14", image: "/sponsor4.png" },
    { name: "Sponsor 15", image: "/sponsor5.png" },
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
      <div className="logo-container">
        <Image
          src="/culfest_logo.png"
          alt="Culfest 24 Logo"
          width={200}
          height={200}
          className="rotating-logo"
        />
      </div>

      {/* Sponsors Heading */}
      <div className="heading-container">
        <h1 className="heading">Our Sponsors</h1>
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
          top: 20px;
          left: 20px;
        }

        .rotating-logo {
          transform-style: preserve-3d;
          animation: rotateLogo 8s linear infinite; /* Faster rotation effect */
        }

        @keyframes rotateLogo {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Pop-up Effect for Heading */
        .heading-container {
          opacity: 0;
          animation: pop-up 1s ease-out forwards;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #fff;
          margin: 0;
          padding: 10px;
          border: 2px solid white;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, 0.6);
        }

        /* Pop-up Effect for Boxes */
        .sponsor-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 20px auto;
          opacity: 0;
          animation: pop-up 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        .sponsor-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border: 2px solid black;
          border-left: 10px solid black;
          height: 180px; /* Slightly larger height */
          width: 240px; /* Slightly larger width */
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

        /* Keyframes for Pop-up Effect */
        @keyframes pop-up {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
