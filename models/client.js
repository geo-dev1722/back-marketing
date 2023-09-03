// Importa el módulo Mongoose y establece una conexión a la base de datos
import mongoose from 'mongoose';

// Define el esquema del documento
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
  name: String,
  email: String,
  asunto: String,
  proyecto: String,
});

// Crea el modelo utilizando el esquema
const Cliente = mongoose.model('Cliente', clienteSchema);

// Exporta el modelo
export default Cliente;
