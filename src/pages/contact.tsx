import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  return (
    <main className={`${inter.className} bg-slate-100`}>
      <NavBar />
      <div className="w-full overflow-x-hidden h-[68vh] mt-32 relative">
        <div className="absolute z-10 top-[30%] left-[10%] text-white">
          <p className="text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
            Harmonizing Interests, Resolving Conflicts
          </p>
        </div>
        <div className="flex h-full">
          <div className="min-w-full ">
            <img
              src={`images/03.jpg`}
              alt={`Image`}
              className="object-cover w-full h-full filter  brightness-[100%]"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c120a] opacity-[0.3]" />
      </div>

      <section className=" flex flex-col items-center justify-center p-6 gap-10 py-20">
        <div className="flex justify-between gap-12 w-full px-40">
          <div className="flex flex-col justify-start items-start gap-8 text-lg  flex-1">
            <h2 className="text-3xl">Get In Touch</h2>

            <div className="flex flex-col gap-2">
              <p className=" font-semibold">Address:</p>
              <p>2285 St. Laurent Blvd, Ottawa</p>
              <p>Ottawa, Ontario K1G 4Z7, Canada</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Contact Details:</p>
              <p>
                Phone:{" "}
                <a className="hover:underline" href="tel:+16137299704">
                  613-729-9704
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="hover:underline"
                  href="mailto:jdempster@sympatico.ca"
                >
                  jdempster@sympatico.ca
                </a>
              </p>
            </div>
          </div>
          <form className=" flex flex-col gap-10 flex-1 ">
            <h2 className="text-3xl">Contact John Dempster Today</h2>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label className=" text-slate-600" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400 w-full"
                  type="text"
                  id="firstName"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className=" text-slate-600" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400 w-full"
                  type="text"
                  id="lastName"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-slate-600" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400 w-full"
                  type="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className=" text-slate-600" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400 w-full"
                  id="phoneNumber"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className=" text-slate-600" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400 min-h-44"
                id="message"
              />
            </div>
            <div>
              <button className="bg-[#51341c] py-3 px-6 rounded-md text-white mt-[-15px] w-[120px] text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23019.997276329508!2d-75.63607886385887!3d45.375909741926655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f26f7ab623f%3A0xe2d7ef98ca577f75!2sDempster%20John!5e0!3m2!1sen!2sca!4v1630902421821!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ border: "0" }}
          loading="lazy"
        />
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
