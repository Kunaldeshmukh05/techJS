import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['M','F','Other'],
        required:true
    }
    ,
    diagnosedWith:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required:true
    },

    admittedIn:{
        type:Date,
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
    

},{timestamps:true})

const Patient = mongoose.model('Patient',PatientSchema);
