import Container from "../Container";
import Heading from "../Heading";
import Input from "../Input";
import { Motion } from "../Motion";
import { Reveal } from "../Reveal";

const Contact = () => {
  const handleSubmit = () => {
    console.log('envio de formulario');
    
  }

  return (
    <div className="md:w-[68%]">
      <Reveal>
        <Heading level={5} className="text-2xl md:text-4xl whitespace-pre text-center">
          {`¿Querés recibir mayor información de \nnuestros productos y servicios?`}
        </Heading>
      </Reveal>
      <div>
        <Reveal>
          <Heading level={3} className="text-xl md:text-3xl">Contactanos</Heading>
        </Reveal>
        <Motion>
          <form>
            <div>
              <Input type="text" label="Nombre completo" />
              <Input type="email" label="Correo electronico" />
              <Input type="tel" label="Telefono" />
              <Input type="text" label="Asunto" />
              <Input type="textarea" label="Mensaje" />
            </div>
          </form>
        </Motion>
      </div>
    </div>
  )
}

export default Contact;