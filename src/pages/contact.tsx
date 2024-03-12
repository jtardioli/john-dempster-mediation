import Footer from "@/components/Footer";
import PageHead from "@/components/Head";
import { NavBar } from "@/components/NavBar";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Oval } from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://formsubmit.co/jdempster@sympatico.ca",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <>
      <PageHead
        title="Contact - John Dempster Mediation"
        description="Contact John Dempster Mediation in Ottawa. Get in touch with John Dempster for mediation services Phone: 613-729-9704, Email: jdempster@sympatico.ca"
      />
      <main className={`${inter.className} bg-slate-100`}>
        <NavBar />
        <div className="w-full overflow-x-hidden h-[86vh] relative">
          <div className="absolute z-10 top-[40%] text-white w-full flex justify-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex flex-col gap-2 items-end">
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-64 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
                <div className="w-44 h-[2px] bg-gradient-to-r from-transparent to-white rounded-sm"></div>
              </div>

              <p className="text-7xl text-primary tracking-widest font-bold">
                Contact
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
                src={`images/01.jpg`}
                alt={`Image`}
                className="object-cover w-full h-full filter  brightness-[70%]"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#2e1e10] opacity-[0.5]" />
        </div>

        <section
          className=" flex flex-col items-center justify-center px-20 gap-10 py-16 bg-white"
          style={{
            backgroundImage: `url('images/pexels-photo-5485125.jpeg')`,
            backgroundPosition: "80% 0%", // Adjust this value to move the image
            backgroundSize: "130%",
          }}
        >
          <div className="flex justify-between gap-12 w-full px-40">
            <div className="flex flex-col justify-start items-start gap-8 text-lg  flex-1">
              <h2 className="text-3xl font-semibold tracking-wider ">
                Get In Touch
              </h2>

              <div className="flex flex-col gap-2 text-slate-800">
                <p className=" font-semibold text-slate-900">Address:</p>
                <p>2285 St. Laurent Blvd, Ottawa</p>
                <p>Ottawa, Ontario K1G 4Z7, Canada</p>
              </div>

              <div className="flex flex-col gap-2 text-slate-800">
                <p className="font-semibold text-slate-900">Contact Details:</p>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 flex-1"
            >
              <h2 className="text-3xl font-semibold tracking-wider mb-3">
                Contact John Dempster
              </h2>

              {/* First and Last Name */}
              <div className="flex gap-2 w-full">
                {/* First Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="firstName" className="text-slate-800">
                    First Name
                  </label>
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`p-3 outline-none rounded-md shadow-inner ${
                      errors.firstName
                        ? "border-[1px] border-red-800"
                        : "border-[1px] border-slate-300"
                    } w-full`}
                    type="text"
                  />
                  {errors.firstName && (
                    <p className="text-red-800 text-sm">
                      {errors.firstName.message as string}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="lastName" className="text-slate-800">
                    Last Name
                  </label>
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`p-3 outline-none rounded-md shadow-inner ${
                      errors.lastName
                        ? "border-[1px] border-red-800"
                        : "border-[1px] border-slate-300"
                    } w-full`}
                    type="text"
                  />
                  {errors.lastName && (
                    <p className="text-red-800 text-sm">
                      {errors.lastName.message as string}
                    </p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="flex gap-2 w-full">
                {/* Email */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-slate-800">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: emailRegex,
                        message: "Invalid email address",
                      },
                    })}
                    className={`p-3 outline-none rounded-md shadow-inner ${
                      errors.email
                        ? "border-[1px] border-red-800"
                        : "border-[1px] border-slate-300"
                    } w-full`}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-800 text-sm">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phoneNumber" className="text-slate-800">
                    Phone Number
                  </label>
                  <input
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                    className={`p-3 outline-none rounded-md shadow-inner ${
                      errors.phoneNumber
                        ? "border-[1px] border-red-800"
                        : "border-[1px] border-slate-300"
                    } w-full`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-800 text-sm">
                      {errors.phoneNumber.message as string}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-800">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className={`p-3 outline-none rounded-md shadow-inner ${
                    errors.message
                      ? "border-[1px] border-red-800"
                      : "border-[1px] border-slate-300"
                  } min-h-32`}
                />
                {errors.message && (
                  <p className="text-red-800 text-sm">
                    {errors.message.message as string}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-darkPrimary py-3 px-6 rounded-md text-white w-[120px] text-xl mt-4 tracking-widest font-medium flex justify-center h-12 items-center"
                >
                  {isLoading ? (
                    <Oval
                      color="white"
                      secondaryColor="#ccc"
                      height="30"
                      width="30"
                    />
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
              <input
                {...register("_captcha")}
                type="hidden"
                name="_captcha"
                value="false"
              ></input>
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
    </>
  );
};

export default Contact;
