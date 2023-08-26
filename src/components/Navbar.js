import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-screen">
      <nav className="flex justify-around items-center w-full h-16 bg-violet-800 mx-auto">
        <NavLink>
          <div className="ml-5">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw0plY95dc2QowfYT3dZyF4s&ust=1680541358508000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDHr8fWi_4CFQAAAAAdAAAAABAE" className="h-14"/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-1xl text-white mr-5 space-x-10">
          <NavLink to="/journel">
            <p>Journals</p>
          </NavLink>

          <NavLink to="/authors">
            <p>Authors</p>
          </NavLink>

          <NavLink to="/citations">
            <p>Citations</p>
          </NavLink>

          <NavLink to="/aboutus">
            <p>About Us</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
