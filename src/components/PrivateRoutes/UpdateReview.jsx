import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCaretSquareDown } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const loadedReview = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const { _id, title, image, review, rating, year, genre, email, userName } =
    loadedReview;
  const [category, setCategory] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setCategory(genre);
  }, []);

  const handleUpdateRev = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.cover.value;
    const review = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = category;
    const email = currentUser.email;
    const userName = currentUser.displayName;

    const updatedReview = {
      title,
      image,
      review,
      rating,
      year,
      genre,
      email,
      userName,
    };

    if (rating > 10 || rating < 1) {
      toast.warning("Rating range is 1-10!");
      return;
    }

    if (year < 1962 || year > currentYear) {
      toast.warning(`Publish year must be from 1962 to ${currentYear}!`);
      return;
    }

    if (!category) {
      toast.warning("Please Select Genre!");
      return;
    }

    // to server
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your review updated successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="min-h-screen px-5 py-10">
        <h2 className="text-4xl font-bold pb-10 text-primary text-center">
          Update {title} Review
        </h2>
        <div className="max-w-7xl mx-auto p-5 bg-greenB rounded-2xl">
          <form className="grid gap-5" onSubmit={handleUpdateRev}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <div className="w-full">
                <p className="mb-1 font-medium">Game Title</p>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Game Title"
                  className="rounded-lg p-2 border w-full"
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-1 font-medium">Game Cover</p>
                <input
                  type="url"
                  name="cover"
                  defaultValue={image}
                  placeholder="Photo-URL"
                  className="rounded-lg p-2 border w-full"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <p className="mb-1 font-medium">Description</p>
              <textarea
                type="text"
                name="description"
                defaultValue={review}
                placeholder="Write your review..."
                className="rounded-lg p-2 border w-full min-h-20"
                required
              />
            </div>
            <div className="grid md:grid-cols-3 items-center justify-center gap-5">
              <div className="w-full">
                <p className="mb-1 font-medium">Rating</p>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating (out of 10)"
                  className="rounded-lg p-2 border w-full"
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-1 font-medium">Publish Year</p>
                <input
                  type="number"
                  name="year"
                  defaultValue={year}
                  placeholder="Publish Year"
                  className="rounded-lg p-2 border w-full"
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-1 font-medium">Genre</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="genre"
                    defaultValue={category}
                    className="rounded-l-lg p-2 border w-full"
                    disabled
                  />
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="text-primary font-bold bg-greenC px-6 py-2.5 rounded-r-lg text-xl"
                    >
                      <FaCaretSquareDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li onClick={() => setCategory("Action")}>
                        <a>Action</a>
                      </li>
                      <li onClick={() => setCategory("Adventure")}>
                        <a>Adventure</a>
                      </li>
                      <li onClick={() => setCategory("Arcade")}>
                        <a>Arcade</a>
                      </li>
                      <li onClick={() => setCategory("Battle Royale")}>
                        <a>Battle Royale</a>
                      </li>
                      <li onClick={() => setCategory("Casual")}>
                        <a>Casual</a>
                      </li>
                      <li onClick={() => setCategory("Fighting")}>
                        <a>Fighting</a>
                      </li>
                      <li onClick={() => setCategory("Puzzle")}>
                        <a>Puzzle</a>
                      </li>
                      <li onClick={() => setCategory("Racing")}>
                        <a>Racing</a>
                      </li>
                      <li onClick={() => setCategory("RPG")}>
                        <a>RPG</a>
                      </li>
                      <li onClick={() => setCategory("Sandbox")}>
                        <a>Sandbox</a>
                      </li>
                      <li onClick={() => setCategory("Sports")}>
                        <a>Sports</a>
                      </li>
                      <li onClick={() => setCategory("Stealth")}>
                        <a>Stealth</a>
                      </li>
                      <li onClick={() => setCategory("Strategy")}>
                        <a>Strategy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <div className="w-full">
                <p className="mb-1 font-medium">User Email</p>
                <p className="rounded-lg p-2 border w-full">{email}</p>
              </div>
              <div className="w-full">
                <p className="mb-1 font-medium">User Name</p>
                <p className="rounded-lg p-2 border w-full">{userName}</p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <input
                type="submit"
                value="Update Review"
                className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
