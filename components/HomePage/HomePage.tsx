import { Vector } from "./Vector";

function Home() {
  return (
    <div
      className='h-full app-container flex-row flex-wrap xl:flex-nowrap items-center justify-center 2xl:justify-between my-[100px] gap-20 xl:my-0 xl:gap-0 bg-white dark:bg-[#191919]'
      id='home'
    >
      <div className='font-Poppins xl:max-w-[600px]'>
        <div className='font-extrabold text-[40px] md:text-[50px] tracking-[-1px]'>Hi 👋</div>
        <div className='font-extrabold text-[40px] md:text-[50px] tracking-[-1px]'>My name is</div>
        <div className='font-extrabold text-[40px] md:text-[50px] tracking-[-1px] text-gradient'>Joaquin Retola</div>
        <div className='font-extrabold text-[40px] md:text-[50px] tracking-[-1px]'>I build things for web and mobile</div>
      </div>
      <div className='right-box'><Vector /></div>
    </div>
  );
}

export default Home;

