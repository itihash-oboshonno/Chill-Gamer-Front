import { useLoaderData } from "react-router-dom";
import Cerousal from "./HomeComponents/Cerousal";
import BestRatedGames from "./HomeComponents/BestRatedGames";
import Platforms from "./HomeComponents/Platforms";
import Process from "./HomeComponents/Process";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const loadedTop = useLoaderData();

  return (
    <div>
      <div className="bg-primary">
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
