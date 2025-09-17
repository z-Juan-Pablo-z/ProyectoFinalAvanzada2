import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){
        let objServicioH = new ServicioHabitacion()
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta",
                "datos" : await objServicioH.buscarHabitaciones(),
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
    }

    async buscarHabitacionPorId(request,response){
        let id_rq= request.params.idHabitacion //recibo el id de la peticion
        let objServicioH = new ServicioHabitacion();
        // console.log("el id es: "+id_rq)
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Se encontro la habitacion encontrada"+id_rq,
                "datos" : await objServicioH.buscarHabitacionPorId(id_rq),
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request,response){
        let datosHabitacion = request.body;
        let objServicioH = new ServicioHabitacion();
        try {
            // console.log(datosHabitacion);
            if( datosHabitacion.numeroMaximoPersonas < 8 ){
                await objServicioH.agregarHabitacion(datosHabitacion);
                response.status(200).json({
                    "mensaje" : "Se registro correctamente",
                    "datos" : null
                });
            }else{
                //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
                response.status(400).json({
                    "mensaje" : "No hay tanto epacio ",
                    "datos" : null
                });
            }
            //no programa ni el 300 ni el 500

        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo al registrar "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy agregando desde el controlador")
    }

    async editarHabitacion(request,response){
        let id_rq = request.params.idHabitacion
        let datosEdit = request.body
        let objServicioH = new ServicioHabitacion()
        // console.log(id_rq, " ",datosEdit);
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            await objServicioH.editarHabitacion(id_rq,datosEdit)
            response.status(200).json({
                "mensaje" : "Exito editando el registro "+id_rq,
                "datos" : null,
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy editando desde el controlador")
    }

    async borrarHabitacion(request,response){
        let id_rq = request.params.idHabitacion
        let objServicioH = new ServicioHabitacion()
        console.log(id_rq);
        try {
            await objServicioH.borrarHabitacion(id_rq);
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
                "datos" : "Aqui van los datos de Habitaciones",
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("Estoy eliminando una habitacion desde el controlador")

    }

}