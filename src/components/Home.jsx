import { useLoaderData } from "react-router-dom";
import Cerousal from "./HomeComponents/Cerousal";
import BestRatedGames from "./HomeComponents/BestRatedGames";
import Platforms from "./HomeComponents/Platforms";
import Process from "./HomeComponents/Process";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const Home = () => {
  const loadedTop = useLoaderData();

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeBodlao = () => {
    setTheme('light' ? 'dark' : 'light');
  }

  return (
    <div>
      <div className="bg-primary">
        <div className="flex justify-center text-greenB pt-5">
          <label onClick={themeBodlao} className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        <div className="max-w-7xl mx-auto px-5 py-10">
          <Cerousal></Cerousal>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <Fade>
          <p className="font-bold text-xl md:text-4xl text-center my-10">
            Top Rated Games of All Time
          </p>
        </Fade>
        <div className="grid gap-5">
          {loadedTop.map((proti) => (
            <BestRatedGames key={proti._id} proti={proti}></BestRatedGames>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-10">
        <Fade>
          <p className="font-bold text-xl md:text-4xl text-center my-10">
            3 Step Quick Guide
          </p>
        </Fade>
        <Process></Process>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-10">
        <Fade>
          <p className="font-bold text-xl md:text-4xl text-center my-10">
            Our Covered Platforms
          </p>
        </Fade>
        <Platforms></Platforms>
      </div>
    </div>
  );
};

export default Home;
