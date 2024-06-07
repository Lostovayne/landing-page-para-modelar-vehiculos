const ButtonCar = () => {
  return (
    <button className="inline-flex relative justify-center items-center my-10 rounded-full w-24 h-24 focus:outline-none group ">
      <span className="absolute inset-0 border-2 border-green-400 transition-all duration-500 shadow-car rounded-full group-hover:scale-125  "></span>
      <span className="absolute group-hover:scale-125 transition-all  duration-500 inset-0 border-green-400 m-2.5 border rounded-full"></span>
      <span className=" group-hover:text-green-400 transition-colors ">START</span>
    </button>
  );
};
export default ButtonCar;
