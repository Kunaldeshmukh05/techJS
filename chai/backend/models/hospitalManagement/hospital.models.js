import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    addressLine1:{
        type:String,
        required:true,
    },

    addressLine2:{
        type:String,
        required:true,
    },
   city:{
    type:String,
    required:true,
   },

   pinCode:{
       type:String,
       required:true
   },

   specializedIn:{
    enum:[
        'Cardiology',
        'Neurology',
        'Orthopedics',
        'Pediatrics',
        'Radiology',
        'General Surgery'
    ],
    required:true
   }



},{timestamps:true})

const Hospital = mongoose.model('Hospital',hospitalSchema);
