import { useCallback, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { toast, Toaster } from "sonner";

const AllReviews = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [thisLoading, setThisLoading] = useState(true);

  const handleSort = (str) => {
    setSortBy(str);
  };

  const handleFilter = (str) => {
    setFilterBy(str);
  };

  // useEffect(() => {
  //   fetch(`https://chill-gamer-back.vercel.app/reviewsforall?filterBy=${filterBy}&sortBy=${sortBy}`)
  //   .then(res => res.json())
  //   .then(data => setDataToShow(data))
  // }, [])

  const dataFetch = useCallback(async () => {
    setThisLoading(true);
    try {
      const response = await fetch(
        `https://chill-gamer-back.vercel.app/reviewsforall?filterBy=${filterBy}&sortBy=${sortBy}`
      );
      const result = await response.json();
      setDataToShow(result);
    } catch (err) {
      toast(err.message);
    } finally {
      setThisLoading(false);
    }
  }, [filterBy, sortBy]);

  useEffect(() => {
    dataFetch();
  }, [dataFetch]);

  if (thisLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-xl md:text-4xl font-bold text-center text-primary">
        All Reviews
      </h2>
      <div className="py-5 flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC flex items-center justify-center gap-1"
          >
            {sortBy ? `Sort By: ${sortBy}` : "Sort By"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] px-6 py-2 w-52 shadow-lg"
          >
            <li onClick={() => handleSort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("year")}>
              <a>Year</a>
            </li>
            <li onClick={() => handleSort("")}>
              <a>Default</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC flex items-center justify-center gap-1"
          >
            {filterBy ? `Filter By: ${filterBy}` : "Filter By"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] px-6 py-2 w-52 shadow-lg"
          >
            <li onClick={() => handleFilter("Action")}>
              <a>Action</a>
            </li>
            <li onClick={() => handleFilter("Adventure")}>
              <a>Adventure</a>
            </li>
            <li onClick={() => handleFilter("Arcade")}>
              <a>Arcade</a>
            </li>
            <li onClick={() => handleFilter("Battle Royale")}>
              <a>Battle Royale</a>
            </li>
            <li onClick={() => handleFilter("Casual")}>
              <a>Casual</a>
            </li>
            <li onClick={() => handleFilter("Fighting")}>
              <a>Fighting</a>
            </li>
            <li onClick={() => handleFilter("Puzzle")}>
              <a>Puzzle</a>
            </li>
            <li onClick={() => handleFilter("Racing")}>
              <a>Racing</a>
            </li>
            <li onClick={() => handleFilter("RPG")}>
              <a>RPG</a>
            </li>
            <li onClick={() => handleFilter("Sandbox")}>
              <a>Sandbox</a>
            </li>
            <li onClick={() => handleFilter("Sports")}>
              <a>Sports</a>
            </li>
            <li onClick={() => handleFilter("Stealth")}>
              <a>Stealth</a>
            </li>
            <li onClick={() => handleFilter("Strategy")}>
              <a>Strategy</a>
            </li>
            <li onClick={() => handleFilter("")}>
              <a>Default</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {dataToShow.map((singleReview) => (
          <div key={singleReview._id}>
            <div className="grid gap-3 rounded-2xl bg-greenB p-5 text-primary">
              <div>
                <img
                  className="object-cover w-full h-52 rounded-lg"
                  src={singleReview.image}
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold text-xl my-1">
                  {singleReview.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1 my-1">
                    Rating: <span>{singleReview.rating}/10</span>{" "}
                    <span className="text-yellow-400">
                      <FaStar />
                    </span>
                  </p>
                  <p className="flex items-center gap-1 my-1">
                    <span>
                      <FaCalendarAlt />
                    </span>
                    {singleReview.year}
                  </p>
                </div>
              </div>
              <Link
                to={`/review/${singleReview._id}`}
                className="flex justify-center"
              >
                <button className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC w-full">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default AllReviews;
