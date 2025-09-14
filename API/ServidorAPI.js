import express from 'express'
import cors from 'cors'

import { rutasPersonalizadas } from '../Routes/rutas.js'
import { conectarConMongoo } from '../Database/conexion.js'

export class ServidorAPI {
    constructor() {
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.activarCORS()     // 👈 habilitar CORS
        this.atenderPeticiones()
    }

    // Métodos de la clase ServidorAPI
    despertarServidor() {
        this.app.listen(process.env.PORT, function () {
            console.log("exito encendiendo el servidor: " + process.env.PORT)
        })
    }

    atenderPeticiones() {
        this.app.use('/', rutasPersonalizadas)
    }

    conectarConBD() {
        conectarConMongoo();
    }

    activarBody() {
        this.app.use(express.json())
    }

    activarCORS() {
        this.app.use(cors({
            origin: 'http://localhost:4200'  // 👈 permitir Angular local
        }))
    }
}
