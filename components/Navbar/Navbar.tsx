import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const {theme, setTheme} = useTheme()
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className='h-[55px] max-w-[1300px] w-full mx-auto bg-white dark:bg-black shadow-md dark:shadow-gray-700 dark:text-slate-100 z-50 flex items-center font-OpenSans sticky top-0'>
      <nav className='h-full w-full relative'>
        <Link href='/'>
          <h1 className='absolute left-[20px] top-[50%] -translate-y-[50%] font-semibold text-2xl hidden md:inline-flex cursor-pointer dark:text-slate-100'>
            Sintaxis<span className='font-normal text-blue-700'>Dev</span>
          </h1>
        </Link>
        <button
          className='md:hidden absolute top-[20%] left-6 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none'
          onClick={handleOpen}
        >
          <div
            className={`w-8 h-1 ${
              isOpen ? "bg-white rotate-45" : "bg-gray-900"
            } rounded-[10px] transition duration-300 ease-linear relative origin-[1px] dark:bg-slate-100`}
          ></div>
          <div
            className={`w-8 h-1 ${
              isOpen ? "bg-white opacity-0 translate-x-5" : "bg-gray-900"
            } rounded-[10px] relative origin-[1px] dark:bg-slate-100`}
          ></div>
          <div
            className={`w-8 h-1 ${
              isOpen ? "bg-white -rotate-45" : "bg-gray-900"
            } rounded-[10px] transition duration-300 ease-linear relative origin-[1px]
             dark:bg-slate-100`}
          ></div>
        </button>
        <div className='hidden md:inline-flex items-center justify-evenly w-full h-full'>
          <ul className='flex justify-center items-center gap-10 transition duration-300 font-semibold list-none'>
            <li>
              <a
                href='#home'
                className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#services'
                className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#works'
                className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className="no-underline text-base px-2 py-3 rounded-[10px] relative after:content-[''] after:absolute after:bg-blue-700 after:h-[3px] after:w-0 after:left-0 after:bottom-[6px] after:transition-hover after:duration-300 after:ease-in-out after:hover:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`flex flex-col justify-center absolute top-0 left-0 bg-blue-700 h-[55vh] text-left p-8 transition-transform duration-300 ease-in-out shadow-md w-full ${
            isOpen ? "translate-y-0" : "-translate-y-[100vh]"
          }`}
        >
          <a
            href='#home'
            onClick={handleOpen}
            className='text-xl text-white py-8 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-center hover:bg-gray-700'
          >
            <span role='img' className='mr-3 self-center' aria-label='home'>
              🏠
            </span>
            Home
          </a>
          <a
            href='#services'
            onClick={handleOpen}
            className='text-xl text-white py-8 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-center hover:bg-gray-700'
          >
            <span role='img' className='mr-3 self-center' aria-label='Services'>
              💻
            </span>
            Services
          </a>
          <a
            href='#work'
            onClick={handleOpen}
            className='text-xl text-white py-8 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-center hover:bg-gray-700'
          >
            <span role='img' className='mr-3 self-center' aria-label='my work'>
              💼
            </span>
            My Work
          </a>
          <a
            href='#contact'
            onClick={handleOpen}
            className='text-xl text-white py-8 rounded-xl text-semibold text-decoration-none no-underline transition-colors text-center hover:bg-gray-700'
          >
            <span role='img' className='mr-3 self-center' aria-label='contact'>
              ✉️
            </span>
            Contact
          </a>
        </div>
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className='w-[60px] h-[30px] bg-white dark:bg-black rounded-[20px] border border-gray-400 dark:border-white absolute top-[50%] -translate-y-[50%] right-[20px] flex items-center justify-around cursor-pointer'
        >
          <Image
            src='/assets/images/sun.png'
            alt='sun'
            width={20}
            height={20}
          />
          <Image
            src='/assets/images/moon.png'
            alt='moon'
            width={20}
            height={20}
          />
          <div
            className={`w-[30px] h-[30px] rounded-full bg-gray-400 dark:bg-slate-100 absolute cursor-pointer transition ease-in-out duration-300 ${
              theme === "light" ? "left-[30px]" : "left-0"
            }`}
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
