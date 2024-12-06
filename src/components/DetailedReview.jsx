import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { SiAnytype } from "react-icons/si";
import { useLoaderData } from "react-router-dom";

const DetailedReview = () => {

    const loadedUser = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="bg-greenB rounded-2xl flex items-center justify-center gap-5">
                <div>
                    <img className="h-56" src={loadedUser.image} alt="" />
                </div>
                <div className="flex flex-col gap-5 p-5">
                    <p className="font-bold text-2xl">{loadedUser.title}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><FaCalendarAlt/>Release: {loadedUser.year}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><SiAnytype/>Genre: {loadedUser.genre}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><FaStar/>Rating: {loadedUser.rating}/10</p>
                </div>
            </div>
            <div className="px-5 py-10">
                <p className="font-bold text-2xl text-center">Detailed Review</p>
                <p className="mt-5">{loadedUser.review}</p>
            </div>
            <div className="flex justify-center items-center">
                <img className="h-[500px]" src={loadedUser.image} alt="" />
            </div>
        </div>
    );
};

export default DetailedReview;