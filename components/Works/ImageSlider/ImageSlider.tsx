import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { products } from "../../data";
import ModalOnHover from "../ModalOnHover/ModalOnHover";

const ImageSlider = () => {
  return (
    <div className='w-full h-full rounded-[10px]'>
      <Carousel slideInterval={10000} slide={true} className='h-full w-full'>
        {products.map(({ id, img, title, description, link, github }) => (
          <div className='w-full h-full relative' key={id}>
            <Image alt={title} src={img} layout='fill' />
            <ModalOnHover
              title={title}
              description={description}
              link={link}
              github={github}
              Icon={GlobeAmericasIcon}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
