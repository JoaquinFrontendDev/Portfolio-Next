import ServiceCard from "./ServiceCard";
import { services } from "../data";
import {
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  LifebuoyIcon,
  FireIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import TechaAndTools from "./TechAndTools/TechaAndTools";

function Services() {
  return (
    <div
      className="mx-auto flex h-full w-full max-w-[1300px] flex-1 flex-col justify-around"
      id="services"
    >
      <div className="mx-auto mt-24 flex h-full flex-col items-center justify-center gap-6">
        <h1 className="animate-title bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text py-4 text-5xl font-semibold text-transparent">
          Services
        </h1>
        <BoltIcon className="h-12 w-12 animate-bounce text-blue-600" />
      </div>
      <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-10 p-[30px]">
        <ServiceCard
          key={services[0].id}
          title={services[0].title}
          description={services[0].description}
          Icon={ComputerDesktopIcon}
        />
        <ServiceCard
          key={services[1].id}
          title={services[1].title}
          description={services[1].description}
          Icon={CodeBracketSquareIcon}
        />
        <ServiceCard
          key={services[2].id}
          title={services[2].title}
          description={services[2].description}
          Icon={DevicePhoneMobileIcon}
        />
        <ServiceCard
          key={services[3].id}
          title={services[3].title}
          description={services[3].description}
          Icon={UserGroupIcon}
        />
        <ServiceCard
          key={services[4].id}
          title={services[4].title}
          description={services[4].description}
          Icon={LifebuoyIcon}
        />
        <ServiceCard
          key={services[5].id}
          title={services[5].title}
          description={services[5].description}
          Icon={FireIcon}
        />
        <TechaAndTools />
      </div>
    </div>
  );
}

export default Services;
