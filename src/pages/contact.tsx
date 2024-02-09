import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  return (
    <main className={`${inter.className} bg-slate-100 pb-24`}>
      <NavBar />

      <section className="mt-32 flex flex-col items-center justify-center p-6 gap-6">
        <p>
          Want to learn more about how John Dempster can help you? Please call,
          email or use the contact form below.
        </p>
        <div className="flex justify-between">
          <form>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-slate-600" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400"
                  type="text"
                  id="firstName"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-slate-600" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400"
                  type="text"
                  id="lastName"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-3 outline-none rounded-md shadow-inner border-[1px] border-slate-400"
                id="message"
              />
            </div>
          </form>
          <div className="flex flex-col justify-start items-start gap-8">
            <p>Phone</p>
            <a href="tel:+16137299704">613-729-9704</a>
            <p>Email</p>
            <a href="mailto:jdempster@sympatico.ca">jdempster@sympatico.ca</a>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23019.997276329508!2d-75.63607886385887!3d45.375909741926655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f26f7ab623f%3A0xe2d7ef98ca577f75!2sDempster%20John!5e0!3m2!1sen!2sca!4v1630902421821!5m2!1sen!2sca"
              width="350"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
