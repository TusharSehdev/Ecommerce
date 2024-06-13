import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import ProductsHome from "./components/Products-home/ProductsHome";
import Banner2 from "./components/Banner/Banner2";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner />
      <ProductsHome />
      <Banner2 />
      <Blogs />
    </div>
  );
}

export default App;
