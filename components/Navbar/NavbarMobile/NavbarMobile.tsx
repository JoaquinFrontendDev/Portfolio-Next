import {
  Bars3Icon,
  BoltIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavbarMobileProps {
  isOpen: boolean;
  handleOpen: () => void;
}

function NavbarMobile({ isOpen, handleOpen }: NavbarMobileProps) {
  return (
    <>
      <div
        className="absolute top-[20%] left-6 flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-slate-100 p-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 md:hidden"
        onClick={handleOpen}
      >
        <div className={`${isOpen ? "hidden" : "inline-flex"}`}>
          <Bars3Icon className="h-[20px] w-[20px] font-semibold text-blue-700 dark:text-slate-100" />
        </div>
        <div className={`${isOpen ? "inline-flex" : "hidden"}`}>
          <XMarkIcon className="h-[20px] w-[20px] font-semibold text-blue-700 dark:text-slate-100" />
        </div>
      </div>
      <div
        className={`absolute top-[80px] left-0 flex h-fit w-fit flex-col justify-start gap-2 rounded-tr-2xl rounded-br-2xl border border-gray-300 bg-white/95 py-12 pr-12 pl-6 text-left shadow-md transition-transform duration-[400ms] ease-in-out dark:bg-gray-700 ${
          isOpen ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <Link href="#home">
          <a onClick={handleOpen} className="navbar-link-mobile">
            <div className="flex items-center justify-start gap-8">
              <HomeIcon className="h-[25px] w-[25px]" />
              <span>Home</span>
            </div>
          </a>
        </Link>
        <Link href="#services">
          <a onClick={handleOpen} className="navbar-link-mobile">
            <div className="flex items-center justify-start gap-8">
              <BoltIcon className="h-[25px] w-[25px]" />
              <span>Services</span>
            </div>
          </a>
        </Link>
        <Link href="#works">
          <a onClick={handleOpen} className="navbar-link-mobile">
            <div className="flex items-center justify-start gap-8">
              <BriefcaseIcon className="h-[25px] w-[25px]" />
              <span>My Work</span>
            </div>
          </a>
        </Link>
        <Link href="#contact">
          <a onClick={handleOpen} className="navbar-link-mobile">
            <div className="flex items-center justify-start gap-8">
              <EnvelopeIcon className="h-[25px] w-[25px]" />
              <span>Contact</span>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default NavbarMobile;
