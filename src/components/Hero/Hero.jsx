import React from "react";
import HeroImage from "../../Assets/HeroImage.png";
import Eclipse from "../../Assets/Eclipse.png";
import "./Hero.css";
import Smile from "../../Assets/smile.png";
import Apple from "../../Assets/Apple.png";
import Google from "../../Assets/Google.png";
import "../MainPage/MainPage.css";

export default function Hero() {
  return (
    <div className="main_background py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-7  flex items-center justify-center">
            <div>
              <p
                style={{ display: "inline-flex", alignItems: "center" }}
                className="mb-4 typewriter font-extrabold"
              >
                <img src={Smile} className="heroi" />
                <span className="dwhite font-extrabold main_heading ms-3 ">
                  Hey, Awesome Coach
                </span>
              </p>
              <p className="dwhite sub_heading font-semibold mb-4">
                Expand Your Reach, Inspire More <br />
                Lives{" "}
                <span className="text_color">Join FitnEarnPal Today!</span>
              </p>
              <p className="lwhite font-medium content mb-4">
                A global platform for coaches to connect, inspire, and change
                lives
              </p>
              <button className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4">
                <img
                  src={Apple}
                  className="h-5 w-5 align-middle"
                  alt="Apple Logo"
                />
                <span className="ml-2 button_small text-left font-semibold">
                  Download on the <br />
                  <span className="button_big p-0 m-0 font-medium">
                    App Store
                  </span>
                </span>
              </button>
              <span className="sm:hidden block">
                <br />
              </span>
              <button className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4">
                <img
                  src={Google}
                  className="h-5 w-5 align-middle"
                  alt="Apple Logo"
                />
                <span className="ml-2 button_small text-left font-semibold">
                  Get it on <br />
                  <span className="button_big p-0 m-0 font-medium">
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="col-0 col-md-5 hover-background">
            <img src={HeroImage} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
