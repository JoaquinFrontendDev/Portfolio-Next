import React from 'react'

interface ModalOnHoverProps {
  title: string,
  description: string,
  github: string,
  link: string
}

function ModalOnHover({title, description, github, link, Icon}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-gray-800/90 flex justify-between items-center flex-col rounded-[10px] transition duration-500 opacity-0 cursor-pointer hover:opacity-100">
      <div className="flex flex-col w-3/5 mx-auto mt-2 sm:mt-8 lg:mt-24 gap-8 lg:gap-12 items-center justify-center text-white relative">
        <h3 className="text-lg md:text-2xl lg:text-4xl">{title}</h3>
        <p className="text-[8px] md:text-xs lg:text-lg">{description}</p>
      </div>
      <div className="absolute left-[50%] -translate-x-[50%] bottom-[30px] md:bottom-[60px] lg:bottom-[100px] flex gap-36 text-4xl mt-4">
        <a
          href={github}
          className=" text-[30px] lg:text-[50px] flex justify-end hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <i className="devicon-github-original h-full w-full text-blue-700"></i>
        </a>
        <a
          href={link}
          className="lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] flex justify-end hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="h-full w-full text-blue-700" />
        </a>
      </div>
    </div>
  );
}

export default ModalOnHover
