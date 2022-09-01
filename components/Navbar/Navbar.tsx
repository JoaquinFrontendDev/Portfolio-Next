import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 mx-auto flex h-[55px] w-full max-w-[1300px] items-center bg-white font-OpenSans shadow-md dark:bg-black dark:text-slate-100 dark:shadow-gray-700">
      <nav className="relative h-full w-full">
        <NavbarDesktop />
        <NavbarMobile isOpen={isOpen} handleOpen={handleOpen} />
      </nav>
    </div>
  );
}

export default Navbar;
