export const contact = {
  title: "Contáctanos",
}

const phonePattern = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;


export const formInputs = [ 
  {
    label: "Nombre completo",
    name: "fullName",
    inputType: "text",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,20}$",
    required:true,
    error:"Debe ingresar un nombre entre 3 y 20 caracteres"
  },
  {
    label: "Teléfono",
    name: "phone",
    inputType: "number",
    placeholder: "3815111111",
    pattern: phonePattern,
    required:true,
    error:"Debe ingresar un número válido"
  },
  {
    label: "Correo electrónico",
    name: "email",
    inputType: "email",
    placeholder: "",
    pattern :"^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$",
    required:true,
    error:"Debe ingresar un correo electrónico válido"
  },
  {
    label: "Domicilio",
    name: "address",
    inputType: "text",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,100}$",
    required:true,
    error:"Debe ingresar un nombre entre 3 y 100 caracteres"
  },
  {
    label: "Asunto",
    name: "subject",
    inputType: "text",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,50}$",
    required:true,
    error:"Debe ingresar un nombre entre 3 y 50 caracteres"
  },
  {
    label: "Mensaje",
    name: "message",
    inputType: "textarea",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,300}$",
    required:true,
    error:"Debe ingresar un mensaje válido entre 3 y 300 caracteres."
  }
]