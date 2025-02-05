import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";
const Home = () => {
    const categories = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      <Categories
      categories={categories}
      ></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
