import { useLoaderData } from "react-router-dom";
import Cerousal from "./HomeComponents/Cerousal";
import BestRatedGames from "./HomeComponents/BestRatedGames";

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
        <p className="font-bold text-xl md:text-4xl text-center my-10">
          Top Games of All Time
        </p>
        <div className="grid gap-5">
          {loadedTop.map((proti) => (
            <BestRatedGames key={proti._id} proti={proti}></BestRatedGames>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
