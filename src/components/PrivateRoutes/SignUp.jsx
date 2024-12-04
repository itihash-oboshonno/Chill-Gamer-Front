import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUserWithPass, setCurrentUser, setLoading, updateUserData } =
    useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const checkSix = /^(?=.{6,})/;
  const checkUpper = /^(?=.*[A-Z])/;
  const checkLower = /^(?=.*[a-z])/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const picture = form.photo.value;

    if (!checkLower.test(password)) {
      setErrMessage("Password must have at least 1 lowercase letter.");
    //   toast.error("Password must have at least 1 lowercase letter.");
      return;
    }

    if (!checkUpper.test(password)) {
      setErrMessage("Password must have at least 1 uppercase letter.");
    //   toast.error("Password must have at least 1 uppercase letter.");
      return;
    }

    if (!checkSix.test(password)) {
      setErrMessage("Password must be at least 6 characters long.");
    //   toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUserWithPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        updateUserData({
          displayName: name,
          photoURL: picture,
        })
          .then(() => {
            setLoading(true);
            setCurrentUser((user) => ({
              ...user,
              displayName: name,
              photoURL: picture,
            }));
            navigate("/");
            setLoading(false);
          })
          .catch((error) => {
            setErrMessage(error.message);
            // toast.error(error.message);
          });
      })
      .catch((error) => {
        setErrMessage(error.message);
        // toast.error(error.message);
      });
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-bold text-4xl text-center my-10">Sign Up</h2>
        <div className="border-2 rounded-2xl py-5">
          <form onSubmit={handleSignUp} className="grid justify-center">
            <div>
              <p className="my-2">Name</p>
              <input
                className="rounded-lg p-2 border-2"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <p className="my-2">Email</p>
              <input
                className="rounded-lg p-2 border-2"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <p className="my-2">Password</p>
              <input
                className="rounded-lg p-2 border-2"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <p className="my-2">Photo</p>
              <input
                className="rounded-lg p-2 border-2"
                type="url"
                name="photo"
                placeholder="Photo-URL"
                required
              />
            </div>
            <input
              className="rounded-lg p-2 border-2 my-5 cursor-pointer"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-center">
            Already have an account? Please{" "}
            <Link to="/login" className="underline">
              Login Here
            </Link>
          </p>
          <p className="text-center font-semibold text-redA">
            {errMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
