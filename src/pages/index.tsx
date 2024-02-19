import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaGlobeAmericas,
  FaHouseDamage,
  FaMapMarkerAlt,
  FaUserInjured,
  FaWheelchair,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMoneyStack, GiScreaming } from "react-icons/gi";
import {
  MdConstruction,
  MdMoneyOffCsred,
  MdRealEstateAgent,
} from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-slate-50 `}>
      <NavBar />
      <div className="w-full overflow-x-hidden h-[87vh] mt-32 relative">
        <div className="absolute z-10 top-[30%] left-[10%] text-white">
          <p className="text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_90%)]">
            Harmonizing Interests, Resolving Conflicts
          </p>
        </div>
        <div className="flex h-full">
          <div className="min-w-full ">
            <img
              src={`images/02.jpg`}
              alt={`Image`}
              className="object-cover w-full h-full filter  brightness-[80%]"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.3]" />
      </div>
      <section className="flex items-center w-full  justify-center  py-24 bg-slate-50">
        <div className="flex items-center justify-between  w-full max-w-[1000px]">
          <div className="flex flex-col gap-10 max-w-[500px]">
            <p className="text-4xl">
              Mediation: A Path to Early and Satisfactory Resolution
            </p>

            <p className=" text-slate-800 italic text-lg">
              &quot;Litigation is expensive, time-consuming, and stressful, with
              unpredictable outcomes and the potential for lengthy proceedings.
              As your mediator, I serve as a neutral facilitator to guide
              constructive settlement negotiations, helping you evaluate risks
              and explore agreeable resolutions early on. My goal is to achieve
              a satisfactory resolution that avoids the costs, risks, and stress
              of ongoing litigation, allowing you to move forward.&quot;
            </p>
            <p className=" mt-2 text-5xl text-right font-tangerine">
              ~ John Dempster
            </p>
          </div>

          <div className="shadow-[#949494] shadow-lg overflow-hidden rounded-md">
            <img
              src={`images/lawyer.jpg`}
              alt={`John Dempster`}
              className="object-cover h-[440px] w-[440px]  "
              style={{ objectPosition: "center -20px" }}
            />
          </div>
        </div>
      </section>
      <section
        className="py-24 flex items-center justify-center text-slate-100  bg-cover bg-center bg-no-repeat bg-fixed filter backdrop-filter backdrop-blur-lg relative pb-48 "
        style={{
          backgroundImage: `url('images/05.jpg')`,
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 93%, 0 85%)",
        }}
      >
        {/* Apply the brown filter behind the content but not on top of the text */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.8]"></div>

        {/* Ensure content is positioned above the filter using relative positioning */}
        <div className="relative flex flex-col items-start justify-center gap-10 max-w-[1000px] w-full text-xl z-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] leading-relaxed">
          <p className="text-5xl">About Me</p>
          <p>
            I graduated from military college with a Bachelor&apos;s degree in
            Business Administration in 1985. Following this, I served as an
            officer in the Canadian Armed Forces until 1990. After completing my
            military service, I pursued legal studies and graduated from law
            school. In 1995, I was admitted to the Bar of Ontario, which marked
            the beginning of my nearly three-decade-long career in litigation.
            My extensive legal experience has sharpened my expertise and
            solidified my commitment to maintaining the highest standards of the
            legal profession.
          </p>
          <p>
            Throughout my distinguished legal career, I have represented clients
            at all levels of court in Ontario, including the esteemed Ontario
            Court of Appeal. Additionally, I was appointed as the Deputy
            Registrar in Bankruptcy in Ottawa, where I presided over various
            bankruptcy hearings. This role further expanded my expertise and
            contribution to the field of law, particularly in bankruptcy
            proceedings.
          </p>
          <p>
            Over my career as a lawyer, I have represented many different
            clients and have developed a wide range of experience in various
            litigation matters.
          </p>
        </div>
      </section>
      <section className="flex justify-start items-center flex-col bg-slate-50 mb-24">
        <h2 className="text-4xl">Areas of Expertise</h2>
        <div className="h-[1px] w-full bg-slate-300 my-12"></div>
        <h3 className="mb-6 text-xl text-[#51341c]">Personal and Injury Law</h3>

        <div className="grid grid-cols-3 gap-4 text-[#51341c]">
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaUserInjured size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Personal Injury</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaWheelchair size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Long Term Disability Claims</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaUserDoctor size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Professional Negligence</p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-300 my-12"></div>
        <h3 className="mb-6 text-xl text-[#51341c]">
          Employment and Corporate Law
        </h3>

        <div className="grid grid-cols-2 gap-4 text-[#51341c]">
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <GiMoneyStack size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Employment Law</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaBuilding size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">
              Corporate/Commercial Litigation
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-slate-300 my-12"></div>
        <h3 className="mb-6 text-xl text-[#51341c]">
          Property and Real Estate Law
        </h3>
        <div className="grid grid-cols-2 gap-4 text-[#51341c]">
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaMapMarkerAlt size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Land Development</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <MdRealEstateAgent size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Estate Litigation</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <GiScreaming size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Landlord Tenant Disputes</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaHouseDamage size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">
              Property Damage and Insurance Claims
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-300 my-12"></div>

        <h3 className="mb-6 text-xl text-[#51341c]">
          Civil and Commercial Litigation
        </h3>
        <div className="grid grid-cols-3 gap-4 text-[#51341c] ">
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <FaGlobeAmericas size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Environmental Law</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <MdConstruction size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Construction Law</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
            <div className="p-4 rounded-full bg-[#51341c] ">
              <MdMoneyOffCsred size={52} color="white" />
            </div>
            <p className="text-lg tracking-wide">Bankruptcy Law</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
