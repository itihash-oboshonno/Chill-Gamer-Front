import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../Loading";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { toast, Toaster } from "sonner";

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
        const result = await response.json();
        setFetchedData(result.length? result : null);
      } catch (err) {
        toast.error(err.message);
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
              setFetchedData(fetchedData.filter((y) => y._id !== _id));
            }
          });
      }
    });
  };

  if (thisLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="font-bold text-xl md:text-4xl text-center">
          {currentUser.displayName}'s Watchlist
        </h2>
        <div>
          {fetchedData ? (
            <div className="flex flex-col gap-5 py-10">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Year</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchedData.map((prottek, index) => (
                      <tr className="hover" key={prottek._id}>
                        <th>{index + 1}</th>
                        <td className="font-bold">{prottek.title}</td>
                        <td>
                          {prottek.review.length > 50
                            ? `${prottek.review.slice(0, 50)}...`
                            : prottek.review}
                        </td>
                        <td>{prottek.year}</td>
                        <td>{prottek.rating}</td>
                        <td>
                          <div>
                            <button
                              onClick={() => handleDelete(prottek._id)}
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Delete"
                              className="text-2xl"
                            >
                              <MdDeleteForever />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-center text-lg md:text-2xl font-medium py-10">
              You haven't added any games to your watchlist yet.
            </p>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default GameWatchlist;
