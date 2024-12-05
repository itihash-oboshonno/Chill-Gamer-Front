import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {userLogin, loginViaGoogle, setLoading} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [errorMess, setErrorMess] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    loginViaGoogle()
    .then((result) => {
      // toast.success(`${result.user.displayName} logged in successfully!`);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      // toast.error(error.message);
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        // toast.success(`${result.user.displayName} logged in successfully!`);
        setLoading(true);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        setErrorMess(error.message);
        // toast.error(error.message);
      });
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-bold text-4xl text-center my-10">Login</h2>
        <div className="border-2 rounded-2xl py-5 grid justify-center">
          <form className="grid justify-center" onSubmit={handleLogin}>
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
            <input
                className="rounded-lg p-2 border-2 my-5 cursor-pointer"
                type="submit"
                value="Login"
              />
          </form>
          <p className="text-center">or</p>
          <button onClick={handleLoginGoogle} className="rounded-lg p-2 border-2 my-5 mx-auto px-5">
            Sign In With Google
          </button>
          <p className="text-center">Don't have an account? Please <Link to="/signup" className="underline">Register Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
