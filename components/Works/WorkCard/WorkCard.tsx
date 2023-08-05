import React from "react";
import { products } from "../../../constants/productsData";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

const WorkCard = ({ id, img, title, description, stack, link, github }) => {
  if (!products.length) {
    return <></>;
  }

  return (
    <div className="flex h-full max-h-[570px] w-full max-w-[375px] flex-col font-Poppins">
      <Image
        src={img}
        alt={`project-img-${id}`}
        width={"100%"}
        height={260}
        objectFit="cover"
        objectPosition="center"
        unoptimized={true}
        className="rounded-t-[20px]"
      />
      <div className="relative flex flex-col rounded-b-[20px] bg-[#FFFFFF] p-[30px] shadow-card dark:bg-[#363636]">
        <div className="absolute right-2 top-2 rounded-lg bg-black px-3 py-2 font-mono text-sm font-extrabold text-white shadow-card dark:bg-white dark:text-black">{`0${id.toString()}`}</div>
        <div className="text-[24px] font-medium dark:text-[#CCC]">{title}</div>
        <div className="mt-4 line-clamp-5 h-full max-h-[130px] text-base font-light text-[#666] dark:text-[#CCC]">
          {description}
        </div>
        <div className="mt-3 text-base font-normal text-[#42446E] dark:text-[#CCC]">
          Tech Stack:{" "}
          <span className="text-sm font-light text-[#42446E] dark:text-[#CCC]">
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
