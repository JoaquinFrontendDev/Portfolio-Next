import AppLayout from "layouts/AppLayout";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <AppLayout>
      <div className="app-container h-full items-center justify-start xl:justify-center font-DMSans text-center xl:text-start mt-[30px]">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="text-[35px] xl:text-[50px] font-bold text-[#1E0E62] dark:text-[#CCC]">
            For any questions please mail me:
          </div>
          <div className="text-gradient text-[35px] xl:text-[50px] font-semibold break-all">
            joaquin.retola@gmail.com
          </div>
        </div>
        <div className="relative mt-14 h-[300px] lg:h-[400px] w-[300px] lg:w-[400px]">
          <Image
            src={require("../public/assets/images/mail-me-no-bg.png")}
            layout="fill"
            alt="mail-me-image"
            className="mt-20"
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default Contact;
