import { useState } from "react";
import { products } from "../../utils/products";
import { ProductCard } from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const Products = ({ headline }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const categories = ["Samsung", "Oneplus", "Apple", "Huawei"]; // categories array
  const [selectedCategory, setSelectedCategory] = useState("Samsung"); // state for selected category
  const [visibleProducts, setVisibleProducts] = useState(4); // state for visible products

  // filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // handling load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <section className="section-container">
      {/* headline */}
      <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>

      {/* category option tabs */}
      <div className="bg-[#EEEEEE] max-w-fit mx-auto rounded-md md:p-2 py-5 mb-16">
        <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProducts(4); // products shown per load
              }}
              className={`py-1 sm:px-5 px-8 rounded-md ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : " text-secondary"
              } hover:bg-primary hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* products card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* load more button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={loadMoreProducts}
            className="text-primary font-bold flex items-center px-4 py-2 rounded-full hover:text-white  gap-1 hover:bg-secondary transition-colors"
          >
            View More
            <img src={btnIcon} />
          </button>
        </div>
      )}

      {/* theme toggler button */}
      <div className="bottom-28 right-20 z-40 fixed">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-3 rounded-full "
        >
          {isDarkMode ? (
            <BsSunFill className="text-yellow-300 text-xl"/>
          ) : (
            <BsMoonStars className="text-xl"/>
          )}
        </button>
      </div>
    </section>
  );
};
