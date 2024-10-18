"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Team() {
  const team = [
    {
      name: "Ekrem KEMİK",
      position: "Fullstack Developer",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      name: "Sevgin SERBEST",
      position: "Fullstack Developer",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      name: "Mete Han AYDOĞDU",
      position: "UI/UX Designer",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
  ];
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Our Team</h1>
      <section className="flex flex-col flex-auto items-center justify-center gap-4 py-8 md:py-10 md:flex-row">
        {team.map((member, index) => (
          <Card className="py-1 rounded">
            <CardBody className="overflow-visible py-2">
              <Image
                alt={member.name}
                className="object-cover rounded "
                src={member.image}
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <small className="text-default-500">{member.position}</small>
              <h4 className="font-bold text-large">{member.name}</h4>
            </CardHeader>
          </Card>
        ))}
      </section>
    </>
  );
}
