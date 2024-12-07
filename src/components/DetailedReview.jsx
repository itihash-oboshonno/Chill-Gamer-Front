import { useContext } from "react";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { SiAnytype } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DetailedReview = () => {
    const {currentUser} = useContext(AuthContext);
    const loadedReview = useLoaderData();

    const handleWishlist = () => {
        const {title, image, review, rating, year, genre, email, userName} = loadedReview;
        const wishObject = {title, image, review, rating, year, genre, email, userName, wishListsUser: currentUser.email};
        // Open success modal

        // Send to server
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(wishObject)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
    }

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="bg-greenB rounded-2xl flex flex-col md:flex-row items-center justify-center gap-5">
                <div>
                    <img className="h-56" src={loadedReview.image} alt="" />
                </div>
                <div className="flex flex-col gap-5 p-5">
                    <p className="font-bold text-2xl">{loadedReview.title}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><FaCalendarAlt/>Release: {loadedReview.year}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><SiAnytype/>Genre: {loadedReview.genre}</p>
                    <p className="flex items-center gap-2 font-medium text-lg"><FaStar/>Rating: {loadedReview.rating}/10</p>
                </div>
            </div>
            <div className="flex justify-center items-center pt-5">
                <button onClick={handleWishlist} className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC cursor-pointer">Add to Wishlist</button>
            </div>
            <div className="px-5 py-10">
                <p className="font-bold text-2xl text-center">Detailed Review</p>
                <p className="mt-5">{loadedReview.review}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="flex items-center">
                    <p className="font-bold bg-gray-100 px-4 py-2 rounded-l-lg">Reviewer Name</p>
                    <p className="text-primary font-bold bg-greenB px-4 py-2 rounded-r-lg">{loadedReview.userName}</p>
                </div>
                <div className="flex items-center">
                    <p className="font-bold bg-gray-100 px-4 py-2 rounded-l-lg">Reviewer Email</p>
                    <p className="text-primary font-bold bg-greenB px-4 py-2 rounded-r-lg">{loadedReview.email}</p>
                </div>
            </div>
            <div className="py-10 flex justify-center items-center">
                <img className="max-h-[500px]" src={loadedReview.image} alt="" />
            </div>
        </div>
    );
};

export default DetailedReview;