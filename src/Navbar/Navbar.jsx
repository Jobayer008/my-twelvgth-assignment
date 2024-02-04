import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then(
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You have been logged out!",
        showConfirmButton: false,
        timer: 1500,
      })
    );
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>
                <button>Home</button>
              </li>
            </NavLink>
            <li>
              <button>Community</button>
            </li>
            <li>
              <button>Blogs</button>
            </li>
            <li>
              <button>About Us</button>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>{user ? user.displayName : ""}</a>
            </li>
          </ul>
        </div>
        <img className="h-8 w-8" src="https://i.postimg.cc/ZqvHBZRh/travel-agent-destination-travel-world-package-tour-tourism-png-favpng-a8c-CKbs-DPHVy8-Ks-HU7-VM3v-C4h-remo.png" alt="" />
        <a className="btn btn-ghost text-xl">TrailTrango</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>
              <button>Home</button>
            </li>
          </NavLink>
          <li>
            <button>Community</button>
          </li>
          <li>
            <button>Blogs</button>
          </li>
          <li>
            <button>About Us</button>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button>Contact us</button>
          </li>

          {user ? (
            <li onClick={handleLogOut}>
              <button>logout</button>
            </li>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>
                <button>login</button>
              </li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <details className="dropdown">
          <summary className="m-1 btn">
            <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" />{" "}
            {user?.displayName}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <Link to={'dashboard'}>
              <li>
                <a>Dashboard</a>
              </li>
            </Link>
            <li>
              <a>Offer Announcements</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
