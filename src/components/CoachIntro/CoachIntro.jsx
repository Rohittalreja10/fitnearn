import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YograTeacher from "../../Assets/YogaTrainer.png";
import Robert from "../../Assets/Robert.png";
import "./CoachIntro.css";

export default function CoachIntro() {
  const items = [
    {
      id: 1,
      rating: "★★★★★",
      review:
        "After Joining FitnEarnPal my audience reach has increased and I can work according to my time which I liked the most.",
      address: YograTeacher,
      coach: "Coach Name",
      post: "Yoga Trainer",
    },
    {
      id: 2,
      rating: "★★★★★",
      review:
        "FitnEarnPal has provided me with the opportunity to grow my client base tremendously.",
      address: YograTeacher,
      coach: "Another Coach",
      post: "Fitness Trainer",
    },
    {
      id: 3,
      rating: "★★★★★",
      review:
        "Joining this platform was the best decision for my flexible work schedule.",
      address: YograTeacher,
      coach: "Coach Name 3",
      post: "Yoga Instructor",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <div className="container py-5" style={{ height: "100%" }}>
        <p className="main_heading font-black dwhite text-center">
          What our <span className="text_color">Coach Say</span>
        </p>
        <p className="lwhite text-center sub_heading font-semibold">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          valuable health and fitness insights to users.{" "}
        </p>
        <div className="row justify-center mt-5" style={{ height: "100%" }}>
          <div className="col-1">
            <img
              src={Robert}
              alt="Robert "
              className="rounded-full image hidden xl:block"
            />
          </div>
          <div className="col-2 ">
            <img
              src={Robert}
              alt="Robert"
              className="image1 rounded-full image"
            />
            <img
              src={Robert}
              alt="Robert"
              className="image1 rounded-full image"
            />
          </div>
          <div className="col-6 col-md-3 slider-wrapper text-center justify-center">
            <Slider {...sliderSettings}>
              {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <p style={{ color: "#FB923C" }}>{item.rating}</p>
                  <p className="lwhite">{item.review}</p>
                  <div className="flex justify-center">
                    <img
                      src={item.address}
                      alt={item.coach}
                      className="mx-auto mb-2 "
                    />
                  </div>
                  <p className="dwhite content font-bold">{item.coach}</p>
                  <p className="lwhite">{item.post}</p>
                </div>
              ))}
            </Slider>
          </div>

          <div className="col-2 flex justify-end items-end">
            <img
              src={Robert}
              alt="Robert"
              className="image1 rounded-full image"
            />
            <img
              src={Robert}
              alt="Robert"
              className="image1 rounded-full image"
            />
          </div>
          <div className="col-1">
            <img
              src={Robert}
              alt="Robert"
              className="rounded-full image hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
