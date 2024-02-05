import { NavBar } from "@/components/NavBar";
import React from "react";

const BookNow = () => {
  return (
    <main>
      <NavBar />
      <section className="mt-32 flex items-center justify-center  ">
        <div className="w-full max-w-[1000px]">
          My preference is for the parties to provide me with their mediation
          briefs and any other materials electronically by email to:
          jdempster@sympatico.ca If this is not possible, then hard copies of
          mediation briefs and any other materials can be provide to me by mail
          or courier at the following address: John D. Dempster 2285 St. Laurent
          Blvd., Unit D16 Ottawa, ON, K1G 4Z7 Please instruct the courier not to
          require a signature, and to use the courier chute located beside the
          front door.
        </div>
      </section>
    </main>
  );
};

export default BookNow;
