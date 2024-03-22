import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const DesktopNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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

  const showDarkNav = isScrolled || router.pathname === "/book-now";

  return (
    <nav
      className={`h-32 w-full flex justify-between items-center px-10 lg:px-20 drop-shadow-md fixed z-20 top-0 transition-colors duration-200 ease-in-out ${
        showDarkNav
          ? "bg-white text-black"
          : "bg-transparent text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]"
      } `}
    >
      <img
        src={
          showDarkNav
            ? "/images/John-Dempster-Dark.svg"
            : "/images/John-Dempster.svg"
        }
        className=" size-40 xl:size-52 mt-6"
      />
      <div className="flex items-center gap-12 text-base lg:text-lg xl:text-[1.25rem] font-medium tracking-wider">
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/"
        >
          Home
        </Link>

        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/rates-and-cancellation"
        >
          Rates
        </Link>
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/delivery-of-materials"
        >
          Delivery of Materials
        </Link>
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/contact"
        >
          Contact
        </Link>
        <Link href="/book-now">
          <button
            className={`py-4 px-6 rounded-md font-semibold tracking-wider  ${
              showDarkNav
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

const MobileNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    const triggerHeight = 280; // Change this value to the desired scroll position
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

  const showDarkNav = isScrolled || router.pathname === "/book-now" || isOpened;

  useEffect(() => {
    // Handler to call when route changes
    const handleRouteChange = () => {
      setIsOpened(false); // Set to false when route changes
    };

    // Add the route change event listener
    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove the event listener on cleanup
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <nav
        className={`h-28 w-full flex  items-center px-4 drop-shadow-md fixed z-20 top-0 transition-colors duration-200 ease-in-out ${
          showDarkNav
            ? "bg-white text-black"
            : "bg-transparent text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]"
        } `}
      >
        <div className="flex items-center justify-between w-full">
          <img
            src={
              showDarkNav
                ? "/images/John-Dempster-Dark.svg"
                : "/images/John-Dempster.svg"
            }
            className="size-40 mt-6"
          />

          <button
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            {isOpened ? (
              <MdClose className="h-[40px] w-[40px]" color="black" />
            ) : (
              <RxHamburgerMenu
                className="h-[40px] w-[40px]"
                color={showDarkNav ? "black" : "white"}
              />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed z-30 top-28 bg-white h-[90%] w-full flex flex-col items-center gap-12 text-xl font-medium tracking-wider py-8 transition-transform duration-500 ease-in-out ${
          isOpened ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/"
          onClick={() => setIsOpened(false)}
        >
          Home
        </Link>

        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/rates-and-cancellation"
        >
          Rates
        </Link>
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/delivery-of-materials"
        >
          Delivery of Materials
        </Link>
        <Link
          className={showDarkNav ? "hover:underline" : "hover:text-primary"}
          href="/contact"
        >
          Contact
        </Link>
        <Link href="/book-now">
          <button
            className={`py-4 px-6 rounded-md font-semibold tracking-wider bg-darkPrimary text-white hover:brightness-125`}
          >
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
};

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState<number>(undefined!);

  useEffect(() => {
    // Function to update the state with the new width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set width initially and whenever the window resizes
    window.addEventListener("resize", handleResize);
    handleResize(); // Call immediately to set initial value

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only once at mount

  // Define the breakpoint for switching to the mobile navbar
  const breakpoint = 1100; // Example breakpoint, adjust as needed

  return <>{windowWidth > breakpoint ? <DesktopNavBar /> : <MobileNavBar />}</>;
};

export default NavBar;

export { NavBar };
