import MenuDesktop from "./Menu-Desktop";
import MenuMobile from "./Menu-Mobile";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-5 md:px-10 md:py-6">
      <MenuMobile className="flex md:hidden" />
      <MenuDesktop className="hidden md:flex" />
    </nav>
  );
};

export default Navbar;
