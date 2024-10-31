import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Coach_Features from "../../Assets/Coach_Features.png";
import Global from "../../Assets/Global.png";
import Personal from "../../Assets/Personal.png";
import Schedule from "../../Assets/Schedule.png";
import "./Coach_Features.css";

gsap.registerPlugin(ScrollTrigger);

export default function CoachFeatures() {
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  useEffect(() => {
    if (col3Ref.current) {
      gsap.fromTo(
        col3Ref.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: col3Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (col4Ref.current) {
      gsap.fromTo(
        col4Ref.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: col4Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <p
              className="main_heading font-black text-center"
              style={{ color: "#FAFAFA" }}
            >
              What’s in it for <span className="text_color">Coach</span>
            </p>
            <p className="sub_heading text-center lwhite mb-5 font-semibold">
              FitnEarnPal empowers coaches to grow and reach a global audience
              while valuable health and fitness insights to users.{" "}
            </p>
          </div>
          <div
            className="col-6 col-md-3 pt-12 order-1 order-md-1"
            ref={col3Ref}
          >
            <span className="block text-right">
              <img
                src={Global}
                alt="Global Audience"
                className="inline-block"
              />
              <p className="content feature_heading font-bold">
                Global Audience Access
              </p>
              <p className="small_content lwhite">
                Helps you gain global audience
              </p>
            </span>

            <span className="block text-right ">
              <img
                src={Global}
                alt="Global Audience"
                className="inline-block"
              />
              <p className="content feature_heading font-bold">
                Revenue Opportunities
              </p>
              <p className="small_content lwhite">
                Helps you gain global audience
              </p>
            </span>
          </div>

          <div className="col-12 col-md-5 hover-background order-3 order-md-2">
            <img src={Coach_Features} alt="Coach Features" />
          </div>

          <div
            className="col-6 col-md-4 pb-12 order-2 order-md-3"
            ref={col4Ref}
          >
            <span>
              <img src={Personal} alt="Personal" />
              <p className="content feature_heading font-bold">
                Revenue Opportunities
              </p>
              <p className="small_content lwhite">
                Helps you gain global audience
              </p>
            </span>

            <span>
              <img src={Schedule} alt="Schedule" />
              <p className="content feature_heading font-bold">
                Work on Your Own Schedule
              </p>
              <p className="small_content lwhite">
                Helps you gain global audience
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
