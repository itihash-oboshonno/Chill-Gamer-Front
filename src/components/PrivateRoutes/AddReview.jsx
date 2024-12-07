import { useContext, useRef, useState } from "react";
import { FaCaretSquareDown } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, Toaster } from "sonner";

const AddReview = () => {
  const {currentUser} = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const currentYear = new Date().getFullYear();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
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

    const newReview = {title, image, review, rating, year, genre, email, userName};

    if(rating>10 || rating<1) {
      toast.warning("Rating range is 1-10!");
      return;
    }

    if(year<1962 || year>currentYear) {
      toast.warning(`Publish year must be from 1962 to ${currentYear}!`)
      return;
    }

    if(!category) {
      toast.warning("Please Select Genre!");
      return;
    }
    console.log(newReview);

    // to server
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        formRef.current.reset();
        toast.success("Your review added successfully!");
      }
    })

  }

  return (
    <div>
      <div className="bg-primary min-h-screen px-5 py-10">
        <div className="max-w-7xl mx-auto p-5 bg-greenB rounded-2xl">
          <form className="grid gap-5" onSubmit={handleSubmit} ref={formRef}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <input
                type="text"
                name="title"
                placeholder="Game Title"
                className="rounded-lg p-2 border w-full"
                required
              />
              <input
                type="url"
                name="cover"
                placeholder="Photo-URL"
                className="rounded-lg p-2 border w-full"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <textarea
                type="text"
                name="description"
                placeholder="Write your review..."
                className="rounded-lg p-2 border w-full min-h-20"
                required
              />
            </div>
            <div className="grid md:grid-cols-3 items-center justify-center gap-5">
              <input
                type="number"
                name="rating"
                placeholder="Rating (out of 10)"
                className="rounded-lg p-2 border w-full"
                required
              />
              <input
                type="number"
                name="year"
                placeholder="Publish Year"
                className="rounded-lg p-2 border w-full"
                required
              />
              <div className="flex items-center">
                <input type="text" name="genre" defaultValue={category} className="rounded-l-lg p-2 border w-full" disabled/>
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
                    <li onClick={() => setCategory("Action")}><a>Action</a></li>
                    <li onClick={() => setCategory("Adventure")}><a>Adventure</a></li>
                    <li onClick={() => setCategory("Arcade")}><a>Arcade</a></li>
                    <li onClick={() => setCategory("Battle Royale")}><a>Battle Royale</a></li>
                    <li onClick={() => setCategory("Casual")}><a>Casual</a></li>
                    <li onClick={() => setCategory("Fighting")}><a>Fighting</a></li>
                    <li onClick={() => setCategory("Puzzle")}><a>Puzzle</a></li>
                    <li onClick={() => setCategory("Racing")}><a>Racing</a></li>
                    <li onClick={() => setCategory("RPG")}><a>RPG</a></li>
                    <li onClick={() => setCategory("Sandbox")}><a>Sandbox</a></li>
                    <li onClick={() => setCategory("Sports")}><a>Sports</a></li>
                    <li onClick={() => setCategory("Stealth")}><a>Stealth</a></li>
                    <li onClick={() => setCategory("Strategy")}><a>Strategy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <p className="rounded-lg p-2 border w-full">{currentUser?.email}</p>
              <p className="rounded-lg p-2 border w-full">{currentUser?.displayName}</p>
            </div>
            <div className="flex items-center justify-end">
              <input
                type="submit"
                value="Submit Review"
                className="text-primary font-bold px-6 py-2 rounded-lg bg-greenC cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default AddReview;
