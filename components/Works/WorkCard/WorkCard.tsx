import React from "react";
import { products } from "../../../constants/productsData";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

const WorkCard = ({ id, img, title, description, stack, link, github }) => {
  if (!products.length) {
    return <></>;
  }

  return (
    <div className="flex h-full max-h-[570px] w-full max-w-[375px] flex-col font-Poppins md:max-h-[350px] md:max-w-full md:flex-row lg:max-h-[570px] lg:max-w-[375px] lg:flex-col justify-center">
      <img
        src={img}
        alt={`project-img-${id}`}
        className="h-[260px] w-full rounded-t-[20px] object-cover object-center md:h-[350px] md:min-w-[350px] md:rounded-l-[20px] md:rounded-r-[0px] lg:h-[255px] lg:w-full lg:rounded-t-[20px] lg:rounded-bl-[0px]"
      />
      <div className="relative flex flex-col rounded-b-[20px] bg-[#FFFFFF] p-[30px] shadow-card dark:bg-[#363636] md:rounded-l-[0px] md:rounded-r-[20px] lg:rounded-b-[20px] lg:rounded-tr-[0px]">
        <div className="absolute right-2 top-2 rounded-lg bg-black px-3 py-2 font-mono text-sm font-extrabold text-white shadow-card dark:bg-white dark:text-black">{`0${id.toString()}`}</div>
        <div className="text-[24px] font-medium dark:text-[#CCC]">{title}</div>
        <div className="mt-4 line-clamp-5 h-fit text-base font-light text-[#666] dark:text-[#CCC] md:line-clamp-6 lg:line-clamp-5">
          {description}
        </div>
        <div className="pt-3 text-base font-normal text-[#42446E] dark:text-[#CCC] md:mt-auto lg:mt-0 flex items-center gap-1">
          <span className=' whitespace-nowrap'>Tech Stack:</span>
          <span className="text-sm font-light text-[#42446E] dark:text-[#CCC] whitespace-nowrap text-ellipsis overflow-hidden">
            {stack}
          </span>
        </div>
        <div
          className={`mt-[24px] flex w-full items-center ${
            link ? "justify-between" : "justify-end"
          }`}
        >
          {link && (
            <div className="flex gap-[10px]">
              <LinkIcon className="h-5 w-5" />
              <Link href={link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gradient cursor-pointer underline underline-offset-4 hover:no-underline"
                >
                  Preview link
                </a>
              </Link>
            </div>
          )}
          <div className="flex gap-[10px]">
            <i className="devicon-github-plain text-[20px] text-black dark:text-[#A7A7A7]"></i>
            <Link href={github}>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:text-gradient cursor-pointer underline underline-offset-4 hover:no-underline"
              >
                View Code
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
