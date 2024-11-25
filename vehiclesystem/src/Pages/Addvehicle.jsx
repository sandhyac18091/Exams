import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
 const [Serviceno,setServiceNo]=useState('');
 const [Vehicleno,setVehicleNo]=useState('');
 const [Vehicletype,setVehicleType]=useState('car');
 const [Servicedate,setServiceDate]=useState('')
 const [Estimatedcompletion,setEstimatedCompletion]=useState('')
 const [Ownername,setOwnerName]=useState('');
 const [Servicedetails,setServiceDetails]=useState('')
  

 const navigate=useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const newVehicle={
      Serviceno,
      Vehicleno,
      Vehicletype,
      Servicedate,
      Estimatedcompletion,
      Ownername,
      Servicedetails
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVehicle),
      });
      console.log(response);
      
      if (response.ok) {
        navigate('/view-fleet')
         
      }else{
        console.log('failed to add vehicle');
      }
      }catch(error){
        console.log('Error adding vehicle');
        
      }
    };


  return (
    <div className="bg-green-200 w-3/5 mx-auto mt-10 p-8 rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Vehicle</h1>
    <form onSubmit={submitForm} className="space-y-6">
      <label htmlFor="Serviceno" className="font-bold">Service Number:</label>
      <input
        type="text"
        id="Serviceno"
        name="Serviceno"
        placeholder="Enter Service Number"
        value={Serviceno}
        onChange={(e) => setServiceNo(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="" VehiclenoclassName="font-bold">Vehicle Number:</label>
      <input
        type="text"
        id="Vehicleno"
        name="Vehicleno"
        placeholder="Enter Vehicle Number"
        value={Vehicleno}
        onChange={(e) => setVehicleNo(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="Vehicletype" className="font-bold">Vehicle Type:</label>
      <select
        id="Vehicletype"
        name="Vehicletype"
        value={Vehicletype}
        onChange={(e) => setVehicleType(e.target.value)}
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      >
        <option value="" disabled>Select Vehicle Type</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Truck">Truck</option>
      </select>

      <label htmlFor="Servicedate" className="font-bold">Service Date:</label>
      <input
        type="date"
        id="Servicedate"
        name="Servicedate"
        value={Servicedate}
        onChange={(e) => setServiceDate(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="Estimatedcompletion" className="font-bold">Estimated Completion:</label>
      <input
        type="text"
        id="Estimatedcompletion"
        name="Estimatedcompletion"
        placeholder="Enter Estimated Completion Date"
        value={Estimatedcompletion}
        onChange={(e) => setEstimatedCompletion(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="Ownername" className="font-bold">Owner Name:</label>
      <input
        type="text"
        id="Ownername"
        name="Ownername"
        placeholder="Enter Owner Name"
        value={Ownername}
        onChange={(e) => setOwnerName(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <label htmlFor="Servicedetails" className="font-bold">Service Details:</label>
      <input
        type="text"
        id="Servicedetails"
        name="Servicedetails"
        placeholder="Enter Service Details"
        value={Servicedetails}
        onChange={(e) => setServiceDetails(e.target.value)}
        required
        className="w-full border border-gray-300 h-12 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <button
        type="submit"
        className="w-full h-12 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
      >
        Add Vehicle
      </button>
    </form>
  </div>
);
};
export default AddVehicle;
