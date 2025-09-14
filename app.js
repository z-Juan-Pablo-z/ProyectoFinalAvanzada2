import dotenv from "dotenv";
dotenv.config();

import { ServidorAPI } from "./API/ServidorAPI.js";

let servidorHoteles = new ServidorAPI(); // Instancia de una clase (OBJETO)
servidorHoteles.despertarServidor();
