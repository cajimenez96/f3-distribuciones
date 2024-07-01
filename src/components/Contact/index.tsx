import Button from "../Button";
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
    <Container className="w-full" id="contact">
      <div className="w-[68%] mx-auto">
        <Reveal>
          <Heading level={5} className="text-xl md:text-4xl text-center font-semibold">
            {`¿Querés recibir mayor información de \nnuestros productos y servicios?`}
          </Heading>
        </Reveal>
        <div className="mt-20 w-full">
          <Reveal>
            <Heading level={3} className="text-xl md:text-3xl font-medium">Contactanos</Heading>
          </Reveal>
          
          <Motion>
            <form className="w-full mt-5 border-2 border-naranja rounded-lg p-5 shadow-xl">
              <div className="w-full">
                <Input type="text" label="Nombre completo" />
                <Input type="email" label="Correo electronico" />
                <Input type="tel" label="Telefono" />
                <Input type="text" label="Asunto" />
                <Input type="textarea" label="Mensaje" />
              </div>

              <div className="my-10">
                <Button type="submit" buttonStyle="outline">Enviar</Button>
              </div>
            </form>
          </Motion>
        </div>
      </div>
    </Container>
  )
}

export default Contact;