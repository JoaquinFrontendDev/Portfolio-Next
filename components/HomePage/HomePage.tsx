import { Vector } from "./Vector";

function Home() {
  return (
    <div
      className='min-h-full h-full max-w-[1300px] w-full mx-auto flex flex-wrap xl:flex-nowrap font-OpenSans mt-10'
      id='home'
    >
      <div className='min-w-[350px] w-full flex-1 h-full flex items-center justify-center relative text-center'>
        <div className='p-[30px]'>
          <h2 className='font-light text-[2em] md:text-[3em] text-gray-900 dark:text-slate-100 text-center sm:text-left'>
            Hello there! 👋
          </h2>
          <h1 className='font-semibold text-[2em] md:text-[3em] text-gray-900 dark:text-slate-100 text-center sm:text-left'>
            I am
          </h1>
          <div className='h-[80px] overflow-hidden'>
            <div className='h-full animate-move'>
              <div className='h-[80px] font-semibold text-gradient flex items-center justify-center sm:justify-start'>
                <span className='text-[2em] md:text-[48px] whitespace-nowrap'>
                  Joaquin Retola
                </span>
              </div>
              <div className='h-[80px] font-semibold text-gradient flex items-center justify-center sm:justify-start'>
                <span className='text-[2em] md:text-[48px] whitespace-nowrap'>
                  Frontend Dev
                </span>
              </div>
            </div>
          </div>
          <div className='my-8 text-md text-center sm:text-left text-gray-900 dark:text-slate-100'>
            As a Front End Developer is crucial for me to create amazing user
            experiences and organic interfaces. Using the last available
            technologies and tools. My main goal is building high quality code
            with best practices every single time.
          </div>
          <a href='#contact'>
            <div className='flex items-center justify-center sm:justify-start'>
              <button className='py-4 px-6 outline-none text-xl cursor-pointer btn-gradient text-white font-semibold relative rounded-[10px] overflow-hidden transition duration-300 ease-linear'>
                {`Let's talk`}
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className='right-box'>{Vector}</div>
    </div>
  );
}

export default Home;
