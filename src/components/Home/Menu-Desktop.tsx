import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

const MenuDesktop = ({ className = "" }: Props) => {
  return (
    <div className={cn("w-full flex justify-between", className)}>
      <a href="#">
        <img src="/images/Header/Logo.svg" alt="logo" className="w-24" width={100} height={100}  />
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
