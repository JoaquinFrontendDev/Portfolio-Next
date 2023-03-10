import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ContactSocials() {
  return (
    <div className='flex flex-1 h-full items-center flex-col relative mb-10'>
      <h1 className='text-5xl py-4 font-semibold text-gradient animate-title mb-16'>
        Contact Me
      </h1>
      <p className='text-center px-12 text-lg mb-12 text-gray-900 dark:text-slate-100'>
        <span className='text-blue-700 font-semibold italic mr-2'>{`What's your idea?`}</span>
        {`Tell me about that project that it's hovering
        in your head`}
      </p>
      <div className='grid grid-cols-2 gap-8'>
        <Link href='https://github.com/JoaquinFrontendDev'>
          <button className='w-[180px] h-[35px] relative bg-[#333] mt-2 rounded-full text-slate-100 focus:outline-none hover:bg-[#222]'>
            <div className='flex items-center justify-between px-8'>
              <i className='devicon-github-original pr-4 border-r-2'></i>
              <span className='text-lg font-semibold tracking-wide'>
                Github
              </span>
            </div>
          </button>
        </Link>
        <Link href='https://www.linkedin.com/in/joaquin-retola-noya-702bb9216/'>
          <button className='w-[180px] h-[35px] relative bg-[#0e76a8] mt-2 rounded-full text-slate-100 focus:outline-none hover:bg-[#0b5b80]'>
            <div className='flex items-center justify-between px-8'>
              <i className='devicon-linkedin-plain pr-4 border-r-2'></i>
              <span className='text-lg font-semibold tracking-wide'>
                LinkedIn
              </span>
            </div>
          </button>
        </Link>
        <Link href='https://twitter.com/JoacoRetola'>
          <button className='w-[180px] h-[35px] relative bg-[#00acee] mt-2 rounded-full text-slate-100 focus:outline-none hover:bg-[#008dc5]'>
            <div className='flex items-center justify-between pr-8 pl-[29px]'>
              <i className='devicon-twitter-plain pr-4 border-r-2'></i>
              <span className='text-lg font-semibold tracking-wide'>
                Twitter
              </span>
            </div>
          </button>
        </Link>
        <Link
          href={`https://mail.google.com/mail/?view=cm&source=mailto&to=joaquin.retola@gmail.com`}
        >
          <button className='w-[180px] h-[35px] relative bg-[#DB4437] mt-2 rounded-full text-slate-100 focus:outline-none hover:bg-[#ac362c]'>
            <div className='flex items-center justify-between px-8'>
              <i className='devicon-google-plain pr-4 border-r-2'></i>
              <span className='text-lg font-semibold tracking-wide'>Gmail</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactSocials;
