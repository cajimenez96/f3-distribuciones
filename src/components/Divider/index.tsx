import { DividerProps } from "./Divider.types";

const Divider: React.FC<DividerProps> = ({className}) => (<div className={`w-[90%] my-20 mx-auto border-2 border-azul rounded-md opacity-20 ${className}`} />)

export default Divider;