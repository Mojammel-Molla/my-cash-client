import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../../assets/cash-logo.png';
import { useEffect, useState } from 'react';
import UseAxios from '../../../hooks/UseAxios';
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const axios = UseAxios();
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 underline' : ''
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/all-users"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 underline' : ''
        }
      >
        <li>All Users</li>
      </NavLink>
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 underline' : ''
        }
      >
        <li>Transactions</li>
      </NavLink>
      <NavLink
        to="/commissions"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 underline' : ''
        }
      >
        <li>Commissions</li>
      </NavLink>
      <NavLink
        to="/all-requests"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 underline' : ''
        }
      >
        <li>All Requests</li>
      </NavLink>
      <NavLink to="login">
        <li>Log In</li>
      </NavLink>
    </>
  );

  const userEmail = 'kamal@gmail.com';
  useEffect(() => {
    axios.get(`/users?email=${userEmail}`).then(res => {
      // console.log(res.data);
    });
  }, [axios, userEmail]);

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
          <img className="h-10 w-16 " src={LogoImage} alt="" />
          <a className="text-[#0074d9]  md:text-2xl font-bold">My Cash</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1 font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className=" bg-blue-500 btn mr-5 hover:bg-blue-500">
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-white font-medium rounded-3xl p-1 min-w-20"
          >
            ${isShow ? '100000' : 'Balance'}
          </button>
        </div>
        <Link to="/request-money">
          <button className="bg-blue-500 btn font-semibold text-white hover:bg-blue-500">
            Request Money
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
