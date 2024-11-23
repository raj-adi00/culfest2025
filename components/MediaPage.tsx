import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const dummyImages = [
  { id: 1, url: "/Media/img1.png" },
  { id: 2, url: "/Media/img2.png" },
  { id: 3, url: "/Media/img3.png" },
  { id: 4, url: "/Media/img4.png" },
  { id: 5, url: "/Media/img5.png" },
];

export default function MediaPage() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: -100,
        scale: 0.8,
        rotate: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Stagger the images entrance
    tl.fromTo(
      imagesRef.current,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100),
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredRow(id);
    gsap.to(`#image-${id}`, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });

    // Animate sibling images
    imagesRef.current.forEach((img) => {
      if (img && img.id !== `image-${id}`) {
        gsap.to(img, {
          scale: 0.98,
          opacity: 0.7,
          duration: 0.4,
        });
      }
    });
  };

  const handleMouseLeave = (id: number) => {
    setHoveredRow(null);
    gsap.to(`#image-${id}`, {
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // Restore sibling images
    imagesRef.current.forEach((img) => {
      gsap.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
      });
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5vh",
        backgroundColor: "rgb(2 2 33)",
        minHeight: "100vh",
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
      }}
    >
      <div>
        <img
          src="/colorLogo.png"
          alt="Logo"
          className="absolute left-2 top-2  h-20 "
        />
      </div>
      {/* <div className="flex"> */}
        <div
          ref={headerRef}
          style={{
            // color: "yellow",
            fontSize: "5rem",
            fontWeight: "bold",
            marginBottom: "2vh",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "10px 20px",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            display: "inline-block",
            backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
          }}
          // style={{}}
          className="font-AnotherFont text-6xl text-yellow-600"
        >
          Media
        </div>

        {/* <div>
          <img
            src="/colorLogo.png"
            alt="Logo"
            className="absolute left-2 top-2  h-40 "
          />
        </div> */}
      {/* </div> */}

      {dummyImages.map((image, index) => {
        return (
          <div
            key={image.id}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              padding: "0 0vw",
            }}
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={() => handleMouseLeave(image.id)}
          >
            <div
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              id={`image-${image.id}`}
              style={{
                width: "90vw",
                maxWidth: "600px",
                aspectRatio: "16/9",
                transition: "transform 0.5s ease",
              }}
            >
              <img
                src={image.url}
                alt={`Media ${image.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
                  transition: "box-shadow 0.3s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
