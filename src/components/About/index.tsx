import Heading from "../Heading";
import Text from "../Text";
import { about } from "./About.data";
import Card from "../Card";
import Reveal from "../Reveal";
import { Motion } from "../Motion";

const About = () => {
  return (
    <div className="w-full mx-auto">
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
      <Motion className="mt-14 flex flex-wrap justify-center gap-20">
        {about.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Motion>
    </div>
  )
}

export default About;