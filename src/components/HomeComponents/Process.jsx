import signup from "../../assets/sign-up.png";
import review from "../../assets/reviews.png";
import friends from "../../assets/friends.png"

const Process = () => {
  return (
    <div className="grid gap-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="font-semibold text-2xl">1. SignUp</p>
        <img className="max-h-32 max-w-32 object-fill" src={signup} alt="" />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="font-semibold text-2xl">2. Write a Review</p>
        <img className="max-h-32 max-w-32 object-fill" src={review} alt="" />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="font-semibold text-2xl">3. Share with Friends</p>
        <img className="max-h-32 max-w-32 object-fill" src={friends} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Process;
