import React from "react";
import Logo from "../../Assets/Logo.png";
import Email from "../../Assets/email.png";
import Twitter from "../../Assets/Twitter.png";
import Facebook from "../../Assets/Facebook.png";
import Insta from "../../Assets/Insta.png";
import Git from "../../Assets/Git.png";
import Apple from "../../Assets/Apple.png";
import Google from "../../Assets/Google.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="red_background py-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-xl-3 space-y-4 mb-5">
            <img src={Logo} />
            <p className="lwhite mt-3">
              FitnEarnPal is your all-in-one place where you can train people as
              per your schedule. It’s a place where you can upload workout
              videos, create live sessions, write blogs and much more. Available
              on Android and iOS. Join our community of coaches today!
            </p>
            <p className="lwhite  items-center ">
              <img
                src={Email}
                alt="Email Icon"
                className="inline-block mr-2 w-5 h-5"
              />
              help-support@fitnearn.com
            </p>

            <div className="flex  space-x-4 ">
              <img src={Twitter} />
              <img src={Facebook} />
              <img src={Insta} />
              <img src={Git} />
            </div>
          </div>
          <div className="col-6 col-xl-2 space-y-5 links ">
            <span className="dwhite content mb-2 font-bold">Useful Links</span>
            <span className="lwhite small_content">Home</span>
            <span className="lwhite small_content">How it works</span>
            <span className="lwhite small_content">Features</span>
            <span className="lwhite small_content">Sign Up form</span>
          </div>

          <div className="col-6 col-xl-2 space-y-5 links">
            <span className="dwhite content mb-2 font-bold">Policies</span>
            <span className="lwhite small_content">About us</span>
            <span className="lwhite small_content">Privacy Policy</span>
            <span className="lwhite small_content">Term & Conditions</span>
            <span className="lwhite small_content">Data Deletion</span>
          </div>
          <div className="col-12 col-xl-3 ">
            <p className="dwhite content mb-4 font-bold">Download now</p>
            <button
              className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4 mb-4"
              style={{ border: ".69px solid #F5F5F5" }}
            >
              <img
                src={Apple}
                className="h-5 w-5 align-middle"
                alt="Apple Logo"
              />
              <span className="ml-2 button_small text-left">
                Download on the <br />
                <span className="button_big p-0 m-0">App Store</span>
              </span>
            </button>
            <span className="sm:hidden block">
              <br />
            </span>
            <button
              className="button_background inline-flex items-center justify-center mwhite px-3 py-2 rounded-lg me-4 mb-4"
              style={{ border: ".69px solid #F5F5F5" }}
            >
              <img
                src={Google}
                className="h-5 w-5 align-middle"
                alt="Apple Logo"
              />
              <span className="ml-2 button_small text-left">
                Get it on <br />
                <span className="button_big p-0 m-0">Google Play</span>
              </span>
            </button>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between pt-4 "
          style={{ borderTop: ".69px solid #F5F5F5" }}
        >
          <span className="lwhite">
            © Copyright 2024, All Rights Reserved.
          </span>
          <span className="lwhite">Made with ❤️ in India</span>
          <span className="lwhite">Reg@2024</span>
        </div>
      </div>
    </div>
  );
}
