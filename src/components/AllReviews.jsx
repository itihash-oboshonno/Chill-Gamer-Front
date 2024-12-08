import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "./AllReviewsCard";

const AllReviews = () => {

    const allReviews = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <h2 className="text-4xl font-bold text-center text-primary">All Reviews</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
                {
                    allReviews.map(singleReview => <AllReviewsCard key={singleReview._id} singleReview={singleReview}></AllReviewsCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;