import type { FC, HTMLProps } from 'react';

import { classNames } from '@/libs/classNames';

import cls from './Star.module.scss';

interface StarProps extends HTMLProps<HTMLSpanElement> {
  className?: string;
  classNameForStar?: string;
  selected?: boolean;
  indexVal: number;
}

const Star: FC<StarProps> = (props) => {
  const { className, classNameForStar, selected, indexVal, ...otherProps } =
    props;

  const starIcon = selected ? '★' : '☆';
  const isHalfStar = Math.floor(indexVal) !== indexVal;

  return (
    <span
      className={classNames(cls.wrapper, [className])}
      title={`${indexVal + 0.5} stars`}
    >
      <span
        className={classNames(cls.star, [classNameForStar], {
          [cls.right]: isHalfStar,
        })}
        data-index={indexVal}
        {...otherProps}
      >
        {starIcon}
      </span>
    </span>
  );
};

export default Star;
