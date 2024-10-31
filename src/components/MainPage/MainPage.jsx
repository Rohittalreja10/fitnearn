import React from "react";

import "./MainPage.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Join from "../Join/Join";
import YogaTrainer from "../YogaTrainer/YogaTrainer";
import Services from "../Services/Services";
import Coach from "../Coach/Coach";
import Working from "../Working/Working";
import CoachIntro from "../CoachIntro/CoachIntro";
import Footer from "../Footer/Footer";
import CoachFeatures from "../CoachFeatures/CoachFeatures";

export default function MainPage() {
  return (
    <div className="main_background family">
      <Header />
      <Hero />
      <Join />
      <YogaTrainer />
      <CoachFeatures />
      <Services />
      <Coach />
      <Working />
      <CoachIntro />
      <Footer />
    </div>
  );
}
