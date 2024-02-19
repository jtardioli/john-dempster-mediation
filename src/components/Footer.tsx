import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#2d1c0e] h-[30vh]  flex items-center justify-center text-white w-full"
      // style={{
      //   clipPath: "polygon(0 10%, 15% 0, 86% 0, 100% 10%, 100% 100%, 0 100%)",
      // }}
    >
      <div className="flex max-w-[1150px] w-full justify-between">
        <div className="flex flex-1 flex-col items-center justify-center text-xl gap-2">
          <a className="hover:underline" href="tel:+16137299704">
            613-729-9704
          </a>
          <a className="hover:underline" href="mailto:jdempster@sympatico.ca">
            jdempster@sympatico.ca
          </a>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-lg gap-3">
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
        <div className="flex flex-1 items-center justify-center">
          <Link href="/book-now">
            <button className="text-[#51341c] bg-slate-100 py-4 px-6 rounded-md text-xl font-medium">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
