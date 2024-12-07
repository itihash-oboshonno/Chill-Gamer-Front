import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { SiAnytype } from "react-icons/si";

const GameWatchlistCard = ({ prottek }) => {
  const { title, image, rating, genre } = prottek;

  return (
    <div className="flex items-center justify-between bg-greenB rounded-lg">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="object-cover h-32 w-32 rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">{title}</p>
          <p className="flex items-center gap-2">
            <FaStar />
            {rating}
          </p>
          <p className="flex items-center gap-2">
            <SiAnytype />
            {genre}
          </p>
        </div>
      </div>
      <div className="px-5">
        <button className="text-3xl"><MdDeleteForever/></button>
      </div>
    </div>
  );
};

export default GameWatchlistCard;
