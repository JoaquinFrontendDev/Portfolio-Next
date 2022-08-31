import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ServiceCard({ Icon, title, description }) {
  return (
    <div className='max-w-sm bg-white border border-gray-200 shadow-md rounded'>
      <div className='relative h-[320px] rounded group bg-white transition duration:200 ease hover:z-[1] hover:shadow-2xl hover:scale-105 dark:bg-slate-100'>
        <div className='relative p-8 space-y-8 flex flex-col justify-between h-full'>
          <div>
            <Icon className='w-12 h-12 mb-4 text-gray-900 group-hover:text-blue-700' />
            <div className='space-y-2'>
              <h5 className='text-xl text-gray-900 font-medium transition group-hover:text-blue-700'>
                {title}
              </h5>
              <p className='text-sm text-gray-600'>{description}</p>
            </div>
          </div>
          <a
            href='#'
            className='flex justify-between items-center group-hover:text-blue-700'
          >
            <span className='text-sm text-gray-900 group-hover:text-blue-700'>
              Read more
            </span>
            <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
              <ArrowRightIcon className='w-6 h-6' />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
