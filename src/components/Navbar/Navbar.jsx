import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header className="p-4 bg-[#F8F9FF] text-black">
      <div className="container flex justify-between max-w-5xl mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-xl md:text-2xl font-semibold md:font-bold"
        >
          Career Hub
        </a>
        <ul className="items-stretch  space-x-3 flex">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-violet-400 flex items-center px-4 text-sm md:text-lg font-medium dark:border- border-violet-400'
                  : 'flex items-center px-4 text-sm md:text-lg font-medium dark:border- border-violet-400'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/appliedjobs"
              className={({ isActive }) =>
                isActive
                  ? 'text-violet-400 flex items-center px-4 text-sm md:text-lg font-medium dark:border- border-violet-400'
                  : 'flex items-center px-4 text-sm md:text-lg font-medium dark:border- border-violet-400'
              }
            >
              Applied Jobs
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
