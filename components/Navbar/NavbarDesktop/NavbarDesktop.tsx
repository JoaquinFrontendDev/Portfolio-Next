import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Moon from "../../../public/assets/images/moon.png";
import Sun from "../../../public/assets/images/sun.png";

function NavbarDesktop() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <>
      <Link href="/">
        <h1 className="absolute left-[20px] top-[50%] hidden -translate-y-[50%] cursor-pointer text-2xl font-semibold dark:text-slate-100 md:inline-flex">
          Sintaxis<span className="font-normal text-blue-700">Dev</span>
        </h1>
      </Link>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="absolute top-[50%] right-[20px] flex -translate-y-[50%] cursor-pointer items-center rounded-xl border border-gray-200 bg-slate-100 p-2 dark:border-gray-600 dark:bg-gray-700"
      >
        <div className="hidden dark:inline-flex">
          <Image src={Sun} alt="sun-image" width={20} height={20} />
        </div>
        <div className="inline-flex dark:hidden">
          <Image src={Moon} alt="moon-image" width={20} height={20} />
        </div>
      </div>
      <div className="hidden h-full w-full items-center justify-evenly md:inline-flex">
        <ul className="flex list-none items-center justify-center gap-10 font-semibold transition duration-300">
          <li>
            <Link href="#home">
              <a className="navbar-link-desktop">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a className="navbar-link-desktop">Services</a>
            </Link>
          </li>
          <li>
            <Link href="#works">
              <a className="navbar-link-desktop">My Work</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a className="navbar-link-desktop">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarDesktop;
