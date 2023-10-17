import React, { Component } from "react";
import HeroSlider, { Slide, MenuNav } from "hero-slider";

// import Router from 'react-router-dom'

// imgaes
import img1 from "../images/thees1.jpg";
import img2 from "../images/thees2.jpg";
import img3 from "../images/thees3.jpg";
import img4 from "../images/thees4.jpg";
import img5 from "../images/thees5.jpg";
import img6 from "../images/thees6.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" style={{ backgroundColor: "#000524" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "50px 0 50px 0",
          }}
        >
          THE PHOTO GALLERY SPEAKS FOR ITSELF!
        </p>
        <HeroSlider
          height={"100vh"}
          width={"70vw"}
          style={{ margin: "auto" }}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <Slide
            background={{
              backgroundImageSrc: img1,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img2,
              backgroundAttachment: "fixed",
            }}
          />{" "}
          <Slide
            background={{
              backgroundImageSrc: img3,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img4,
              backgroundAttachment: "fixed",
            }}
          />
            <Slide
            background={{
              backgroundImageSrc: img5,
              backgroundAttachment: "fixed",
            }}
          />
            <Slide
            background={{
              backgroundImageSrc: img6,
              backgroundAttachment: "fixed",
            }}
          />
          <MenuNav color="#ffffff" activeColor="#ffffff" />
        </HeroSlider>
      </div>
    );
  }
}

export default Portfolio;
