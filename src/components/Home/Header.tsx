import { Bubble } from "../../common";
import ButtonCar from "./Button-Car";
import DetailsCar from "./Details-Car";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <header className="relative flex flex-col items-center mx-auto max-w-screen-2xl h-screen text-white">
      <Bubble className="-top-10 -left-20 size-96" />
      <Navbar />
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className="font-bold text-4xl">Choose The Best Car</h1>
        <h2 className="mt-5 text-2xl">Porsche Mission E</h2>
        <span className="flex gap-1 mt-3">
          <img src="/images/Header/rayo.svg" alt="rayo electrico" />
          <span>Electric car</span>
        </span>
        <img
          src="/images/Header/headerCar.svg"
          className="my-10"
          alt="imagen de automovil"
          width={500}
          height={500}
        />
        <DetailsCar />
        <ButtonCar />
      </div>
      <Bubble className="-right-20 -bottom-10 size-96" />
    </header>
  );
};
