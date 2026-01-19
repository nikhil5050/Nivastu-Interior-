import React, { useState, useEffect } from "react";
import LightRays from "./LightRays";
import TextPressure from "./TextPressure";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkRes = () => setIsMobile(window.innerWidth < 768);
    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);

  // Soft Winter Hover Effects
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background = "#7A4A4D"; // Winter Berry
    target.style.color = "#F5F1EF";      // Snowflake
    target.style.borderColor = "#7A4A4D";
    target.style.transform = "translateY(-2px)";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background = "transparent";
    target.style.color = "#7A4A4D";      // Winter Berry
    target.style.borderColor = "#B08682"; // Frosted Leaf
    target.style.transform = "translateY(0)";
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: "#F5F1EF", // Snowflake (Main Background)
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 1. Background Layer - Soft Gradient Rays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#EBE0D8" // Iced Oat (Subtle Rays)
          raysSpeed={1.0}
          lightSpread={0.9}
          rayLength={1.5}
          followMouse={!isMobile}
          mouseInfluence={0.05}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      {/* 2. Content Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isMobile ? "80px 24px 40px" : "120px 20px 40px",
          textAlign: "center",
          height: "auto",
        }}
      >
        <h1
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            border: "0",
          }}
        >
          Nivastu Interiors - Premium Soft Winter Interior Design
        </h1>

        {/* First Line: NIVASTU - Accentuated with Winter Berry */}
        <div
          style={{
            width: isMobile ? "90%" : "75%",
            maxWidth: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
            overflow: "visible",
          }}
        >
          <TextPressure
            text="NIVASTU"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#7A4A4D" // Winter Berry
            minFontSize={isMobile ? 52 : 85}
          />
        </div>

        {/* Second Line: Sub-headline with Frosted Leaf tone */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <span
            style={{
              color: "#B08682", // Frosted Leaf
              fontSize: "clamp(12px, 3.5vw, 18px)",
              fontWeight: "400",
              letterSpacing: isMobile ? "0.6em" : "0.8em",
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif", // Serifs look high-end with this palette
              opacity: 0.9,
              marginRight: isMobile ? "-0.6em" : "-0.8em",
              textAlign: "center",
            }}
          >
           Interior Studio Pune
          </span>
        </div>

        {/* 3. Description & Button Layer */}
        <div
          style={{
            marginTop: isMobile ? "45px" : "65px",
            maxWidth: "650px",
            padding: "0 15px",
          }}
        >
          <p
            style={{
              color: "#7A4A4D", // Winter Berry (Low opacity for body)
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: "1.9",
              fontWeight: "300",
              fontFamily: "serif",
              margin: "0 auto",
              letterSpacing: "0.01em",
              opacity: 0.85,
            }}
          >
            Nivastu Interiors brings a minimalist, high-end approach to Pune's homes. 
            We specialize in practical luxury—creating well-planned spaces with 
            sophisticated palettes for refined everyday living.
          </p>

          <div style={{ marginTop: isMobile ? "40px" : "50px" }}>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #B08682", // Frosted Leaf
                color: "#7A4A4D",             // Winter Berry
                padding: isMobile ? "18px 44px" : "15px 40px",
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                outline: "none",
                borderRadius: "2px", // Sharp/Minimalist corners for luxury feel
                width: isMobile ? "100%" : "auto",
                maxWidth: "320px",
                fontWeight: "500",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;