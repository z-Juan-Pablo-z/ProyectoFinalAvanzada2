import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReservas.js'
let controladorReserva = new ControladorReserva()
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelesnick/reservas',controladorReserva.buscarReservas)
rutasPersonalizadas.get('/hotelesnick/reserva/:idReserva',controladorReserva.buscarReservasPorId)
rutasPersonalizadas.post('/hotelesnick/reserva', controladorReserva.registrarReserva)
rutasPersonalizadas.put('/hotelesnick/reserva/:idReserva', controladorReserva.editarReserva)
rutasPersonalizadas.delete('/hotelesnick/reserva/:idReserva',controladorReserva.borrarReserva)