import React from "react";
import "../slick-slider/style.css";
import Slider from "react-slick";
import slider1 from "../../../assets/images/slider1.jpeg";
import slider2 from "../../../assets/images/slider2.jpeg";
import slider3 from "../../../assets/images/slider3.jpeg";
import slider4 from "../../../assets/images/slider4.jpeg";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={slider1} alt="slider1" className="w-100" />
          </div>
          <div className="item">
            <img src={slider2} alt="slider2" className="w-100" />
          </div>
          <div className="item">
            <img src={slider3} alt="slider3" className="w-100" />
          </div>
          <div className="item">
            <img src={slider4} alt="slider4" className="w-100" />
          </div>
        </Slider>

        <div className="newsLetterBanner">
          <SendOutlinedIcon />
          <input type="text" placeholder="Your email address" />
          <Button className="bg-g">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
