import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { links } from "../../../constants/navbarLinks";
import { useRouter } from "next/router";

function NavbarDesktop() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const router = useRouter();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <div className="z-50 mx-auto flex w-full max-w-[1300px] items-center justify-between py-3">
      {/* Light/Dark Mode toggle */}
      <div
        onClick={toggleTheme}
        className="h-10 w-10 cursor-pointer items-center rounded-xl border border-gray-200 bg-slate-100 p-2 dark:border-gray-600 dark:bg-gray-700"
      >
        {resolvedTheme === "light" ? (
          <img
            src="assets/images/moon.webp"
            alt="moon-image"
            className="h-[25px] w-[25px]"
          />
        ) : (
          <img
            src="assets/images/sun.webp"
            alt="sun-image"
            className="h-[25px] w-[25px]"
          />
        )}
      </div>
      <div className="hidden gap-[51px] lg:flex">
        {/* Navbar item listing */}
        <div className="flex items-center gap-10">
          <div className="hidden h-full w-full items-center justify-evenly md:inline-flex">
            <ul className="flex list-none items-center justify-center transition duration-300 lg:gap-[67px]">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <div
                      className={
                        router.pathname === link.href
                          ? "navbar-link-desktop-active relative"
                          : "navbar-link-desktop relative"
                      }
                    >
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Socials */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="https://github.com/JoaquinFrontendDev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-github-plain navbar-text-hover dark:navbar-text-hover text-[30px] text-[#666] dark:text-[#A7A7A7]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joaquinretoladev/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain navbar-text-hover dark:navbar-text-hover text-[30px] text-[#666] dark:text-[#A7A7A7]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
