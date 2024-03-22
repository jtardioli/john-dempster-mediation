import ExpertiseCard from "@/components/ExpertiseCard";
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
  FaWheelchair
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiFamilyHouse, GiMoneyStack, GiScreaming } from "react-icons/gi";
import {
  MdAutoGraph,
  MdConstruction,
  MdMoneyOffCsred,
  MdRealEstateAgent
} from "react-icons/md";

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
        <div className="w-full overflow-x-hidden h-[56vh] lg:h-[86vh] relative">
          <div className="absolute z-10 top-[35%]  text-white flex flex-col items-center w-full [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)] uppercase">
            <p className="text-4xl sm:text-5xl md:text-7xl  text-center tracking-wide font-semibold">
              John Dempster
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="hidden md:flex flex-col gap-2 items-end ">
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              </div>

              <p className="text-3xl sm:text-5xl text-primary tracking-widest font-bold">
                Mediation
              </p>
              <div className="hidden md:flex flex-col gap-2 items-start">
                <div className="w-44 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-l from-transparent to-white rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="min-w-full ">
              <img
                src={`images/lady-justice.jpg`}
                alt={`Image`}
                className=" object-cover w-full h-full filter  brightness-[50%]"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.3]" />
        </div>
        <section className="flex items-center w-full  justify-center  py-8 md:py-16 bg-slate-50">
          <div className="flex flex-col gap-6 md:gap-20 lg:gap-0 lg:flex-row items-center justify-between  w-full max-w-[1000px]">
            <div className="flex flex-col gap-5 lg:gap-10 lg:max-w-[500px] px-0 sm:px-20 lg:px-0">
              <p className="text-2xl text-center lg:text-4xl font-semibold md:text-left">
                Mediation: A Path to Early and Satisfactory Resolution
              </p>

              <p className=" text-slate-800 italic text-sm px-4 md:px-0 md:text-lg">
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
              <p className="mt-2 text-3xl md:text-[2.6rem] text-right font-tangerine font-bold px-3 md:px-0">
                ~ John Dempster
              </p>
            </div>

            <div className="shadow-[#949494] shadow-lg overflow-hidden rounded-md">
              <img
                src={`images/headshot.jpg`}
                alt={`John Dempster`}
                className="object-cover h-[340px] w-[340px] md:h-[440px] md:w-[440px]  "
                style={{
                  objectPosition: "-10px 20px",
                  transform: "scale(1.3)"
                }}
              />
            </div>
          </div>
        </section>
        <section
          className="pt-8 md:pt-16 flex items-center justify-center text-slate-100  bg-cover bg-center bg-no-repeat bg-fixed filter backdrop-filter backdrop-blur-lg relative pb-32 md:pb-48 "
          style={{
            backgroundImage: `url('images/gavel.jpg')`,
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 93%, 0 85%)"
          }}
        >
          {/* Apply the brown filter behind the content but not on top of the text */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.8]"></div>

          {/* Ensure content is positioned above the filter using relative positioning */}
          <div className="relative flex flex-col items-start justify-center gap-5 lg:gap-10 max-w-[1000px] w-full text-sm md:text-lg lg:text-xl z-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] leading-relaxed px-4  sm:px-24 md:px-20">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed tracking-wider">
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
        <section className="flex justify-start items-center flex-col bg-slate-50 mb-10 gap-5 md:gap-10 bg-darkPrimary">
          <h2 className="text-3xl md:text-5xl font-semibold mb-2  md:mb-6">
            Areas of Expertise
          </h2>

          <div className="grid md:hidden grid-cols-2 gap-4 text-darkPrimary font-semibold px-4">
            <ExpertiseCard label="Personal Injury" Icon={FaUserInjured} />
            <ExpertiseCard label="Construction Law" Icon={MdConstruction} />

            <ExpertiseCard label="Employment Law" Icon={GiMoneyStack} />
            <ExpertiseCard label="Estate Litigation" Icon={MdRealEstateAgent} />
            <ExpertiseCard label="Professional Negligence" Icon={FaGavel} />
            <ExpertiseCard label="Bankruptcy Law" Icon={MdMoneyOffCsred} />
            <ExpertiseCard label="Land Development" Icon={FaMapMarkerAlt} />
            <ExpertiseCard label="Environmental Law" Icon={FaGlobeAmericas} />
            <ExpertiseCard
              label="Property Damage & Insurance Claims"
              Icon={FaHouseDamage}
            />
            <ExpertiseCard
              label="Condominium Law & Commercial Lease"
              Icon={GiFamilyHouse}
            />
            <ExpertiseCard
              label="Long Term Disability Claims"
              Icon={FaWheelchair}
            />
            <ExpertiseCard
              label="Commercial Litigation & Shareholder Disputes"
              Icon={MdAutoGraph}
            />
          </div>

          <div
            className=" flex-col items-center w-full h-full py-24 hidden md:flex"
            style={{
              backgroundImage: `url('/images/doctor-brace.avif')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-darkPrimary opacity-[0.6] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold mx-4">
              <ExpertiseCard label="Personal Injury" Icon={FaUserInjured} />
              <ExpertiseCard
                label="Long Term Disability Claims"
                Icon={FaWheelchair}
              />
            </div>
          </div>

          <div
            className="hidden md:flex flex-col items-center w-full h-full py-24 "
            style={{
              backgroundImage: `url('images/office-workers.jpeg')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-extraDarkPrimary opacity-[0.7] -z-10"></div>

            {/* First */}
            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold  mx-4">
              <ExpertiseCard label="Employment Law" Icon={GiMoneyStack} />
              <ExpertiseCard
                label="Estate Litigation"
                Icon={MdRealEstateAgent}
              />
              <ExpertiseCard label="Professional Negligence" Icon={FaGavel} />
              <ExpertiseCard label="Bankruptcy Law" Icon={MdMoneyOffCsred} />
            </div>
          </div>

          {/* Second */}
          <div
            className="hidden md:flex flex-col items-center w-full h-full py-16 "
            style={{
              backgroundImage: `url('images/balcony.webp')`,
              backgroundPosition: "30% 80%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-extraDarkPrimary opacity-[0.6] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold  mx-4">
              <ExpertiseCard label="Land Development" Icon={FaMapMarkerAlt} />
              <ExpertiseCard label="Environmental Law" Icon={FaGlobeAmericas} />
              <ExpertiseCard
                label="Property Damage & Insurance Claims"
                Icon={FaHouseDamage}
              />
              <ExpertiseCard
                label="Condominium Law & Commercial Lease"
                Icon={GiFamilyHouse}
              />
            </div>
          </div>

          {/* Third */}

          <div
            className="hidden md:flex flex-col items-center w-full h-full py-24 "
            style={{
              backgroundImage: `url('images/construction.webp')`,
              backgroundPosition: "30% 30%", // Adjust this value to move the image
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "brightness(50%)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-darkPrimary opacity-[0.4] -z-10"></div>

            <div className="grid grid-cols-2 gap-4 text-darkPrimary font-semibold  mx-4">
              <ExpertiseCard label="Construction Law" Icon={MdConstruction} />
              <ExpertiseCard
                label="Commercial Litigation & Shareholder Disputes"
                Icon={MdAutoGraph}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
