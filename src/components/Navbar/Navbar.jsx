import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div
      className={`navbar grid grid-cols-3 items-center mx-auto justify-between sticky top-0 z-50 px-4 ${isHomepage ? "bg-[#9538E2] rounded-t-3xl max-w-[1320px] text-white" : "bg-base-100 max-w-[1440px] text-black"
        }`}
    >
      <div className="flex items-center">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 text-gray-600"
          >
            <li><Link to="/" className={`${location.pathname === "/" ? "bg-purple-200" : ""}`}>Home</Link></li>
            <li><Link to="/statistics" className={`${location.pathname === "/statistics" ? "bg-purple-200" : ""}`}>Statistics</Link></li>
            <li><Link to="/dashboard" className={`${location.pathname === "/dashboard" ? "bg-purple-200" : ""}`}>Dashboard</Link></li>
            <li><Link to="/review" className={`${location.pathname === "/review" ? "bg-purple-200" : ""}`}>Review</Link></li>
          </ul>
        </div>

        <p className="pl-12 text-xl font-bold">TechWiz</p>
      </div>

      <div className="navbar-center hidden lg:flex mx-auto ">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><Link to="/" className={`${location.pathname === "/" ? "bg-gray-300 text-gray-700 border" : ""}`}>Home</Link></li>
          <li><Link to="/statistics" className={`${location.pathname === "/statistics" ? "bg-gray-300" : ""}`}>Statistics</Link></li>
          <li><Link to="/dashboard" className={`${location.pathname === "/dashboard" ? "bg-gray-300" : ""}`}>Dashboard</Link></li>
          <li><Link to="/review" className={`${location.pathname === "/review" ? "bg-gray-300" : ""}`}>Review</Link></li>
        </ul>
      </div>

      <div className="hidden md:block lg:ml-72 lg:space-x-4">
        <div className="indicator">
          <button className="rounded-full btn-ghost h-8 w-8 border-2 border-gray-300 flex items-center justify-center">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <div className="indicator">
          <button className="btn-ghost rounded-full h-8 w-8 border-2 border-gray-300 flex items-center justify-center">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
