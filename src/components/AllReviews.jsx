import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "./AllReviewsCard";

const AllReviews = () => {

    const allReviews = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    allReviews.map(singleReview => <AllReviewsCard key={singleReview._id} singleReview={singleReview}></AllReviewsCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;