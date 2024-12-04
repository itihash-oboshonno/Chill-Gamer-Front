import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slide-container">
      <Slider {...settings}>
        <div>
          <div className="hero bg-greenB rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm hover:bg-greenC">
                  See Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero bg-greenB rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={banner2} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm hover:bg-greenC">
                  See Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero bg-greenB rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={banner3} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm hover:bg-greenC">
                  See Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
