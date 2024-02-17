const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen container  flex justify-center items-center">
      <div className="flex flex-wrap-reverse justify-center md:justify-between  w-full ">
        {/* First column */}
        <div className="w-full md:w-1/2 p-4 ">
          <h1 className=" text-4xl md:text-6xl mb-5 font-bold leading-normal">
            Bridging <span className="text-green-600">Plates</span>
          </h1>
          <h1 className=" text-4xl md:text-6xl mb-5 font-bold leading-normal">
            Breaking Chains
          </h1>
          <p className="text-slate-500 mb-6 text-lg w-2/3">
            In a world where food wastage coexists with hunger, we've embarked
            on a mission to create a seamless bridge between abundance and need.
            <br />
            Let's bridge plates, break chains, and nourish lives together with
            ZeroWasteFeast.
          </p>
        </div>

        {/* Second column */}
        <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0">
          {/* Image in the second column */}
          <img
            src="pic1new.png"
            alt="Your Image"
            className="w-full h-auto md:h-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
