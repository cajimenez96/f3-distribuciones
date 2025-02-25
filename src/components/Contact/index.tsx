import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import { Motion } from "../Motion";
import Reveal from "../Reveal";
import { contact } from "./Contact.data";
import F3Background from "../../../public/assets/f3-contact.png";
import F3BackgroundMobile from "../../../public/assets/f3-contact-mobile.png";

const Contact = () => {
  const handleSubmit = () => {
    console.log('envio de formulario');
    
  }

  return (
    <div className="w-full" id="contact">
      <div className="">
        <Reveal className="mx-auto">
          <p className="text-center">{contact.description}</p>
          <Heading level={3} className="w-full font-medium text-center text-celeste text-4xl">
            {contact.title}
          </Heading>
        </Reveal>
        <div className={`mx-auto mt-12 max-w-[760px] relative`}>
          <Motion>
            <div className="relative">
              <Image src={F3Background} alt="bg" className="object-contain mx-auto hidden md:block"/>
              <Image src={F3BackgroundMobile} alt="bg" className="object-cover block md:hidden" />
            </div>
            <form className="absolute inset-0 px-20 md:px-48 md:pt-32 mx-auto top-32 md:top-12">
              <div>
                <Input type="text" label="Nombre completo" />
                <Input type="email" label="Correo electronico" />
                <Input type="tel" label="Telefono" />
                <Input type="text" label="Direccion" />
                <Input type="text" label="Asunto" />
                <Input type="textarea" label="Mensaje" />
              </div>

              <div className="mt-12 max-w-xs mx-auto">
                <Button type="submit" buttonStyle="classic" className="h-12">Enviar</Button>
              </div>
            </form>
          </Motion>
        </div>
      </div>
    </div>
  )
}

export default Contact;