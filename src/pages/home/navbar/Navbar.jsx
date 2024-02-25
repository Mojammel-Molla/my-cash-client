import { NavLink } from 'react-router-dom';
import LogoImage from '../../../assets/cash-logo.png';
const Navbar = () => {
  const navLinks = (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Sent Money</li>
      </NavLink>
      <NavLink>
        <li>Received Money</li>
      </NavLink>
      <NavLink>
        <li>Transactions</li>
      </NavLink>
      <NavLink>
        <li>Balance</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
          <img className="h-10 w-16" src={LogoImage} alt="" />
          <a className="text-[#0074d9]  text-2xl font-bold">My Cash</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1 font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Log In</a>
      </div>
    </div>
  );
};

export default Navbar;
