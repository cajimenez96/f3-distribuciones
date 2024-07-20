import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Heading from '../Heading';
import Text from '../Text';

interface ICard {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Card = ({id, title, description, image}: ICard) => {
  return (
    <div key={id} className="md:w-[410px] h-[703px] rounded-lg relative overflow-hidden group">
      <Image src={image} alt={title} className="rounded-lg object-cover h-full w-full" />

    <div className="p-4 absolute inset-0 bg-naranja bg-opacity-75 text-blanco flex flex-col justify-start transform translate-y-[635px] group-hover:translate-y-1/2 transition-transform duration-300">
      <Heading level={6} className="font-medium capitalize text-3xl">
        {title}
      </Heading>
      <Text className="mt-6">
        {description}
      </Text>
    </div>
  </div>
  )
};

export default Card;
