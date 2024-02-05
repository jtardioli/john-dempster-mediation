import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="h-32 w-full bg-white  flex justify-between items-center px-20 drop-shadow-md fixed z-20 top-0">
      <p className="text-5xl font-bold ">JDM</p>
      <div className="flex items-center gap-12 text-lg">
        <Link href="/">Home</Link>

        <Link href="/delivery-of-materials">Delivery of Materials</Link>
        <a href="#">Contact</a>
        <button className="bg-[#51341c] py-4 px-6 rounded-md text-white">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export { NavBar };
