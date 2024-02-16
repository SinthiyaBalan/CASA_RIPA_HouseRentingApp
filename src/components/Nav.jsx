import React from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { Link } from 'react-router-dom';
import ExploreSurroundings from "./ExploreSurroundings";
import Contact from "./Contact";

function Nav() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start font-bold">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 26 26"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              
                <Link to="/GalleryImages">GALLERY</Link>
                </li>
              
            <li>
              <Link to="/Contact" target="_top">CONTACT</Link>
            </li>
            <li>
            <Link to="/ExploreSurroundings">ACTIVITIES TO DO</Link>
            </li>
            <li>
             <Link to="/GoogleMap">ROUTE TO US</Link>
            </li>
            <li>
            <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </div>
        <img src={`https://ik.imagekit.io/Casaripadummy/casa-ripa-logo.jpg?updatedAt=1705922667078`} alt="Casa ripa logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-xl">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/GalleryImages">Gallery</Link>
          </li>
          <li>
            <Link to="/Contact" target="_top">Contact</Link>
          </li>
          <li>
          <Link to="/ExploreSurroundings">Activities to do</Link>
            </li>
            <li>
             <Link to="/GoogleMap">Route to us</Link>
          </li>
            <li>
          <Link to="/FAQ">FAQ</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
      <Link to="/Booking">
        <a style={{ backgroundColor: "#76a745"}}className="hover:bg-blue-700 font-bold  py-2 px-4 rounded ">Book Now</a>
        </Link>

        {/* <div className="h-8 w-8 m-2">
          <CIcon icon={icon.cilTranslate} size="sm" /> */}
          {/* <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
          <CIcon icon={icon.cilTranslate} size="xs"/>
          <ul className="p-2">
            <li><a>English</a></li>
            <li><a>Deutsch</a></li>
          </ul>
      </li>
    </ul> 
        </div>*/}
      </div>
    </div>
  );
}
export default Nav;






