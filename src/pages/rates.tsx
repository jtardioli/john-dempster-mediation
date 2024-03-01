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
        <div className="absolute top-0 left-0 w-full h-full bg-[#2e1e10] opacity-[0.5]" />
      </div>
      <section className="flex items-center justify-center px-20 gap-10 py-16">
        <div className="w-full max-w-[1000px] flex flex-col gap-10">
          {/* <h1 className="text-4xl font-bold">Mediation Rates</h1> */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl tracking-wide font-semibold">
              Mediations in Ottawa or Virtually
            </h2>
            <div className="flex justify-center items-center space-x-8 p-8 bg-white">
              {/* Half Day Mediation Card */}
              <div className="transform transition duration-500 hover:scale-105 shadow-2xl rounded-xl overflow-hidden">
                <div className="p-8 bg-primary">
                  <h2 className="text-2xl font-bold text-extraDarkPrimary mb-2">
                    Half Day Mediation
                  </h2>
                  <p className="text-md font-medium text-darkPrimary mb-4">
                    Up to 3 hours
                  </p>
                  <p className="text-xl font-semibold text-extraDarkPrimary">
                    $2,500.00 plus HST
                  </p>
                </div>
                <div className="px-8 py-4 bg-primary">
                  <p className="text-sm text-extraDarkPrimary italic">
                    For those who seek a prompt, yet thorough, resolution to
                    their disputes
                  </p>
                </div>
              </div>

              {/* Full Day Mediation Card */}
              <div className="transform transition duration-500 hover:scale-105 shadow-2xl rounded-xl overflow-hidden">
                <div className="p-8 bg-darkPrimary">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Full Day Mediation
                  </h2>
                  <p className="text-md font-medium text-primary mb-4">
                    Up to 6 hours
                  </p>
                  <p className="text-xl font-semibold text-primary">
                    $2,500.00 plus HST
                  </p>
                </div>
                <div className="px-8 py-4 bg-darkPrimary">
                  <p className="text-sm text-primary italic">
                    Comprehensive day-long mediation to resolve complex
                    disputes.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-secondary text-sm">
              *Additional time beyond the scheduled mediation will be charged at
              $400.00 per hour plus HST.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl tracking-wide font-semibold">
              Mediations in the Eastern Region outside Ottawa
            </h2>
            <div className="flex justify-center items-center space-x-8 p-8 bg-white">
              {/* Half Day Mediation Card */}
              <div className="transform transition duration-500 hover:scale-105 shadow-2xl rounded-xl overflow-hidden">
                <div className="p-8 bg-primary">
                  <h2 className="text-2xl font-bold text-extraDarkPrimary mb-2">
                    Half Day Mediation
                  </h2>
                  <p className="text-md font-medium text-darkPrimary mb-4">
                    Up to 3 hours
                  </p>
                  <p className="text-xl font-semibold text-extraDarkPrimary">
                    $2,800.00 plus HST
                  </p>
                </div>
                <div className="px-8 py-4 bg-primary">
                  <p className="text-sm text-extraDarkPrimary italic">
                    Professional mediation services tailored to your needs.
                  </p>
                </div>
              </div>

              {/* Full Day Mediation Card */}
              <div className="transform transition duration-500 hover:scale-105 shadow-2xl rounded-xl overflow-hidden">
                <div className="p-8 bg-darkPrimary">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Full Day Mediation
                  </h2>
                  <p className="text-md font-medium text-primary mb-4">
                    Up to 6 hours
                  </p>
                  <p className="text-xl font-semibold text-primary">
                    $2,800.00 plus HST
                  </p>
                </div>
                <div className="px-8 py-4 bg-darkPrimary">
                  <p className="text-sm text-primary italic">
                    Comprehensive day-long mediation to resolve complex
                    disputes.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-secondary text-sm">
              *Additional time beyond the scheduled mediation will be charged at
              $400.00 per hour plus HST.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              Mediations outside the Eastern Region
            </h2>
            <p>
              The fee as well as any travel/accommodation expenses will be
              discussed and agreed to between the parties and the mediator.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              Premium for Multiple Actions or Parties
            </h2>
            <p>
              For mediations involving more than one action, global mediations
              of both the MVA Tort and AB claims, or involving more than three
              parties, a premium on the mediation fee will be discussed and
              agreed to between the parties and the mediator.
            </p>
          </div>

          <h1 className="text-4xl font-bold">Cancellation Fees</h1>
          <p>
            For mediations in Ottawa, the Eastern Region or virtually, if the
            mediation is cancelled more than 15 days before the scheduled date,
            there will be no cancellation fee. However, if the mediation is
            cancelled within 15 days of the scheduled date, there will be a
            cancellation fee of 50% of the mediation fee plus HST.
          </p>
          <p>
            For in person mediations outside the Eastern Region, the
            cancellation fee together with reimbursement for any expenses
            incurred for travel or accommodation, will be discussed and agreed
            to between the parties and the mediator.
          </p>
          <h1 className="text-4xl font-bold">Payment of Accounts:</h1>
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
