import mongoose from 'mongoose';
//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS CON LOS QUE EL API VA A TRABAJAR
const Schema = mongoose.Schema;
const EsquemaReserva = new Schema({
    idHabitacion:{
        requred:true,
        type:String
    },
    //fechas son AAAA-MM-DD
    fechaEntrada:{
        requred:true,
        type:Date
    },
    fechaSalida:{
        requred:true,
        type:Date
    },
    numeroAdultos:{
        requred:true,
        type:Number
    },
    numeroNinos:{
        requred:true,
        type:Number
    },
    //costoReserva (entrada,salida calculo de fechas)
    costoReserva:{
        requred:false,
        type:Number
    }
});

export const modeloReserva = mongoose.model('Reserva',EsquemaReserva)


