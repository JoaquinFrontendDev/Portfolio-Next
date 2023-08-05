import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface AboutItemProps {
  position?: string;
  jobType?: string;
  company?: string;
  modality?: string;
  jobTime?: string;
}

function AboutItem({
  position,
  jobType,
  company,
  modality,
  jobTime,
}: AboutItemProps) {
  return (
    <div className="border-b border-[#EBEAED] pb-[23px]">
      <div className="mt-[38px]">
        <div className="flex w-full items-center justify-between">
          <div className="text-lg font-normal text-[#666] dark:text-[#A7A7A7]">{position}</div>
          <div className="flex min-w-[84px] items-center justify-center rounded-full bg-[#D7FFE0] py-1 text-xs font-medium text-[#018C0F] self-start">
            {jobType}
          </div>
        </div>
        <div className="mt-2 flex w-full xl:items-center xl:justify-between xl:flex-row xl:gap-0 flex-col gap-2 items-start">
          <div className="flex items-center">
            <BuildingOfficeIcon className="h-4 w-4 text-[#A7A7A7]" />
            <p className="ml-2 text-xs font-medium tracking-[1px] text-[#A7A7A7]">
              {company}
            </p>
          </div>
          {modality && (
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 text-[#A7A7A7]" />
              <p className="ml-2 text-xs font-medium tracking-[1px] text-[#A7A7A7]">
                {modality}
              </p>
            </div>
          )}
          <div className="flex items-center">
            <CalendarDaysIcon className="h-4 w-4 text-[#A7A7A7]" />
            <p className="ml-2 text-xs font-medium tracking-[1px] text-[#A7A7A7]">
              {jobTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutItem;
