import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 grid grid-cols-3 justify-between sticky top-0 z-50">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/dashboard'>Dashboard</Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TechWiz</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu mx-auto menu-horizontal px-1 gap-8">
          <Link to='/'>Home</Link>
          <Link to='/statistics'>Statistics</Link>
          <Link to='/dashboard'>Dashboard</Link>

        </ul>
      </div>
      <div tabIndex={0} role="button" className="navbar-end  ">
        <div className="indicator ">
          <button className="rounded-full btn-ghost h-10 p-2 border-2 border-gray-300 "><i className="fa-solid fa-cart-shopping fa-lg "></i></button>
          <span className=" indicator-item">8</span>
        </div>
        <div className="ml-4 indicator">
          <button className=" btn-ghost rounded-full p-1 w-10 h-10 border-2 border-gray-300"><i className="fa-regular fa-heart fa-lg "></i></button>
          <span className=" indicator-item">8</span>
        </div>
      </div>

    </div>
  );
};

export default Navbar;