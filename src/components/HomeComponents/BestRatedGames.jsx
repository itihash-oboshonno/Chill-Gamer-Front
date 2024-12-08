import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { SiAnytype } from "react-icons/si";
import { Link } from "react-router-dom";
const BestRatedGames = ({ proti }) => {
  const { _id, title, image, rating, genre } = proti;
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
      <Link to={`/review/${_id}`} className="px-5">
        <button className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC w-full">
          Details
        </button>
      </Link>
    </div>
  );
};
export default BestRatedGames;
