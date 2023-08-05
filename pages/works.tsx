import AppLayout from "layouts/AppLayout";
import React from "react";
import { products } from "../constants/productsData";
import WorkCard from "components/Works/WorkCard/WorkCard";

function Works() {
  return (
    <AppLayout>
      <div className="app-container my-[30px] mb-[80px] items-start justify-center xl:my-[100px]">
        <h1 className="text-[42px] font-extrabold text-[#42446E] dark:text-[#CCC]">
          Projects
        </h1>
        <p className="mt-[31px] text-xl font-normal text-[#666] dark:text-[#A7A7A7]">
          {`Things I've built so far`}
        </p>
        <div className="mt-[40px] flex w-full flex-wrap items-center justify-center gap-[45px]">
          {products.map(
            ({ id, title, description, img, link, github, stack }) => (
              <WorkCard
                key={id}
                id={id}
                title={title}
                description={description}
                img={img}
                link={link}
                github={github}
                stack={stack}
              />
            )
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default Works;
