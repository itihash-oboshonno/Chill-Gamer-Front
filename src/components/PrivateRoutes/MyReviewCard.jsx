import { FaEdit, FaStar } from "react-icons/fa";
import { MdDeleteForever, MdDescription } from "react-icons/md";

const MyReviewCard = ({ ekta }) => {
  const { title, image, rating, review } = ekta;
  return (
    <div className="flex items-center justify-between bg-greenB rounded-lg">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="object-cover h-32 w-32 rounded-lg hidden md:flex"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <p className="text-xl font-bold">{title}</p>
          <p className="flex items-center gap-2">
            <FaStar />
            {rating}
          </p>
          <p className="flex items-center gap-2">
            <MdDescription className="text-xl" />
            {review.length > 100 ? `${review.slice(0, 100)}...` : review}
          </p>
        </div>
      </div>
      <div className="px-5 flex flex-col md:flex-row gap-5">
        <button className="text-lg">
          <FaEdit></FaEdit>
        </button>
        <button className="text-2xl">
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
