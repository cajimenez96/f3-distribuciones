import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import { Motion } from "../Motion";
import Reveal from "../Reveal";
import { useFormik } from 'formik';
import { contact, formInputs } from "./Contact.data";
import F3Background from "../../../public/assets/f3-contact.png";
import F3BackgroundMobile from "../../../public/assets/f3-contact-mobile.png";
import { FormData } from "./Contact.type";
import { contactSchema } from "@/utils/validations";

const INITIAL_STATE: FormData = {
  fullName: '',
  phone: 0,
  email: '',
  address: '',
  subject: '',
  message: ''
}

const Contact = () => {

  const formik = useFormik<FormData>({
    initialValues: INITIAL_STATE,
    validationSchema: contactSchema,
    onSubmit: async (form: FormData) => {

      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({form})
      })
      // const response = await sendEmail(form);
      // setShowAlert(!showAlert)
    }
  });


  return (
    <div className="w-full" id="contact">
      <div className="">
        <Reveal className="mx-auto">
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
            <form className="absolute inset-0 px-20 md:px-48 md:pt-32 mx-auto top-32 md:top-12" onSubmit={formik.handleSubmit}>
              <div>
                {formInputs.map((input, index) => (
                  <Input
                    key={index}
                    id={input.name}
                    name={input.name}
                    type={input.inputType}
                    label={input.label}
                    placeholder={input.placeholder}
                    handleChange={formik.handleChange}
                    error={formik.errors[input.name]}
                    hasError={formik.touched[input.name]}
                  />
                ))}
              </div>

              <div className="mt-12 max-w-xs mx-auto">
                <Button type="submit" buttonStyle="classic" className="h-12" >Enviar</Button>
              </div>
            </form>
          </Motion>
        </div>
      </div>
    </div>
  )
}

export default Contact;