"use client";
import { title, subtitle } from "@/components/primitives";
import { Image, Divider } from "@nextui-org/react";
import Team from "@/components/team";

export default function Home() {
  return (
    <div className="items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-5 py-4 md:py-32 md:flex-row ">
        <div className="inline-block max-w-md text-center justify-center">
          <span className={title()}> We make&nbsp;</span>
          <br />
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <span className={title({ color: "violet" })}>websites</span>
          <br />
          <span className={title()}>regardless of your necessity.</span>
          <div className={subtitle({ class: "mt-4" })}>
            We use fast and modern UI libraries.
          </div>
        </div>
        <Image
          src="bg2.png"
          alt="Main page"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
      </section>

      <Team />
    </div>
  );
}
