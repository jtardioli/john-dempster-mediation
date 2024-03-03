import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const DeliveryOfMaterials = () => {
  return (
    <main className={inter.className}>
      <NavBar />
      <div className="w-full overflow-x-hidden h-[86vh] relative">
        <div className="absolute z-10 top-[40%] text-white w-full flex justify-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex flex-col gap-2 items-end">
              <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              <div className="w-64 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
            </div>

            <p className="text-5xl text-primary tracking-widest font-bold">
              Rates & Cancellations
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
              src={`images/03.jpg`}
              alt={`Image`}
              className="object-cover w-full h-full filter  brightness-[70%]"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#2e1e10] opacity-[0.7]" />
      </div>
      <section className="flex items-center justify-center px-20 gap-10 py-16">
        <div className="w-full max-w-[1000px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl tracking-wide font-bold">
              Mediations in Ottawa or Virtually
            </h2>
            <div className="flex justify-center items-center space-x-8 p-8 bg-white">
              {/* Half Day Mediation Card */}
              <div
                className="flex-1 transform transition duration-500 hover:scale-105 shadow-md shadow-slate-400 rounded-xl overflow-hidden border-[1px border-[#e0c78d]]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, #F0E2BE 20%, #EBBC74 200%)",
                }}
              >
                <div className="p-8 ">
                  <h2 className="text-2xl font-semibold text-extraDarkPrimary mb-2 tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_10%)]">
                    Half Day Mediation
                  </h2>
                  <p className="text-sm font-medium text-slate-800 mb-4">
                    Up to 3 hours
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-4xl font-bold text-darkPrimary tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
                      $1,500.00
                    </p>
                    <p className="text-xs  text-slate-800">+ HST</p>
                  </div>
                </div>
                <div className="px-8 py-4 ">
                  <p className="text-sm text-extraDarkPrimary italic">
                    The fee is inclusive of preparation time prior to the
                    mediation
                  </p>
                </div>
              </div>
              <div
                className="flex-1 transform transition duration-500 hover:scale-105 shadow-md shadow-slate-400 rounded-xl overflow-hidden border-[1px] border-[#e0c78d]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, #F0E2BE 20%, #EBBC74 200%)",
                }}
              >
                <div className="p-8 ">
                  <h2 className="text-2xl font-semibold text-extraDarkPrimary mb-2 tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_10%)]">
                    Full Day Mediation
                  </h2>
                  <p className="text-sm font-medium text-slate-800 mb-4">
                    Up to 6 hours
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-4xl font-bold text-darkPrimary tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
                      $2,500.00
                    </p>
                    <p className="text-xs  text-slate-800">+ HST</p>
                  </div>
                </div>
                <div className="px-8 py-4 ">
                  <p className="text-sm text-extraDarkPrimary italic">
                    The fee is inclusive of preparation time prior to the
                    mediation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-slate-600 text-xs">
              *Additional time beyond the scheduled mediation will be charged at
              $400.00 per hour plus HST.
            </p>
          </div>

          <div className=" border-slate-300 border-b-[1px] h-[1px]"></div>

          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl tracking-wide font-bold">
              In Person Mediations in the Eastern Region outside Ottawa
            </h2>
            <div className="flex justify-center items-center space-x-8 p-8 bg-white">
              {/* Full Day Mediation Card */}
              <div
                className="transform transition duration-500 hover:scale-105 shadow-md shadow-slate-400 rounded-xl overflow-hidden  max-w-[500px] relative bg-cover"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, #402a18 10%, #2e1e11 150%)",
                }}
              >
                <div className="p-8">
                  <h2
                    className="text-2xl font-semibold text-[#fceecd] mb-2 tracking-wide"
                    style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
                  >
                    Full Day Mediation
                  </h2>
                  <p className="text-sm font-medium text-[#F0E2BE] mb-4">
                    Up to 6 hours
                  </p>
                  <div className="flex items-center gap-1">
                    <p
                      className="text-4xl font-bold text-[#fceecd] tracking-wide"
                      style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                      $2,800.00
                    </p>
                    <p className="text-xs text-[#F0E2BE]">+ HST</p>
                  </div>
                </div>
                <div className="px-8 py-4">
                  <p className="text-sm text-[#e4d7b6] italic">
                    The fee is inclusive of travel time and preparation time
                    prior to the mediation
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-600 text-xs">
              *Additional time beyond the scheduled mediation will be charged at
              $400.00 per hour plus HST.
            </p>
          </div>

          <div className=" border-slate-300 border-b-[1px] h-[1px]"></div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              In Person Mediations outside the Eastern Region
            </h2>
            <p>
              The fee, as well as any travel/accommodation expenses will be
              discussed and agreed to between the parties and the mediator.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              Premium for Multiple Actions or Parties
            </h2>
            <p>
              For mediations involving more than one action, global mediations
              of both the MVA Tort and AB claims, or involving more than three
              parties, a premium on the mediation fee will be discussed and
              agreed to between the parties and the mediator.
            </p>
          </div>

          <div className=" border-slate-300 border-b-[1px] h-[1px]"></div>

          <h1 className="text-4xl font-bold">Cancellation Fees</h1>
          <p>
            For mediations in Ottawa, the Eastern Region or virtually, if the
            mediation is cancelled within 15 days of the scheduled date, there
            will be a cancellation fee of 50% plus HST of the mediation fee.
          </p>
          <p>
            For in person mediations outside the Eastern Region, the
            cancellation fee together with reimbursement for any expenses
            incurred for travel or accommodation, will be discussed and agreed
            to between the parties and the mediator.
          </p>

          <div className=" border-slate-300 border-b-[1px] h-[1px]"></div>

          <h1 className="text-4xl font-bold">Payment of Accounts</h1>
          <p>
            Unless otherwise discussed and agreed in advance between the parties
            and the mediator, the fees for the mediation will be shared and paid
            equally by counsel for the parties.
          </p>
          <p>
            All accounts for fees, disbursements and HST are due and payable
            when rendered. Overdue accounts bear interest at the rate of 5% per
            annum calculated monthly until paid in full.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DeliveryOfMaterials;
