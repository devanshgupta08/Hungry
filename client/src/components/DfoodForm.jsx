// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const DfoodForm = () => {
//   const [formData, setFormData] = useState({
//     address: '',
//     pincode: '',
//     state: '',
//     city: '',
//     organization: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/food/postfood', formData,{
//         withCredentials: true,
//       });
//       console.log(response.data); // Handle response as needed
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='flex justify-center items-center h-[70vh] w-3/4'>
//       <div className='bg-slate-800 border border-slate-200 rounded-md p-8 pt-4 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md '>
//         <h1 className='text-4xl text-white font-bold text-center mb-6'>Donate Food</h1>
//         <form onSubmit={handleSubmit}>
//           <div className='relative my-4'>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
//               placeholder="Address"
//             />
//           </div>
//           <div className='relative my-4'>
//             <input type="number" className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer' placeholder=""/>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Pincode</label>
//           </div>

//           <div className='relative my-4'>
//             <input type="text" className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer' placeholder=""/>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>State</label>

//           </div>

//           <div className='relative my-4'>
//             <input type="text" className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer' placeholder=""/>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>City</label>

//           </div>

//           <div className='relative my-4'>
//             <input type="text" className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer' placeholder=""/>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Organization (if applicable)</label>

//           </div>

//           <div className='relative my-7'>
//             <input type="file" className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer' placeholder=" " name="photo" id="photo"/>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Upload Photo</label>

//           </div>

//           <div className='relative my-8'>
//             <textarea className='relative block w-full py-3.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 resize-none peer' rows="4" placeholder=""></textarea>
//             <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Description</label>

//           </div>

//           <div className="flex justify-between">
//             <button type="button" className='w-1/2 ml-2 mr-4 text-lg rounded-full bg-white text-emerald-800 hover:bg-red-600 hover:text-white py-3 transition-colors duration-300'><Link to='/'>Cancel</Link></button>
//             <button type="submit" className='w-1/2 mr-2 text-lg rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-3 transition-colors duration-300'>Donate Food</button>
//           </div>
//         </form>

//         <span className='mt-4 block text-center'><Link to='/RFood' className='text-white-500 hover:text-blue-500'>Request Food</Link></span>
//       </div>
//     </div>
//   );
// };

// export default DfoodForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DfoodForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    pincode: '',
    state: '',
    city: '',
    organization: '',
    description: '',
    photo: null // added for file upload
  });

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('address', formData.address);
      formDataToSend.append('pincode', formData.pincode);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('organization', formData.organization);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('photo', formData.photo); // append photo to FormData

      const response = await axios.post('/api/food/postfood', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },{
        withCredentials: true,
      });
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-[70vh] w-3/4'>
      <div className='bg-slate-800 border border-slate-200 rounded-md p-8 pt-4 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md '>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Donate Food</h1>
        <form onSubmit={handleSubmit}>
          <div className='relative my-4'>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Address"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Pincode"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="State"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="City"
            />
          </div>
          
          <div className='relative my-4'>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder="Organization (if applicable)"
            />
          </div>
          
          <div className='relative my-7'>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className='block w-full py-2.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer'
              placeholder=" "
            />
            <label htmlFor="photo" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Upload Photo</label>
          </div>
          
          <div className='relative my-8'>
            <textarea
              className='relative block w-full py-3.5 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 resize-none peer'
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
            <label htmlFor="description" className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3   peer-focus:scale:75 peer-focus:-translate-y-6'>Description</label>
          </div>
          
          <div className="flex justify-between">
            <button type="button" className='w-1/2 ml-2 mr-4 text-lg rounded-full bg-white text-emerald-800 hover:bg-red-600 hover:text-white py-3 transition-colors duration-300'><Link to='/'>Cancel</Link></button>
            <button type="submit" className='w-1/2 mr-2 text-lg rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-3 transition-colors duration-300'>Donate Food</button>
          </div>
        </form>

        <span className='mt-4 block text-center'><Link to='/RFood' className='text-white-500 hover:text-blue-500'>Request Food</Link></span>
      </div>
    </div>
  );
};

export default DfoodForm;
