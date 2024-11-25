import { Router } from "express";
import mongoose from "mongoose";



const vehicleroute=Router();
const secretkey=process.env.SecretKey;


 const vehicleSchema=new mongoose.Schema({
  serviceNo:String,
  vehicleNo:String,
  vehicleType:String,
  serviceDate:String,
  estimatedCompletion:String,
  ownerName:String,
  serviceDetails:String
});

const addvehicle=mongoose.model('vehicleDetails',vehicleSchema);

mongoose.connect('mongodb://localhost:27017/vehiclesystem')

vehicleroute.post('/add',async(req,res)=>{
  try{
    const{Serviceno,Vehicleno,Vehicletype,Servicedate,Estimatedcompletion,Ownername,Servicedetails}=req.body
    const existinguser=await addvehicle.findOne({serviceNo:Serviceno});
    if(existinguser){
      res.status(403).json({message:"Vehicle already added"})
      console.log("Vehicle already added");
      
    }else{
      const newVehicle=new addvehicle({
        serviceNo:Serviceno,
        vehicleNo:Vehicleno,
        vehicleType:Vehicletype,
        serviceDate:Servicedate,
        estimatedCompletion:Estimatedcompletion,
        ownerName:Ownername,
        serviceDetails:Servicedetails,

      });
      await newVehicle.save();
      res.status(200).json({message:"Vehicle Added Successfully"})
      console.log("Vehicle added successfully",newVehicle);

      
    }
  }catch(error){
    console.log('error occuring while adding vehicle:',error);
    res.status(500).json({message:"Internal server error"})
    
  }
});
vehicleroute.get('/getvehicle',async(req,res)=>{
  try{
    const vehicleDetails=await addvehicle.find()
    console.log();

    console.log(vehicleDetails);
    res.status(200).json(vehicleDetails)
    
    
  }catch(error){
    console.error(error);
    
  }
})


export{vehicleroute}