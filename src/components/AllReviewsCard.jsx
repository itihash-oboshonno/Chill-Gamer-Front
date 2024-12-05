import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const AllReviewsCard = ({singleReview}) => {

    const {title, image, rating, year} = singleReview;

    return (
        <div className="grid gap-3 rounded-2xl bg-greenB p-5">
            <div>
                <img className="object-cover w-full h-52 rounded-lg" src={image} alt="" />
            </div>
            <div>
                <p className="font-semibold text-xl my-1">{title}</p>
                <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1 my-1">Rating: <span>{rating}/10</span> <span><FaStar/></span></p>
                    <p className="flex items-center gap-1 my-1"><span><FaCalendarAlt/></span>{year}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC w-full">Details</button>
            </div>
        </div>
    );
};

export default AllReviewsCard;