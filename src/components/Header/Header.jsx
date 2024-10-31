import React from "react";

import Logo from "../../Assets/Logo.png";
import "../MainPage/MainPage.css";

export default function Header() {
  return (
    <div className="nav_background">
      <div className="container py-2 ">
        <div className="row">
          <div className="col-12">
            <div className="md:flex md:justify-between py-2">
              <img src={Logo} alt="Logo" className="mb-2 xl:mb-0" />
              <span className="flex items-center space-x-5 mb-3 xl:mb-0">
                <button
                  style={{ backgroundColor: "transparent", border: "none" }}
                  className="mwhite font-medium"
                >
                  Home
                </button>
                <button
                  style={{ backgroundColor: "transparent", border: "none" }}
                  className="mwhite font-medium"
                >
                  Features
                </button>
                <button
                  style={{ backgroundColor: "transparent", border: "none" }}
                  className="mwhite font-medium"
                >
                  How it works
                </button>
              </span>
              <button
                style={{
                  border: "1.5px solid #EA4D46",
                  backgroundColor: "transparent",
                }}
                className="dwhite rounded-full px-3 py-2 px-md-5 font-semibold"
              >
                Sign Up Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
