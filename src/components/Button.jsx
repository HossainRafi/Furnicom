/* eslint-disable react/prop-types */
import btnIcon from "../assets/button-icon.png";

export const Button = ({text}) => {
  return (
    <button className="text-sm text-primary flex items-center gap-1">
      {text}
      <img src={btnIcon} alt="" />
    </button>
  );
};
