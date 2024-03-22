import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-white w-full">
      <div className="bg-extraDarkPrimary brightness-90 h-56  flex items-center justify-center  w-full">
        <div className="flex max-w-[1150px] w-full  justify-center  flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex flex-1 flex-col items-center justify-center text-base md:text-xl gap-2">
            <a className="hover:underline" href="tel:+16137299704">
              613-729-9704
            </a>
            <a className="hover:underline" href="mailto:jdempster@sympatico.ca">
              jdempster@sympatico.ca
            </a>
          </div>

          <div className="border-slate-300 border-b-[1px] h-[1px] mx-14 rounded-xl  md:hidden"></div>

          <div className="flex  flex-1 flex-col items-center justify-center text-sm md:text-lg gap-3">
            <div className="flex flex-col items-center justify-center">
              <p>2285 St. Laurent Blvd, Ottawa</p>
              <p>Ottawa, Ontario K1G 4Z7, Canada</p>
            </div>

            <a
              className="hover:underline uppercase text-sm"
              href="https://www.google.com/maps/dir//2285+St.+Laurent+Blvd,+Ottawa,+ON+K1G+4Z7,+Canada/@45.3855918,-75.6962942,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cce0f270a0cb6b9:0x3733909b97bb5f0d!2m2!1d-75.6138935!2d45.3855009?hl=en-US&entry=ttu"
              target="_blank"
            >
              Get Directions
            </a>
          </div>
          <div className="lg:flex flex-1 items-center justify-center hidden">
            <Link href="/book-now">
              <button className="text-darkPrimary font-semibold tracking-wider bg-slate-100 py-4 px-6 rounded-md text-xl hover:brightness-90">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-extraDarkPrimary brightness-50 flex flex-col items-center justify-center text-white w-full text-xs h-[5vh]">
        <p>
          Copyright {new Date().getFullYear()} |{" "}
          <a target="_blank" href="https://www.josht.art/">
            Website by JT
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
