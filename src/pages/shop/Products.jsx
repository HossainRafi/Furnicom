import { useState } from "react";
import { products } from "../../utils/products";
import { ProductCard } from "./ProductCard";

export const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"]; // categories

  const [selectedCategory, setSelectedCategory] = useState("Chair"); // state for selected category
  return (
    <div>
      <div className="section-container">
        {/* headlines */}
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* category tab */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto rounded-md md:p-2 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
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
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
