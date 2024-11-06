import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div
      className={`navbar grid grid-cols-3 items-center justify-between sticky top-0 z-50 px-4 ${isHomepage ? "bg-purple-600 text-white" : "bg-base-100 text-black"
        }`}
    >
      {/* Left Section - Logo and Mobile Menu Button */}
      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/statistics">Statistics</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold">TechWiz</a>
      </div>

      {/* Center Section - Links for Desktop View */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      {/* Right Section - Icons */}
      <div className="navbar-end flex items-center space-x-4">
        <div className="indicator">
          <button className="rounded-full btn-ghost h-10 w-10 border-2 border-gray-300 flex items-center justify-center">
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </button>
          <span className="indicator-item  ">8</span>
        </div>
        <div className="indicator">
          <button className="btn-ghost rounded-full h-10 w-10 border-2 border-gray-300 flex items-center justify-center">
            <i className="fa-regular fa-heart fa-lg"></i>
          </button>
          <span className="indicator-item ">8</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
