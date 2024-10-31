import React from "react";
import Register from "../../Assets/Register.png";
import Verify from "../../Assets/Verify.png";
import CContent from "../../Assets/CContent.png";
import Engage from "../../Assets/Engage.png";
import "./Working.css";

export default function Working() {
  const items = [
    {
      id: 1,
      address: Register,
      Heading: "Register",
      content:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      id: 2,
      address: Verify,
      Heading: "Verify",
      content:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      id: 3,
      address: CContent,
      Heading: "Create Content",
      content:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      id: 4,
      address: Engage,
      Heading: "Engage With Users",
      content:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
  ];

  return (
    <div className="red_background py-5">
      <p className="dwhite main_heading font-black text-center">
        How It Works ?
      </p>
      <div className="container mx-auto">
        <div className="relative">
          <div
            className="absolute h-1 line z-0 hidden xl:block"
            style={{
              top: "70px",
              left: "0",
              right: "0",
              margin: "0 auto",
              width: "80%",
            }}
          ></div>

          <div className="container ">
            <div className="row">
              {items.map((item) => (
                <div className="col-12 col-md-3   justify-between w-full z-10">
                  <div
                    key={item.id}
                    className="text-center flex flex-col items-center relative p-4"
                  >
                    <img
                      src={item.address}
                      alt={item.Heading}
                      className="mb-2"
                    />
                    <p className="wwhite content font-bold">{item.Heading}</p>
                    <p className="lwhite">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
