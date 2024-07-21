import { MONGO_URI } from "@/utils/contants"
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!MONGO_URI) throw new Error('MONGO_URI No está definido');

    await mongoose.connect(MONGO_URI);
    console.log('Conexion a BD establecida.');
    
  } catch (error) {
    console.error('Error en la conexion a la BD: ', error);
    process.exit(1);
  }
}

export default connectDB;