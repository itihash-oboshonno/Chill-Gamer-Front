import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co.com/cwFXfzc/banner-chill-gamer1.png",
  "https://i.ibb.co.com/WHZzFSj/banner-chill-gamer2.png",
  "https://i.ibb.co.com/Nnmkk1S/banner-chill-gamer3.png",
];

const Cerousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img className="rounded-lg md:rounded-3xl" src={img} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cerousal;