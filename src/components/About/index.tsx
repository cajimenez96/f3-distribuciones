import Heading from "../Heading";
import Text from "../Text";
import { about } from "./About.data";
import Card from "../Card";
import Reveal from "../Reveal";
import { Motion } from "../Motion";

const About = () => {
  return (
    <div className="max-w-full mx-auto" id="about">
      <div className="w-full flex justify-center">
        <Reveal>
          <Heading level={3} className="font-medium text-center text-celeste text-4xl">
            {about.title}
          </Heading>
          <Text className="mt-10 max-w-2xl">
            {about.description}
          </Text>
        </Reveal>
      </div>
      <Motion className="mt-14 flex flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-20">
        {about.cards.map(card => (
          <div className="md:w-[33%] max-w-[410px]" key={card.id}>
            <Card
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </Motion>
    </div>
  )
}

export default About;