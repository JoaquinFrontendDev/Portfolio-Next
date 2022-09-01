import { ArrowDownIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import ImageSlider from "./ImageSlider/ImageSlider";
import { products, workSubtitles } from "../data.js";
import Image from "next/image";
import ModalOnHover from "./ModalOnHover/ModalOnHover";

function Works() {
  return (
    <div className='max-w-[1300px] mx-auto w-full h-full' id='works'>
      <div className='flex flex-col gap-6 justify-center items-center h-full mt-24 mx-auto'>
        <h1 className='text-5xl py-4 font-semibold text-gradient animate-title'>
          Works
        </h1>
        <div>
          <div></div>
          <div className='leading-11 h-[50px] text-center font-bold overflow-hidden'>
            <ul>
              {workSubtitles.map(({ id, content }) => (
                <li key={id} className={`list-none text-gray-900 dark:text-slate-100 text-[20px] top-0 relative animate-slide after:content-[''] after:absolute after:left-0 after:h-full after:w-full after:bg-slate-100 dark:after:bg-gray-900 after:animate-typewriter`}>
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='hidden md:block w-[680px] h-[380px] p-6 mx-auto lg:w-[1100px] lg:h-[620px] my-10'>
        <ImageSlider />
      </div>
      <div className='flex flex-col gap-12 justify-center items-center md:hidden w-full h-full p-[30px] mt-10'>
        {products.map(({ title, id, description, img, link, github }) => (
          <div
            className='flex w-[414px] sm:w-[450px] h-[210px] sm:h-[255px] flex-col relative'
            key={id}
          >
            <Image
              className='rounded-[10px]'
              src={img}
              alt={title}
              layout='fill'
            />
            <ModalOnHover
              title={title}
              description={description}
              link={link}
              github={github}
              Icon={GlobeAmericasIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
