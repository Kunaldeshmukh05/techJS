import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    WorkInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
        required:true
    }
},{timestamps:true})

const Doctor = mongoose.model('Doctor',doctorSchema);
