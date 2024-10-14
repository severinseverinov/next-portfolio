"use client";
import bg from "@/public/bg2.png";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:flex-row">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}> We make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>websites regardless of your necessity.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Our team use fast and modern UI libraries.
        </div>
      </div>

      <Image src={bg} alt="Main page" sizes="(max-width: 768px) 80vw, 33vw" />
    </section>
  );
}
