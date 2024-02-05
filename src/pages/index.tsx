import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineWork, MdPersonalInjury } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = ["01.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <main className={inter.className}>
      <NavBar />
      <div className="w-full overflow-x-hidden h-[87vh] mt-32 relative">
        <div className="absolute z-10 top-[30%] left-[10%] text-white">
          <p className="text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
            Harmonizing Interests, Resolving Conflicts
          </p>
        </div>
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full ">
              <img
                src={`images/${image}`}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full filter  brightness-[40%]"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.3]" />
      </div>
      <section className="flex items-center w-full  justify-center  py-24">
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
            <p className=" mb text-xl text-right">~ John Dempster</p>
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
        className="py-24 flex items-center justify-center text-slate-100 bg-cover bg-center bg-no-repeat bg-fixed filter backdrop-filter backdrop-blur-lg relative pb-36"
        style={{
          backgroundImage: `url('images/05.jpg')`,
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
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
      <section>
        <div>
          <h2>My Expertise</h2>
        </div>
      </section>
    </main>
  );
}
