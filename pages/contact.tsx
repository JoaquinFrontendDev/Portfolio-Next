import AppLayout from "layouts/AppLayout";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <AppLayout>
      <div className="app-container mt-[30px] h-full items-center justify-start text-center font-DMSans xl:justify-center xl:text-start">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="text-[35px] font-bold text-[#1E0E62] dark:text-[#CCC] xl:text-[50px]">
            For any questions please mail me:
          </div>
          <div className="text-gradient break-all text-[35px] font-semibold xl:text-[50px] select-text selection:text-green-400">
            joaquin.retola@gmail.com
          </div>
        </div>
        <div className="relative mt-14 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]">
          <Image
            src={require("../public/assets/images/mail-me-no-bg.webp")}
            layout="fill"
            alt="mail-me-image"
            className="mt-20"
            draggable={false}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default Contact;
