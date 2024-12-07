import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../Loading";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { currentUser } = useContext(AuthContext);
  const myMail = currentUser.email;
  const [thisLoading, setThisLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setThisLoading(true);
        const response = await fetch(
          `http://localhost:5000/myreviews?searchParams=${myMail}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setFetchedData(result.length ? result : null);
      } catch (err) {
        console.log(err.message);
      } finally {
        setThisLoading(false);
      }
    };

    dataFetch();
  }, [myMail]);

  if (thisLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="font-bold text-4xl text-center">
          {currentUser.displayName}'s Reviews
        </h2>
        <div>
          {fetchedData ? (
            <div className="flex flex-col gap-5 py-10">
              {fetchedData.map((ekta) => ( <MyReviewCard key={ekta._id} ekta={ekta}></MyReviewCard>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg md:text-2xl font-medium py-10">
              You haven't uploaded any game reviews yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
