import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="p-4 text-gray-800 bg-[#7E90FE0D]">
      <div className="container flex items-center justify-between mx-auto max-w-5xl">
        <h2 className="text-xl md:text-2xl font-semibold">CareerHub</h2>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex"></li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Statistics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Blog
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to='/appliedjobs'
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Applied Jobs
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold rounded-lg bg-violet-400 text-white hover:bg-violet-500 active:bg-violet-400">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
