import FoodCard from "@/components/Foodcard";

const GetFood = () => {
  const data = [
    {
      url: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2009/11/kadhi-chawal-recipe.1024x1024-1.jpg?ssl=1",
      text: "description",
      heading: "Kadi chawal",

      Pincode: "123445",
      address: "iiit kota",
      contact_no: "987663235235",
    },
    {
      url: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2009/11/kadhi-chawal-recipe.1024x1024-1.jpg?ssl=1",
      text: "description",
      heading: "Kadi chawal",

      Pincode: "123445",
      address: "iiit kota",
      contact_no: "987663235235",
    },
    {
      url: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2009/11/kadhi-chawal-recipe.1024x1024-1.jpg?ssl=1",
      text: "description",
      heading: "Kadi chawal",

      Pincode: "123445",
      address: "iiit kota",
      contact_no: "987663235235",
    },
  ];

  return (
    <div>
      <div className="container text-center ">
        <div className="flex justify-center align-middle">
          <h1 className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black mt-14">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-6 pb-14">
          {data.map((datas) => {
            return <FoodCard card_detail={datas} key={datas.url} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default GetFood;
