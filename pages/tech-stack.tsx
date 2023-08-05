import TechaAndTools from "components/TechAndTools/TechaAndTools";
import AppLayout from "layouts/AppLayout";
import React from "react";

function Services() {
  return (
    <AppLayout>
      <div className="app-container">
        <div className="my-[30px] mb-[80px] xl:my-[100px]">
          <h1 className="text-[42px] font-extrabold text-[#42446E] dark:text-[#CCC]">
            My Tech Stack
          </h1>
          <p className="mt-[31px] text-xl text-[#666] dark:text-[#A7A7A7]">
            Technologies I’ve been working with recently
          </p>
        </div>
        <TechaAndTools />
      </div>
    </AppLayout>
  );
}

export default Services;
