import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const StarRating = ({ product }) => {
  const [currentRating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(undefined);
  };

  return (
    <div className="flex flex-row items-center">
      {stars.map((_, index) => {
        return (
          <AiFillStar
            className="cursor-pointer"
            key={index}
            size={25}
            color={
              (hoverRating || currentRating) > index
                ? colors.orange
                : colors.grey
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
      <span className="ml-6 text-orange-400 font-bold text-xl">
        {product.rating}
      </span>
    </div>
  );
};

export default StarRating;
