import { Link } from "react-router-dom";
import logoImg from "../assets/chill-gamer-logo-small.png";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-primary text-greenB">
      <footer className="max-w-7xl mx-auto p-5">
        <div className="grid justify-center gap-3 text-center">
          <Link to="/"><img className="max-h-32 max-w-32 mx-auto" src={logoImg} alt="" /></Link>
          <p className="font-bold md:text-2xl">Chill Gamer</p>
          <p>Latest and best updates on your favourite games!</p>
        </div>
        <hr className="my-5" />
        <div className="grid gap-5 md:flex items-center justify-between">
          <div>
          <ul className="text-start flex gap-3">
              <li>
                <Link className="flex items-center gap-2" to="https://www.facebook.com"><FaFacebook /></Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" to="https://www.instagram.com"><FaInstagram /></Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" to="https://www.twitter.com"><FaXTwitter /></Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" to="https://www.telegram.org"><FaTelegramPlane /></Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="grid md:flex gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allreviews">All Reviews</Link>
              </li>
              <li>
                <Link to="/addreview">Add Review</Link>
              </li>
              <li>
                <Link to="/myreviews">My Reviews</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="flex items-center gap-2" to="https://github.com/itihash-oboshonno" target="_blank" rel="noopener noreferrer"><IoLogoGithub />Developer's Github</Link>
          </div>
        </div>
        <hr className="my-5" />
        <div>
            <p className="text-center">&#169; 2024 Chill Gamer - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;