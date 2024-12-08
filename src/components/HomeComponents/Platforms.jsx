import Marquee from "react-fast-marquee";
const Platforms = () => {
  const imgs = [
    "https://i.ibb.co.com/vdn64GZ/windows.png",
    "https://i.ibb.co.com/rFxRPv8/playstation.png",
    "https://i.ibb.co.com/V2xJS23/xbox.png",
    "https://i.ibb.co.com/3dy0pg4/nintendo.png",
    "https://i.ibb.co.com/h1qM1Mt/steamdeck.png",
  ];
  const settings = {
    play: true,
    pauseOnHover: true,
    direction: "left",
    speed: 100,
    gradient: true,
    gradientWidth: 50,
  };
  return (
    <div>
      <Marquee {...settings}>
        <div className="flex items-center gap-16 md:gap-32">
          {imgs.map((data, index) => (
            <img key={index}
            className="max-h-32 max-w-32 object-fill"
            src={data}
            alt=""
          />
          ))}
          <div className="w-1"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Platforms;
