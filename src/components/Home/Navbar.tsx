import MenuDesktop from "./Menu-Desktop";
import MenuMobile from "./Menu-Mobile";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-5 md:px-10 md:py-6">
      <div className="block md:hidden">
        <MenuMobile />
      </div>

      <div className="hidden md:block">
        <MenuDesktop />
      </div>
    </nav>
  );
};

export default Navbar;
