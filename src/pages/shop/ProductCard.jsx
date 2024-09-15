import { FaCartPlus } from "react-icons/fa";
import { Rating } from "../../components/Rating";
import { getImgUrl } from "../../utils/getImageURL";

export const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="">
      <div className="dark:bg-[#EEEEEE] bg-[#f6f6f6] rounded-t-xl">
        <img
          src={getImgUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-cover px-8 py-2 rounded"
        />
      </div>

      <div
        className={`p-6 dark:bg-[#EEEEEE] bg-[#f6f6f6] shadow-sm rounded-b-xl`}
      >
        <h3 className="font-semibold text-xl mb-4 dark:text-black">
          {product.name}
        </h3>
        <Rating rating={product.rating} />
        <div className="mt-8 flex justify-between items-center">
          <p className="text-secondary dark:text-black font-bold text-lg">
            $ <span className="">{product.price}</span>
          </p>
          <button className="bg-secondary p-2 rounded-full text-white">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
