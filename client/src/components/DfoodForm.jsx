import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const DfoodForm = () => {

  const [address,setAddress]=useState('');
  const [pincode,setPincode]=useState('');
  const [state,setState]=useState('');
  const [city,setCity]=useState('');
  const [organization,setOrganization]=useState('');
  const [photo,setPhoto]=useState();
  const [description,setDescription]=useState('');

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle button click event
  // const handleButtonClick = () => {
  //   // Re-fetch the geolocation
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //       setError(null); // Clear any previous errors
  //     },
  //     (error) => {
  //       setError(error.message);
  //     }
  //   );
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //    const res =  await axios.post("api/food/getfood",
  //     {
  //       address,pincode,state,city,photo,description,organization,latitude,longitude
  //     }, 
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //     console.log(res);
  //     console.log("sucess in form")
  //   } catch (e) {
  //     console.log(e);
  //     console.log("falide in posting form");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('address', address);
      formDataToSend.append('pincode', pincode);
      formDataToSend.append('state', state);
      formDataToSend.append('city', city);
      formDataToSend.append('organization',organization);
      formDataToSend.append('description', description);
      formDataToSend.append('photo', photo);
      formDataToSend.append('latitude', latitude);
      formDataToSend.append('longitude', longitude);

      const response = await axios.post('/api/food/postfood', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },{
        withCredentials: true,
      });
      console.log(photo);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <form onSubmit={handleSubmit} action="POST">
      <div className='flex justify-center items-center h-[70vh] w-3/4'>
      <div className='bg-slate-800 border border-slate-200 rounded-md p-8 pt-4 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md '>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Donate Food</h1>
          <div className='relative my-4'>
            <input
              type="text"
              name="adr"
              onChange={(e)=>{setAddress(e.target.value)}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Address" 
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="number"
              name="pinc"            
              onChange={(e)=>{setPincode(e.target.value)}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Pincode"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="stat"              
              onChange={(e)=>{setState(e.target.value)}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="State"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="cty"
              onChange={(e)=>{setCity(e.target.value)}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="City"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="org"
              onChange={(e)=>{setOrganization(e.target.value)}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Organization (if applicable)"
            />
          </div>
          
          <div className='relative my-7'>
            <input
              type="file"
              name="pic"
              onChange={(e)=>{setPhoto(e.target.files[0])}}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder=" "
            />
            <label htmlFor="photo" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Upload Photo</label>
          </div>
          
          <div className='relative my-8'>
            <textarea
              className='relative block w-full py-3.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 resize-none peer'
              rows="4"
              name="desc"
              onChange={(e)=>{setDescription(e.target.value)}}
              placeholder="Description"
            ></textarea>
            <label htmlFor="description" className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Description</label>
          </div>

          <div className='relative my-4'>
            <input
              type="text"
              name="lat"
              value={latitude}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="latitude"
            />
          </div>
          <div className='relative my-4'>
            <input
              type="text"
              name="long"
              value={longitude}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="longitude"
            />
          </div>
          
          <div className="flex justify-between">
            <button type="button" className='w-1/2 ml-2 mr-4 text-lg rounded-full bg-white text-emerald-800 hover:bg-red-600 hover:text-white py-3 transition-colors duration-300'><Link to='/'>Cancel</Link></button>
            <button type="submit" onSubmit={handleSubmit} className='w-1/2 mr-2 text-lg rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-3 transition-colors duration-300'>Donate Food</button>
          </div>

        <span className='mt-4 block text-center'><Link to='/RFood' className='text-white-500 hover:text-blue-500'>Request Food</Link></span>
      </div>
    </div>
    </form>
  );
};

export default DfoodForm;
