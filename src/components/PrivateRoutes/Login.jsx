import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-bold text-4xl text-center my-10">Login</h2>
        <div className="border-2 rounded-2xl py-5 grid justify-center">
          <form className="grid justify-center">
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
          <button className="rounded-lg p-2 border-2 my-5 mx-auto px-5">
            Sign In With Google
          </button>
          <p className="text-center">Don't have an account? Please <Link to="/signup" className="underline">Register Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
