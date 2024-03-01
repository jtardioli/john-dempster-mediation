import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    const triggerHeight = 520; // Change this value to the desired scroll position
    if (offset > triggerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Adding and removing the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-32 w-full flex justify-between items-center px-20 drop-shadow-md fixed z-20 top-0 transition-colors duration-200 ease-in-out ${
        isScrolled
          ? "bg-white text-black"
          : "bg-transparent text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]"
      } `}
    >
      <img
        src={
          isScrolled
            ? "/images/John-Dempster-Dark.svg"
            : "/images/John-Dempster.svg"
        }
        className=" size-52 mt-6"
      />
      <div className="flex items-center gap-12 text-[1.25rem] font-medium tracking-wider">
        <Link
          className={isScrolled ? "hover:underline" : "hover:text-primary"}
          href="/"
        >
          Home
        </Link>
        <Link
          className={isScrolled ? "hover:underline" : "hover:text-primary"}
          href="/delivery-of-materials"
        >
          Delivery of Materials
        </Link>
        <Link
          className={isScrolled ? "hover:underline" : "hover:text-primary"}
          href="/rates-and-cancellation"
        >
          Rates
        </Link>
        <Link
          className={isScrolled ? "hover:underline" : "hover:text-primary"}
          href="/rates"
        >
          Rates2
        </Link>
        <Link
          className={isScrolled ? "hover:underline" : "hover:text-primary"}
          href="/contact"
        >
          Contact
        </Link>
        <Link href="/book-now">
          <button
            className={`py-4 px-6 rounded-md font-semibold tracking-wider  ${
              isScrolled
                ? "bg-darkPrimary text-white hover:brightness-125"
                : "bg-white text-black hover:brightness-90"
            } `}
          >
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export { NavBar };
