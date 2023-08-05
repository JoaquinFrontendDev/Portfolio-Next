import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xl:pt-[30px] flex w-full items-center">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}

export default Navbar;
