import Footer from "@/components/Footer";
import PageHead from "@/components/Head";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const DeliveryOfMaterials = () => {
  return (
    <>
      <PageHead
        title="Delivery of Materials - John Dempster Mediation"
        description="Delivery of materials to John Dempster Mediation. Mediation briefs and any other materials can be provided electronically by email or by mail or courier."
      />
      <main className={inter.className}>
        {/* <NavBar /> */}
        <div className="w-full overflow-x-hidden h-[56vh] md:h-[86vh] relative">
          <div className="absolute z-10 top-[40%] text-white w-full flex justify-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="hidden md:flex flex-col gap-2 items-end">
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              </div>

              <p className="text-4xl md:text-5xl text-primary tracking-widest font-bold text-center">
                Delivery of Materials
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
                src={`images/files.jpg`}
                alt={`Image`}
                className="object-cover w-full h-full filter  brightness-[30%]"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#2e1e10] opacity-[0.4]" />
        </div>
        <section className="flex items-center justify-center px-4">
          <div className="w-full max-w-[800px] py-12 md:py-20 text-sm md:text-lg flex flex-col gap-6">
            <p>
              My preference is for the parties to provide me with their
              mediation briefs and any other materials electronically by email
              to:{" "}
            </p>
            <p>
              {" "}
              <strong>
                {" "}
                <a
                  className="hover:underline"
                  href="mailto:jdempster@sympatico.ca"
                >
                  jdempster@sympatico.ca
                </a>
              </strong>
            </p>
            <p>
              If this is not possible, then hard copies of mediation briefs and
              any other materials can be provided to me by mail or courier at
              the following address:
            </p>
            <p>
              <strong>
                {" "}
                John D. Dempster 2285 St. Laurent Blvd., Unit D16 Ottawa, ON,
                K1G 4Z7
              </strong>
            </p>
            <p>
              Please instruct the courier <strong>not</strong> to require a
              signature, and to use the courier chute located beside the front
              door.
            </p>
          </div>
        </section>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default DeliveryOfMaterials;
