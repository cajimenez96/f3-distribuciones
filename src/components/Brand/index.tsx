import React from 'react'
import Reveal from '../Reveal'
import Heading from '../Heading'
import Text from '../Text'
import { Motion } from '../Motion'
import Carousel from '../Carousel'
import { brand, brands } from './Brand.data'
import cinta from "../../../public/assets/f3-brand.png";
import Image from 'next/image'

const Brand = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20" id="brands">
    <div>
      <Reveal>
        <div className="mx-5 md:mx-auto">
          <Heading level={3} className="font-medium text-center text-celeste text-4xl">
            {brand.title}
          </Heading>
          <Text className="mt-10 max-w-2xl">
            {brand.description}
          </Text>
        </div>
      </Reveal>
    </div>

    <div className="mt-10 flex flex-col items-center">
      <div className='mx-auto max-w-sm md:max-w-screen-md lg:max-w-screen-xl flex flex-col justify-center items-center'>
        <div className='w-[80%]'>
          <Carousel elements={brands} />
        </div>

        <Image src={cinta} alt="brands" className="object-fill h-fit" />
      </div>
    </div>

  </div>
  )
}

export default Brand