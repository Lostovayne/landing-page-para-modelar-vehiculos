const MenuDesktop = () => {
  return (
    <div className="w-full flex justify-between">
      <a href="#">
        <img src="/images/Header/Logo.svg" alt="logo" />
      </a>

      <div>
        <ul className="flex space-x-10">
          <li>
            <a className="hover:text-[#4177DC]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#4177DC]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#4177DC]" href="#">
              Popular
            </a>
          </li>
          <li>
            <a className="hover:text-[#4177DC]" href="#">
              Featured
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesktop;
