import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-screen max-w-screen-xl mx-auto flex flex-col bg-[#0A0A0B] text-white items-center">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold">Choose The Best Car</h1>
        <h2 className="text-2xl mt-5">Porsche Mission E</h2>
        <span className="flex mt-3">
          <img src="/images/Header/rayo.svg" alt="rayo" /> Electric car
        </span>
        <img
          src="/images/Header/headerCar.svg"
          className="mt-10"
          alt="imagen de automovil"
        />
        {/* detalles */}
        <div className="flex gap-10 mt-10">
          {/* Temperature */}
          <div className="flex flex-col items-center">
            <img src="/images/Header/icon-1.svg" className="mb-3" alt="" />
            <span className="text-3xl">24°</span>
            <span>TEMPERATURE</span>
          </div>
          {/* Mileage */}
          <div className="flex flex-col items-center">
            <img src="/images/Header/icon-2.svg" className="mb-3" alt="" />
            <span className="text-3xl">873</span>
            <span>MILEAGE</span>
          </div>
          {/* Battery */}
          <div className="flex flex-col items-center">
            <img src="/images/Header/icon-3.svg" className="mb-3" alt="" />
            <span className="text-3xl">94%</span>
            <span>BATTERY</span>
          </div>
        </div>
        {/* boton start */}
        <button className="my-10 relative inline-flex items-center justify-center w-24 h-24 rounded-full  focus:outline-none">
          <span className="absolute inset-0 rounded-full border-2 border-green-400"></span>
          <span className="absolute inset-0 m-2.5 rounded-full border border-green-400"></span>
          <span>START</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
