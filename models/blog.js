import mongoose from 'mongoose';


// Define el esquema de la entrada de blog
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
});

// Crea un modelo basado en el esquema
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
