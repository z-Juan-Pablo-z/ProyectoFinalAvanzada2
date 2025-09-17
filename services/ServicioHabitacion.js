import { modeloHabitacion } from "../Models/ModeloHabitacion.js";

export class ServicioHabitacion{
    //Aqui programo metodos para cada una de las consultas que quiero hacer de la BD

    async buscarHabitaciones(){
        let habitaciones = await modeloHabitacion.find();
        return habitaciones;
    }

    async buscarHabitacionPorId(id){
        let habitacion = await modeloHabitacion.findById(id);
        return habitacion;
    }

    async buscarHabitacionPorMaximoPersonas(numeroMaximoPersonas) {
        const habitaciones = await modeloHabitacion.find({
            maximoPersonas: numeroMaximoPersonas
        });
        return habitaciones;
    }

    async agregarHabitacion(habitacionAgg){
        let datosValidados = new modeloHabitacion(habitacionAgg);
        return await datosValidados.save();
    }

    async editarHabitacion(id,habitacionEdit){
        return await modeloHabitacion.findByIdAndUpdate(id,habitacionEdit);
    }
    
    async borrarHabitacion(id){
        return await modeloHabitacion.findByIdAndDelete(id);
    }
}