import React from "react";
import "../MainPage/MainPage.css";

export default function Join() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            {" "}
            <p className="dwhite main_heading font-black">
              Join growing community of Coaches
            </p>
            <p className="lwhite sub_heading mb-5 font-semibold">
              FitnEarnPal is your getaway to connect with a global community of
              health and fitness enthusiastic, share experience and valuable
              knowledge, and grow their audience. As a coach you have the power
              to inspire, educate and motivate users worldwide by creating and
              sharing impactful content, workout videos, conducting live
              sessions and much more.
            </p>
            <button className="button_background text-white px-4 py-1 rounded-lg font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
