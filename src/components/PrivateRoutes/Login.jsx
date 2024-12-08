import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast, Toaster } from "sonner";
import { FaGoogle } from "react-icons/fa";

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
      Swal.fire({
        title: "Welcome!",
        text: "Log in successful!",
        icon: "success"
      });
      navigate(from, { replace: true });
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome!",
          text: "Log in successful!",
          icon: "success"
        });
        setLoading(true);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        setErrorMess(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="pb-20">
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
                className="rounded-lg p-2 border-2 my-5 cursor-pointer hover:bg-greenB hover:text-primary"
                type="submit"
                value="Login"
              />
          </form>
          <p className="text-center">or</p>
          <button onClick={handleLoginGoogle} className="rounded-lg p-2 border-2 my-5 mx-auto px-5 flex items-center gap-2 hover:bg-greenB hover:text-primary">
            <FaGoogle/>Sign In With Google
          </button>
          <p className="text-center">Don't have an account? Please <Link to="/signup" className="underline">Register Here</Link></p>
          <p className="my-2 text-center font-semibold text-redA">
            {errorMess}
          </p>
        </div>
      </div>
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default Login;
