import AboutItem from "components/About/AboutItem";
import AppLayout from "layouts/AppLayout";
import React from "react";

function About() {
  return (
    <AppLayout>
      <div className="app-container">
        <div className="my-[30px] mb-[80px] flex w-full max-w-[710px] flex-col xl:my-[100px]">
          <div className="flex flex-col">
            <div className="text-[42px] font-extrabold text-[#42446E] dark:text-[#CCC]">
              About me
            </div>
            <p className="mt-[38px] text-lg font-normal text-[#666] dark:text-[#A7A7A7]">
              As a Front End Developer is crucial for me to create amazing user
              experiences and organic interfaces. Using the last available
              technologies and tools. My main goal is building high quality code
              with best practices every single time.
            </p>
          </div>
          <div className="mt-[38px]">
            <div className="text-[42px] font-extrabold text-[#42446E] dark:text-[#CCC]">
              Work Experience
            </div>
            <AboutItem
              company="Wisboo PR LLC"
              jobTime="Feb 2022 - Aug 2023"
              jobType="Full Time"
              modality="Remote"
              position="Frontend Developer - UX/UI Developer"
              key="first-job"
            />
            <AboutItem
              company="Freelance"
              jobTime="Feb 2021 - Now"
              jobType="Full Time"
              modality="Remote"
              position="Frontend Developer"
              key="freelance-job"
            />
          </div>
          <div className="mt-[38px]">
            <div className="text-[42px] font-extrabold text-[#42446E] dark:text-[#CCC]">
              Education
            </div>
            <AboutItem
              company="Self taught"
              jobTime="Jan 2021 - Now"
              jobType="Full Time"
              position="Software Development"
              key="education"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default About;
