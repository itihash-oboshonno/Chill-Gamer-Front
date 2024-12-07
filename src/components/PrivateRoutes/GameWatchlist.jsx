import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../Loading";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { SiAnytype } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";

const GameWatchlist = () => {
  const { currentUser } = useContext(AuthContext);
  const wishMail = currentUser.email;
  const [thisLoading, setThisLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setThisLoading(true);
        const response = await fetch(
          `http://localhost:5000/mywatchlist?searchParams=${wishMail}`
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
  }, [wishMail]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mywatchlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Game removed from your watchlist.",
                icon: "success",
              });
              setFetchedData(fetchedData.filter(y => y._id !== _id))
            }
          });
      }
    });
  };

  if (thisLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="font-bold text-4xl text-center">
          {currentUser.displayName}'s Watchlist
        </h2>
        <div>
          {fetchedData ? (
            <div className="flex flex-col gap-5 py-10">
              {fetchedData.map((prottek) => (
                <div key={prottek._id} className="flex items-center justify-between bg-greenB rounded-lg">
                  <div className="flex items-center gap-5">
                    <div>
                      <img
                        className="object-cover h-32 w-32 rounded-lg"
                        src={prottek.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-bold">{prottek.title}</p>
                      <p className="flex items-center gap-2">
                        <FaStar />
                        {prottek.rating}
                      </p>
                      <p className="flex items-center gap-2">
                        <SiAnytype />
                        {prottek.genre}
                      </p>
                    </div>
                  </div>
                  <div className="px-5">
                    <button onClick={() => handleDelete(prottek._id)} className="text-3xl">
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg md:text-2xl font-medium py-10">
              You haven't added any games to your watchlist yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameWatchlist;
