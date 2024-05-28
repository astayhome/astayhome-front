'use client';

import type { ReactNode } from 'react';
import { lazy, useState } from 'react';

import { classNames } from '@/libs/classNames';

import cls from './Rating.module.scss';

const Star = lazy(() => import('./Star/Star'));

interface RatingProps {
  className?: string;
  canSetRating?: boolean;
  ratingNumber?: number | string;
  setRatingOutside?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = (props) => {
  const {
    className,
    canSetRating = false,
    ratingNumber = -1,
    setRatingOutside = () => {},
    ...otherProps
  } = props;
  const [rating, setRating] = useState<number>(
    Math.floor(Number(ratingNumber)),
  );
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  const handleMouseOver = (idx: number) => canSetRating && setHoverAt(idx + 1);
  const handleMouseOut = () => canSetRating && setHoverAt(null);
  const handleClick = (idx: number) => {
    if (canSetRating) {
      setRating(idx + 1);
      setRatingOutside(idx + 1);
    }
  };

  const stars: ReactNode[] = [];

  for (let i = 0; i < 5; i += 1) {
    const currentRating = hoverAt !== null ? hoverAt : rating;
    const selected = i < currentRating;

    stars.push(
      <Star
        key={i}
        selected={selected}
        onMouseOver={() => handleMouseOver(i)}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick(i)}
        indexVal={i}
      />,
    );
  }

  return (
    <div className={classNames(cls.rating, [className])} {...otherProps}>
      {stars}
    </div>
  );
};

export default Rating;
