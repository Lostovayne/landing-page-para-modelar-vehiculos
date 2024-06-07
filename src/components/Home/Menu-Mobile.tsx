import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

const MenuMobile = ({ className = "" }: Props) => {
  return (
    <div className={cn("w-full flex justify-between items-center", className)}>
      <a href="#" className="flex items-center">
        <img src="/images/Header/Logo.svg" alt="logo" />
      </a>
      <button>
        <img src="/images/Header/menu" alt="icono del menu" />
      </button>
    </div>
  );
};

export default MenuMobile;
