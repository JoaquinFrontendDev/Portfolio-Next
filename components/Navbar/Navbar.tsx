import Moon from "../../public/assets/images/moon.png";
import Sun from "../../public/assets/images/sun.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BoltIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className='h-[55px] max-w-[1300px] w-full mx-auto bg-white dark:bg-black shadow-md dark:shadow-gray-700 dark:text-slate-100 z-50 flex items-center font-OpenSans sticky top-0'>
      <nav className='h-full w-full relative'>
        <Link href='/'>
          <h1 className='absolute left-[20px] top-[50%] -translate-y-[50%] font-semibold text-2xl hidden md:inline-flex cursor-pointer dark:text-slate-100'>
            Sintaxis<span className='font-normal text-blue-700'>Dev</span>
          </h1>
        </Link>
        <div
          className='md:hidden absolute top-[20%] left-6 flex items-center justify-center cursor-pointer p-2 rounded-xl border border-gray-200 bg-slate-100 dark:bg-gray-700 dark:border-gray-600 focus:outline-none'
          onClick={handleOpen}
        >
          <div className={`${isOpen ? "hidden" : "inline-flex"}`}>
            <Bars3Icon className='w-[20px] h-[20px] text-blue-700 dark:text-slate-100 font-semibold' />
          </div>
          <div className={`${isOpen ? "inline-flex" : "hidden"}`}>
            <XMarkIcon className='w-[20px] h-[20px] text-blue-700 dark:text-slate-100 font-semibold' />
          </div>
        </div>
        <div className='hidden md:inline-flex items-center justify-evenly w-full h-full'>
          <ul className='flex justify-center items-center gap-10 transition duration-300 font-semibold list-none'>
            <li>
              <Link href='#home'>
                <a className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='#services'>
                <a className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href='#works'>
                <a className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full">
                  My Work
                </a>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <a className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex flex-col gap-2 justify-start absolute top-[80px] left-0 rounded-tr-2xl rounded-br-2xl bg-white/95 dark:bg-gray-700 border border-gray-300 h-fit text-left transition-transform duration-[400ms] ease-in-out w-fit py-12 pr-12 pl-6 shadow-md ${
            isOpen ? "translate-x-0" : "-translate-x-[100vw]"
          }`}
        >
          <Link href='#home'>
            <a
              onClick={handleOpen}
              className='text-lg text-gray-900 dark:text-slate-100 py-2 px-6 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-left hover:bg-slate-200/70 dark:hover:bg-blue-300/60'
            >
              <div className='flex gap-8 items-center justify-start'>
                <HomeIcon className='w-[25px] h-[25px]' />
                <span>Home</span>
              </div>
            </a>
          </Link>
          <Link href='#services'>
            <a
              onClick={handleOpen}
              className='text-lg text-gray-900 dark:text-slate-100 py-2 px-6 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-left hover:bg-slate-200/70 dark:hover:bg-blue-300/60'
            >
              <div className='flex gap-8 items-center justify-start'>
                <BoltIcon className='w-[25px] h-[25px]' />
                <span>Services</span>
              </div>
            </a>
          </Link>
          <Link href='#works'>
            <a
              onClick={handleOpen}
              className='text-lg text-gray-900 dark:text-slate-100 py-2 px-6 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-left hover:bg-slate-200/70 dark:hover:bg-blue-300/60'
            >
              <div className='flex gap-8 items-center justify-start'>
                <BriefcaseIcon className='w-[25px] h-[25px]' />
                <span>My Work</span>
              </div>
            </a>
          </Link>
          <Link href='#contact'>
            <a
              onClick={handleOpen}
              className='text-lg text-gray-900 dark:text-slate-100 py-2 px-6 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-left hover:bg-slate-200/70 dark:hover:bg-blue-300/60'
            >
              <div className='flex gap-8 items-center justify-start'>
                <EnvelopeIcon className='w-[25px] h-[25px]' />
                <span>Contact</span>
              </div>
            </a>
          </Link>
        </div>
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className='absolute top-[50%] -translate-y-[50%] right-[20px] flex items-center cursor-pointer p-2 rounded-xl border border-gray-200 bg-slate-100 dark:bg-gray-700 dark:border-gray-600'
        >
          <div className='hidden dark:inline-flex'>
            <Image src={Sun} alt='sun-image' width={20} height={20} />
          </div>
          <div className='inline-flex dark:hidden'>
            <Image src={Moon} alt='moon-image' width={20} height={20} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
