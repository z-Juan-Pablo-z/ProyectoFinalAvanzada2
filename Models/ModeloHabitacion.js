import mongoose from 'mongoose';
//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS CON LOS QUE EL API VA A TRABAJAR
const Schema = mongoose.Schema;
const EsquemaHabitacion = new Schema({
    nombre : {
        requred:true,
        type:String
    },
    valorNoche:{
        requred:true,
        type:Number
    },
    descripcion:{
        requred:true,
        type:String
    },
    fotografias:{
        requred:true,
        type:[String]
    },
    numeroMaximoPersonas:{
        requred:true,
        type:Number
    }
});

export const modeloHabitacion = mongoose.model('Habitaciones',EsquemaHabitacion)