import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/HomePage/HomePage";
import type { NextPage } from "next";
import Services from "components/Services/Services";
import Works from "components/Works/Works";
import Contact from "components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <div className='bg-slate-100 dark:bg-gray-900'>
      <Navbar />
      <HomePage />
      <Services />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
