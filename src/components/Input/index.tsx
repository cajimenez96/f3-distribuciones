import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ 
  label,
  placeholder,
  type = 'text',
  name,
  id,
  hasError = false,
  required = false,
  error,
  handleChange,
}) => {
  return (
    <div className="mb-4 w-full flex flex-col">
      <label className="text-base" htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea 
          className="mt-2 p-2 bg-transparent border-0 border-b-2 placeholder:text- focus:outline-none resize-none h-12"
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={handleChange}
          id={id}
          required={required}
          placeholder={placeholder}
          className="p-2 bg-transparent border-0 border-b-2 focus:outline-none"
        />
      )}
      {hasError && (<p className="text-blanco text-xs font-light">{error}</p>)}
    </div>
  );
};

export default Input;
