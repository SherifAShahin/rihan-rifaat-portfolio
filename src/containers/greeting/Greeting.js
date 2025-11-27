import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import home from "../../assets/lottie/home.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* HERO IMAGE + TEXT OVERLAY */}
              <div className="hero-container">
                <img
                  alt="Rihan Rifaat"
                  src={greeting.userImage}
                  className="hero-image"
                />

                <div className="hero-text">
                  <h1
                    className={
                      isDark ? "dark-mode greeting-text" : "greeting-text"
                    }
                  >
                    {greeting.title} <span className="wave-emoji" />
                  </h1>

                  <p
                    className={
                      isDark
                        ? "dark-mode greeting-text-p"
                        : "greeting-text-p subTitle"
                    }
                  >
                    {greeting.subTitle}
                  </p>
                </div>
              </div>

              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={home} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
