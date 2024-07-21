import * as Yup from "yup";
import { formInputs } from "../components/Contact/Contact.data";

type Inputs = typeof formInputs;

const buildYupSchema = (inputs: Inputs) => {
  const shape = {};
  inputs.forEach((input) => {
    let validator = Yup.string().matches(new RegExp(input.pattern), input.error);
    if (input.required) {
      validator = validator.required(input.error);
    }
    shape[input.name] = validator;
  });
  return Yup.object().shape(shape);
};

export const contactSchema = buildYupSchema(formInputs);
