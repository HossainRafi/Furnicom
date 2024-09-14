import { Rating } from "../../components/Rating";
import { getImgUrl } from "../../utils/getImageURL";

export const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="">
      <div className="bg-[#FAFAFA]">
        <img
          src={getImgUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-cover px-8 py-2 rounded"
        />
      </div>

      <div className={`p-6 dark:bg-black bg-[#FAFAFA] shadow-sm`}>
        <h4 className="text-base  mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>$</sup> <span className="">{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
