import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/chill-gamer-logo-small.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaBars } from "react-icons/fa";
import { toast, Toaster } from "sonner";

const Navbar = () => {
  const { currentUser, userLogout } = useContext(AuthContext);

  const handleSignOut = () => {
    userLogout()
      .then(() => {
        toast.info("User Signed Out");
      })
      .catch((error) => {
        toast.error("ERROR", error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm"
              : "text-greenA hover:text-greenC text-sm"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allreviews"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm"
              : "text-greenA hover:text-greenC text-sm"
          }
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addreview"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm"
              : "text-greenA hover:text-greenC text-sm"
          }
        >
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myreviews"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm"
              : "text-greenA hover:text-greenC text-sm"
          }
        >
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold bg-greenB px-6 py-2 rounded-lg text-sm"
              : "text-greenA hover:text-greenC text-sm"
          }
        >
          Watchlist
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-5">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img className="max-w-14 max-h-14 mx-auto" src={logoImg} alt="" />
            <h3 className="font-bold md:text-2xl text-greenB">Chill Gamer</h3>
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center gap-8">{navItems}</ul>
        </div>
        <div className="">
          {currentUser ? (
            <>
              <div className="p-1 rounded-xl flex items-center">
                  <div className="tooltip tooltip-bottom" data-tip={currentUser.displayName}>
                    <img
                      className="rounded-l-lg w-9 h-9 object-cover"
                      src={currentUser.photoURL}
                      alt=""
                    />
                  </div>
                  <Link to="/">
                    <button
                      onClick={handleSignOut}
                      className="text-primary font-bold bg-greenB px-3 py-2 md:px-6 md:py-2 rounded-r-lg text-sm hover:bg-redC hover:text-redA"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="text-primary font-bold bg-greenB px-3 py-2 md:px-6 md:py-2 rounded-lg text-sm hover:bg-greenC">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-primary font-bold bg-greenB px-3 py-2 md:px-6 md:py-2 rounded-lg text-sm hover:bg-greenC">
                    Sign Up
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="flex lg:hidden ml-3">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="w-10 rounded-full">
                <FaBars className="text-greenB"></FaBars>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default Navbar;
