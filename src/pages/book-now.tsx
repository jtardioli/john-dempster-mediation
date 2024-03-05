import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { BallTriangle } from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });

const BookNow = () => {
  return (
    <main className={inter.className}>
      <NavBar />
      <section className="mt-32 flex flex-col  items-center justify-center bg-slate-100">
        <InlineWidget
          styles={{ width: "100%", height: "84vh" }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "2e1e11",
            textColor: "4d5055",
          }}
          url="https://calendly.com/johndempster"
        />
      </section>
    </main>
  );
};

export default BookNow;
