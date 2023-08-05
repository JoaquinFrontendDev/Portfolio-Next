import HomePage from "../components/HomePage/HomePage";
import type { NextPage } from "next";
import AppLayout from "layouts/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
};

export default Home;
