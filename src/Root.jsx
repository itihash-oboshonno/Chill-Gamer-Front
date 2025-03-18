import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
