import { Link } from "react-router-dom";

const Navbar = function () {
  return (
    <nav className="navbar">
      <Link className="navbar-title" to="/">
        Blog App
      </Link>
    </nav>
  );
};

export default Navbar;
