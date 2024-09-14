import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <AiFillStar key={index} className="text-orange-400" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-600" />
        );
      })}
    </div>
  );
};
