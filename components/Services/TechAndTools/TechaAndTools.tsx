import { CommandLineIcon } from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";

function TechaAndTools() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    } else {
      animation.start({ y: -250, opacity: 0, transition: { duration: 0.001 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div className='h-full w-full'>
      <div className="mx-auto mt-24 flex h-full flex-col items-center justify-center gap-6">
        <h1 className="text-gradient animate-title py-4 text-5xl font-semibold">
          Tech and Tools
        </h1>
        <CommandLineIcon className="h-12 w-12 animate-bounce text-blue-600" />
      </div>
      <div
        className="flex h-full w-full flex-1 flex-col items-center gap-12"
        ref={ref}
      >
        <div className="mx-auto mt-10 flex w-4/5 flex-wrap items-center justify-evenly gap-8">
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            alt="html"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            alt="css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            alt="bootstrap"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          />

          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            alt="nodejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            alt="storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            alt="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            alt="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            alt="storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            alt="git"
            height="60"
            width="80"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <motion.svg
            fill={theme === "light" ? "#111827" : "#f1f5f9"}
            animate={animation}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="110px"
            height="90px"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </motion.svg>
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
            alt="storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
          />
          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            alt="storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <motion.svg
            fill={theme === "light" ? "#111827" : "#f1f5f9"}
            animate={animation}
            transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="100px"
            height="80px"
          >
            <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
          </motion.svg>

          <motion.img
            className="h-[80px] w-[100px]"
            animate={animation}
            transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
            alt="storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default TechaAndTools;
