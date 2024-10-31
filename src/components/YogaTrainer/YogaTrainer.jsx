import React from "react";
import Y2 from "../../Assets/y2.jpg";
import Y1 from "../../Assets/y1.jpg";
import Y3 from "../../Assets/y3.jpg";
import Y4 from "../../Assets/y4.jpg";
import Y5 from "../../Assets/y5.jpg";
import "./YogaTrainer.css";

export default function YogaTrainer() {
  const items = [
    { id: 1, address: Y1, post: "Fitness Trainer" },
    { id: 2, address: Y2, post: "Meditation Trainer" },
    { id: 3, address: Y3, post: "Yoga Trainer" },
    { id: 4, address: Y4, post: "Physiotherapy Trainer" },
    { id: 5, address: Y5, post: "Rehab & Recovery Experts" },
    { id: 6, address: Y5, post: "Doctors" },
  ];

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          {items.map((item) => (
            <div className="col-12 col-md-4 image-container">
              <img src={item.address} alt={item.post} />
              <p className="font-semibold">{item.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
