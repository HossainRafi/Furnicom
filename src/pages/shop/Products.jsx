import { useState } from "react";
import { products } from "../../utils/products";
import { ProductCard } from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";

export const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"]; // categories array
  const [selectedCategory, setSelectedCategory] = useState("Chair"); // state for selected category
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
    <div>
      <div className="section-container">
        {/* headline */}
        <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>

        {/* category option tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto rounded-md md:p-2 py-5 mb-16">
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
      </div>
    </div>
  );
};
