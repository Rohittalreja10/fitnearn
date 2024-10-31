import React from "react";
import Blog from "../../Assets/Blog.png";
import Session from "../../Assets/Session.png";
import Content from "../../Assets/Content.png";
import Videos from "../../Assets/Videos.png";
import "../MainPage/MainPage.css";

export default function Services() {
  const items = [
    {
      id: 1,
      address: Blog,
      heading: "Blog Writing",
      content: "Coach can write blogs",
    },
    {
      id: 2,
      address: Session,
      heading: "Live Sessions",
      content: "Coach can create live sessions",
    },
    {
      id: 3,
      address: Content,
      heading: "Content Creation",
      content: "Coach can create contents",
    },
    {
      id: 4,
      address: Videos,
      heading: "Workout Videos",
      content: "Coach can create workout videos",
    },
  ];
  return (
    <div className="my-4">
      <p className="main_heading dwhite text-center">Key Features</p>
      <div className="container">
        <div className="row justify-center pt-3">
          {items.map((item) => (
            <div className="col-10 col-md-3  dwhite mt-5 md:mt-0 ">
              <div style={{ backgroundColor: "#262626" }} className="h-100 p-2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      top: "-60px",
                    }}
                  >
                    <img src={item.address} />
                    <p
                      className="content font-bold"
                      style={{ color: "#FAFAFA" }}
                    >
                      {item.heading}
                    </p>
                    <p className="lwhite services_content text-center">
                      {item.content}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
