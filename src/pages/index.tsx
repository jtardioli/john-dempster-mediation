import Footer from "@/components/Footer";
import PageHead from "@/components/Head";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaGavel,
  FaGlobeAmericas,
  FaHouseDamage,
  FaMapMarkerAlt,
  FaUserInjured,
  FaWheelchair,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiFamilyHouse, GiMoneyStack, GiScreaming } from "react-icons/gi";
import {
  MdAutoGraph,
  MdConstruction,
  MdMoneyOffCsred,
  MdRealEstateAgent,
} from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageHead
        title="Home - John Dempster Mediation"
        description="John Dempster is a mediator in Ottawa, Ontario. He is a lawyer with nearly three decades of experience in litigation. He has represented clients at all levels of court in Ontario. He is a strong believer in mediation and achieving early resolution of claims."
      />
      <main className={`${inter.className} bg-slate-50 `}>
        <NavBar />
        <div className="w-full overflow-x-hidden h-[86vh] relative">
          <div className="absolute z-10 top-[35%]  text-white flex flex-col items-center w-full [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)] uppercase">
            <p className="text-7xl  text-center tracking-wide font-semibold">
              John Dempster
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex flex-col gap-2 items-end">
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              </div>

              <p className="text-5xl text-primary tracking-widest font-bold">
                Mediation
              </p>
              <div className="flex flex-col gap-2 items-start">
                <div className="w-44 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="min-w-full ">
              <img
                src={`images/02.jpg`}
                alt={`Image`}
                className=" object-cover w-full h-full filter  brightness-[50%]"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.3]" />
        </div>
        <section className="flex items-center w-full  justify-center  py-16 bg-slate-50">
          <div className="flex items-center justify-between  w-full max-w-[1000px]">
            <div className="flex flex-col gap-10 max-w-[500px]">
              <p className="text-4xl font-semibold">
                Mediation: A Path to Early and Satisfactory Resolution
              </p>

              <p className=" text-slate-800 italic text-lg">
                &quot;Litigation is expensive, time-consuming, and stressful,
                with outcomes that are difficult to predict and the potential
                for lengthy proceedings that carry a great deal of risk. As your
                mediator, I serve as a neutral facilitator of constructive
                settlement negotiations, helping you discuss and assess the
                costs and risks of your case and explore agreeable resolutions
                early on. My goal is to achieve a satisfactory resolution that
                avoids the costs and risks of ongoing litigation, allowing you
                to move forward.&quot;
              </p>
              <p className=" mt-2 text-[2.6rem] text-right font-tangerine font-bold">
                ~ John Dempster
              </p>
            </div>

            <div className="shadow-[#949494] shadow-lg overflow-hidden rounded-md">
              <img
                src={`images/headshot.jpg`}
                alt={`John Dempster`}
                className="object-cover h-[440px] w-[440px]  "
                style={{
                  objectPosition: "-10px 20px",
                  transform: "scale(1.3)",
                }}
              />
            </div>
          </div>
        </section>
        <section
          className="pt-16 flex items-center justify-center text-slate-100  bg-cover bg-center bg-no-repeat bg-fixed filter backdrop-filter backdrop-blur-lg relative pb-48 "
          style={{
            backgroundImage: `url('images/05.jpg')`,
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 93%, 0 85%)",
          }}
        >
          {/* Apply the brown filter behind the content but not on top of the text */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.8]"></div>

          {/* Ensure content is positioned above the filter using relative positioning */}
          <div className="relative flex flex-col items-start justify-center gap-10 max-w-[1000px] w-full text-xl z-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] leading-relaxed">
            <p className="text-5xl font-semibold leading-relaxed tracking-wider">
              About Me
            </p>
            <p>
              I graduated from military college with a Bachelor&apos;s degree in
              Business Administration in 1985. Following this, I served as an
              officer in the Canadian Armed Forces until 1990. After completing
              my military service, I pursued legal studies and graduated from
              law school. In 1995, I was called to the Bar of Ontario which
              marked the beginning of my nearly three-decade-long career in
              litigation.
            </p>
            <p>
              Over my career as a litigation lawyer, I have represented clients
              at all levels of court in Ontario, including the Ontario Court of
              Appeal. Additionally, I was appointed as the Deputy Registrar in
              Bankruptcy in Ottawa, where I presided over various bankruptcy
              hearings.
            </p>
            <p>
              I have represented many different clients and have developed a
              wide range of experience in various litigation matters in various
              practice areas. Over the years, I have participated in many
              mediations in all of these practice areas. I am a strong believer
              in mediation and achieving early resolution of claims.
            </p>
          </div>
        </section>
        <section className="flex justify-start items-center flex-col bg-slate-50 mb-10 gap-10 bg-darkPrimary">
          <h2 className="text-5xl font-semibold  mb-6">Areas of Expertise</h2>

          <div
            className="flex flex-col items-center w-full h-full py-24"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-darkPrimary opacity-[0.6] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold">
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaUserInjured size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Personal Injury</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaWheelchair size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">
                  Long Term Disability Claims
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center w-full h-full py-24 "
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-extraDarkPrimary opacity-[0.7] -z-10"></div>

            {/* First */}
            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold">
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <GiMoneyStack size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Employment Law</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <MdRealEstateAgent size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Estate Litigation</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaGavel size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Professional Negligence</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <MdMoneyOffCsred size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Bankruptcy Law</p>
              </div>
            </div>
          </div>

          {/* Second */}
          <div
            className="flex flex-col items-center w-full h-full py-16 "
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-extraDarkPrimary opacity-[0.6] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold">
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaMapMarkerAlt size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Land Development</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaGlobeAmericas size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Environmental Law</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <FaHouseDamage size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">
                  Property Damage & Insurance Claims
                </p>
              </div>

              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <GiFamilyHouse size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">
                  Condominium Law & Commercial Lease
                </p>
              </div>
            </div>
          </div>

          {/* Third */}

          <div
            className="flex flex-col items-center w-full h-full py-24 "
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              backgroundPosition: "30% 30%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-darkPrimary opacity-[0.4] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold ">
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <MdConstruction size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">Construction Law</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-[#949494] shadow-sm px-10 py-6 rounded-md gap-3">
                <div className="p-4 rounded-full bg-darkPrimary ">
                  <MdAutoGraph size={52} color="white" />
                </div>
                <p className="text-lg tracking-wide">
                  Commercial Litigation & Shareholder Disputes
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
