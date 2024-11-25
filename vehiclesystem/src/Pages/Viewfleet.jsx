import React, { useEffect,useState } from 'react'

function Viewfleet() {
  const [fleetdata,setFleetdata]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchFleetdata=async()=>{
      try{
        const response=await fetch('http://127.0.0.1:5000/getvehicle',{
          method:"GET",
          headers:{
            'Content-Type':'application/json'
          },
        });
        if(response.ok){
          const data=await response.json();
          console.log(data);

          setFleetdata(data);
          
        }else{
          const errorData=await response.json();
          setError(errorData.message || 'Failed to fetch fleetdata');

        }
      }catch(err){
        console.error('Error fetching fleetdata:',err);
        setError('An error occured while fetching fleetdata');

        
      }finally{
        setLoading(false);
      }
    };
    fetchFleetdata()
  } ,[]);
  if(loading) return <div className='text-center text-gray-700 mt-10'>Loading...</div>
  if(error) return <div className='text-center text-red-500 mt-10'>{error}</div>
  return (

    <div className="bg-gray-100 min-h-screen p-8">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Fleet Details</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-200 px-4 py-2">Service No</th>
              <th className="border border-gray-200 px-4 py-2">Vehicle No</th>
              <th className="border border-gray-200 px-4 py-2">Vehicle Type</th>
              <th className="border border-gray-200 px-4 py-2">Service Date</th>
              <th className="border border-gray-200 px-4 py-2">Estimated Time</th>
              <th className="border border-gray-200 px-4 py-2">Owner Name</th>
              <th className="border border-gray-200 px-4 py-2">Service Details</th>
            </tr>
          </thead>
          <tbody>
            {fleetdata.map((vehicle, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
              >
                <td className="border border-gray-200 px-4 py-2">{vehicle.serviceNo}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.vehicleNo}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.vehicleType}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.serviceDate}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.estimatedTime}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.ownerName}</td>
                <td className="border border-gray-200 px-4 py-2">{vehicle.serviceDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
}


export default Viewfleet