import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-bold text-4xl text-center my-10">Sign Up</h2>
        <div className="border-2 rounded-2xl py-5">
          <form className="grid justify-center">
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
          <p className="text-center">Already have an account? Please <Link to="/login" className="underline">Login Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
