import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../Loading";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { toast, Toaster } from "sonner";

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
        const result = await response.json();
        setFetchedData(result.length ? result : null);
      } catch (err) {
        toast.log(err.message);
      } finally {
        setThisLoading(false);
      }
    };

    dataFetch();
  }, [myMail]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${_id}`, {
          method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Game removed from your watchlist.",
              icon: "success"
            });
            setFetchedData(fetchedData.filter(x => x._id !== _id))
          }
        })
      }
    });
  }

  if (thisLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="font-bold text-4xl text-center">
          {currentUser.displayName}'s Reviews
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
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchedData.map((ekta, index) => (
                      <tr className="hover" key={ekta._id}>
                        <th>{index+1}</th>
                        <td className="font-bold">{ekta.title}</td>
                        <td>
                          {ekta.review.length > 50
                            ? `${ekta.review.slice(0, 50)}...`
                            : ekta.review}
                        </td>
                        <td>{ekta.rating}</td>
                        <td>
                          <div className="flex flex-col md:flex-row gap-5">
                            <Link to={`/updatereview/${ekta._id}`}><button data-tooltip-id="my-tooltip" data-tooltip-content="Edit" className="text-lg">
                              <FaEdit></FaEdit>
                            </button></Link>
                            <button onClick={()=> handleDelete(ekta._id)} data-tooltip-id="my-tooltip" data-tooltip-content="Delete" className="text-2xl">
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
              You haven't uploaded any game reviews yet.
            </p>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default MyReviews;
