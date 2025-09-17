import { ServicioReserva } from "../services/ServicioReserva.js";
import { modeloHabitacion } from "../Models/ModeloHabitacion.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import {ServicioReserva} from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){

    }

    //estos metodos llevaran la logica y respuesta 
    async buscarReservas(request,response){
        let objReserva = new ServicioReserva()
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta",
                "datos" : await objReserva.buscarReservas(),
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
        //response.send("Estoy buscando reservas desde el controlador")
    }
    async buscarReservasPorId(request,response){
        let id_rq = request.params.idReserva
        let objReserva = new ServicioReserva()
        console.log(id_rq);
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
                "datos" : await objReserva.buscarReservaPorId(id_rq),
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
        //response.send("Estoy buscando una reserva por id desde el controlador")

    }
    async registrarReserva(request,response){
        let objReserva = new ServicioReserva()
        let datosReserva = request.body
        let objServicioH = new ServicioHabitacion()

        //valor de la noche , numero maximo personas(calculo de ninos y adultos)
        //salida-entrada #dias x valornoche
        console.log(datosReserva);
        try {
            
            let datos_habitacion = await objServicioH.buscarHabitacionPorId(datosReserva.idHabitacion);
            let maxPerson = datos_habitacion.numeroMaximoPersonas
            let numeroPersonas = datosReserva.numeroNinos+datosReserva.numeroAdultos;
            let entrada = new Date(datosReserva.fechaEntrada);
            let salida = new Date(datosReserva.fechaSalida);
            let costo = 0;
            const diffInDays = Math.floor((salida - entrada) / (1000 * 60 * 60 * 24))+1;
            if(diffInDays>0){
                //no programa ni el 300 ni el 500
                //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
                costo = Number(valorNoche)*Number(diffInDays);
                if(maxPerson>= numeroPersonas){
                    response.status(200).json({
                        "mensaje" : "exito Agregando la reserva",
                        "datos" : null,
                        "estado" : true
                    })
                }else{
                    response.status(400).json({
                        "mensaje" : "No caben Tantos desparchao",
                        "datos" : null,
                        "estado" : true
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje" : "No mijo, quedese al menos un dia",
                    "datos" : null,
                    "estado" : true
                })

            }
           

            // await objReserva.agregarReserva(datosReserva)

            
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("Estoy registrando una reserva desde el controlador")

    }
    async editarReserva(request,response){
        let id_rq = request.params.idReserva
        let datos_rq = request.body
        let objReserva = new ServicioReserva()

        console.log(id_rq," ",datos_rq);
        try {
            
            
            await objReserva.editarReserva(id_rq,datos_rq)

            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
                "datos" : datos_rq,
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
        //response.send("Estoy editando una reserva desde el controlador")

    }
    async borrarReserva(request,response){
        let id_rq = request.params.idReserva
        let objReserva = new ServicioReserva()
        console.log(id_rq);
        try {
            await objReserva.borrarReserva(id_rq);
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
                "datos" : "Aqui van los datos de Habitaciones",
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
        //response.send("Estoy eliminando una reserva desde el controlador")

    }

    async buscarDisponibilidad(req, res) {
        let objServicioH = new ServicioHabitacion();
        try {
            const adultos = Number(req.body.adultos) || 0;
            const ninos = Number(req.body.ninos) || 0;
            const { fechaEntrada, fechaSalida } = req.body;

            console.log("📩 Datos recibidos en backend:", req.body);

            if (!fechaEntrada || !fechaSalida || adultos <= 0) {
                return res.status(400).json({ error: 'Datos incompletos o inválidos' });
            }

            // Convertir a Date
            const entrada = new Date(fechaEntrada);
            const salida = new Date(fechaSalida);

            if (isNaN(entrada) || isNaN(salida)) {
                return res.status(400).json({ mensaje: "Formato de fecha inválido" });
            }

            // 1️⃣ Buscar reservas que se crucen con las fechas solicitadas
            const reservasOcupadas = await Reserva.find({
                $or: [
                    { fechaEntrada: { $lt: salida }, fechaSalida: { $gt: entrada } }
                ]
            });

            const habitacionesOcupadas = reservasOcupadas.map(r => r.habitacionId.toString());

            // 2️⃣ Filtrar habitaciones que no estén en habitacionesOcupadas
            let disponibles = await modeloHabitacion.find({
                _id: { $nin: habitacionesOcupadas },
                numeroMaximoPersonas: { $gte: adultos + ninos }
            });

            return res.status(200).json(disponibles);

        } catch (err) {
            console.error("❌ Error en buscarDisponibilidad:", err);
            res.status(400).json({
                mensaje: "Error buscando disponibilidad",
                error: err.message
            });
        }
    }


}