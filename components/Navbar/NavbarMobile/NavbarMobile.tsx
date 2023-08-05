import Link from "next/link";
import { mobileLinks } from "../../../constants/navbarLinks";

function NavbarMobile() {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 flex h-[55px] w-full items-center justify-around border-t border-gray-300 bg-white transition-transform duration-[400ms] ease-in-out dark:border-none dark:bg-[#191919] xl:hidden">
        {mobileLinks.map(({ href, Icon, label }, index) => (
          <Link href={href} key={index}>
            <div className="navbar-link flex flex-col items-center">
              <Icon className="h-6 w-6" />
              <span className="text-xs">{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6 lg:hidden">
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
    </>
  );
}

export default NavbarMobile;
