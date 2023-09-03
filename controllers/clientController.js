import Cliente from '../models/client.js'; // Importa tu modelo de cliente definido anteriormente
import Blog from "../models/blog.js";

export const getBlog = async (req, res) => {
  try {
    const searchBlog = await Blog.find();
    const data = [...searchBlog]
    console.log(searchBlog);
    res.json(data); // Devolver los datos como respuesta si se encuentran
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar en la base de datos' });
  }
}



export const createCliente = async (req, res) => {
  const objeto = req.body;

  try {
    // Crea una instancia del modelo Cliente con los datos del cuerpo de la solicitud
    const nuevoCliente = new Cliente(objeto);

    // Guarda el nuevo cliente en la base de datos
    await nuevoCliente.save();

    // Envía una respuesta de éxito
    res.status(201).json({ message: 'Cliente creado con éxito', cliente: nuevoCliente });
  } catch (error) {
    // Maneja los errores y envía una respuesta de error
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

  

 
  
  
  
  
  
