import express from "express";
 const router = express()
 import { getBlog, createCliente } from "../controllers/clientController.js";
 

 router.get("/", getBlog)

 router.post("/createUser", createCliente)


 export default router; 
