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
          <Heading level={3} className="font-medium text-center text-celeste text-4xl">{header.title}</Heading>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {steps.map((step) => (
          <div key={step.id} className="w-80 h-[710px]">
            <Image src={step.image} alt={step.title} className="object-contain h-[372px]" />
            <div>
              <Heading level={4} className="font-medium text-celeste text-4xl">{step.id}</Heading>
              <Heading level={4} className="font-medium text-2xl my-3">{step.title}</Heading>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Steps;