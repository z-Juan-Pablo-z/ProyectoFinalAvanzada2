import { modeloReserva } from "../Models/ModeloReserva.js";

export class ServicioReserva{
    //Aqui programo metodos para cada una de las consultas que quiero hacer de la BD

    async buscarReservas(){
        let reservas = await modeloReserva.find();
        return reservas;
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id);
        return reserva;
    }

    async agregarReserva(reservaAgg,costoReserva){
        let datosValidados = new modeloReserva(reservaAgg,costoReserva);
        return await datosValidados.save();
    }

    async editarReserva(id,reservaEdit){
        return await modeloReserva.findByIdAndUpdate(id,reservaEdit);
    }
    async borrarReserva(id){
        return await modeloReserva.findByIdAndDelete(id);
    }
}