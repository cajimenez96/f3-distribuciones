"use client"

import Image from "next/image";
import Heading from "../Heading";
import { header, steps } from "./steps.data";

const Steps = () => {
  return (
    <section>
      <div className="w-full mb-12">
        <div className="text-center">
          <p>{header.description}</p>
          <Heading className="font-medium text-center text-celeste text-4xl">{header.title}</Heading>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {steps.map((step) => (
          <div key={step.id}>
            <Image src={step.image} alt={step.title} width={310} height={372} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Steps;