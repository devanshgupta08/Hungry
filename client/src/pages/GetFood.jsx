import FoodCard from "@/components/Foodcard";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const GetFood = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [radius, setRadius] = useState(20);
  const[data,setData]=useState([]);

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

    // Fetch data when latitude and longitude are available
    fetchData();
  }, [latitude, longitude, radius]); // Add radius to the dependency array

  // Define the fetchData function outside of useEffect
  const fetchData = async () => {
    try {
      if (latitude !== null && longitude !== null) {
        const response = await axios.post('/api/food/getfood', { latitude, longitude,setDistance:radius }, {
          withCredentials: true,
        });
        setData(response.data.data)
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const data = [
  //   {
  //     url: "https://img-global.cpcdn.com/recipes/c639a4699ebae302/680x482cq70/meat-mix-local-food-ingredients-recipe-main-photo.jpg",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Mix Veg + Rice ",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieImhAu4gIyWYrAVE3mRpgdUc8aBfigCGmw&usqp=CAU",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Rajma chawal",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  //   {
  //     url: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2009/11/kadhi-chawal-recipe.1024x1024-1.jpg?ssl=1",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Kadi chawal",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieImhAu4gIyWYrAVE3mRpgdUc8aBfigCGmw&usqp=CAU",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Biryani",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBdK8a--1p-v-94liKGj9aabngTImKBg3lQ&usqp=CAU",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Aloo Sabji",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieImhAu4gIyWYrAVE3mRpgdUc8aBfigCGmw&usqp=CAU",
  //     text: "This food is prepared today and can be used by today. It is good quality tasty food.",
  //     heading: "Sev Tamatar",
  //     Pincode: "325003",
  //     address: "iiit kota",
  //     contact_no: "9876632352",
  //   },
  // ];

  return (
    <div>
      <div className="container text-center ">
        <div className="flex justify-center align-middle">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black mt-14">
            Delicious <span className="text-green-700"> Delights</span>
          </h1>
        </div>
        <p>
          Embark on a Culinary Adventure: Discover and Order the Most Delectable
          Food Experiences Near You! From cozy cafes to upscale restaurants,
          explore a diverse array of flavors and cuisines just around the
          corner. Savor every bite as you uncover hidden gems and indulge in the
          finest culinary creations your neighborhood has to offer!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 pb-14">
          {data.map((item, index) => (
            <FoodCard card_detail={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetFood;
