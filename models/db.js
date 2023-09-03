import mongoose from "mongoose";

// URL de conexión a la base de datos MongoDB
const dbURL = "mongodb+srv://contacto:MongoDB5335.@cluster0.djyhisq.mongodb.net/";

async function connect() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
}

// Exporta la función de conexión
export default { connect };
