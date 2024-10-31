import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoachImage from "../../Assets/Coach.png";
import Apple from "../../Assets/Apple.png";
import Google from "../../Assets/Google.png";

gsap.registerPlugin(ScrollTrigger);

export default function Coach() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="text-center py-5">
      <div className="flex flex-col justify-center items-center">
        <p className="main_heading dwhite ">
          Become <span className="text_color">Coach</span> Today
        </p>
        <img ref={imageRef} src={CoachImage} alt="Coach" className="my-5" />
      </div>
      <button className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4">
        <img src={Apple} className="h-5 w-5 align-middle" alt="Apple Logo" />
        <span className="ml-2 button_small text-left">
          Download on the <br />
          <span className="button_big p-0 m-0">App Store</span>
        </span>
      </button>
      <span className="sm:hidden block">
        <br />
      </span>
      <button className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4">
        <img src={Google} className="h-5 w-5 align-middle" alt="Apple Logo" />
        <span className="ml-2 button_small text-left">
          Get it on <br />
          <span className="button_big p-0 m-0">Google Play</span>
        </span>
      </button>
    </div>
  );
}
