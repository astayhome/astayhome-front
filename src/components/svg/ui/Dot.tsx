import type { FC, SVGProps } from 'react';

const Dot: FC<SVGProps<SVGSVGElement>> = (props) => {
  const {
    className,
    fill = 'currentColor',
    width = 6,
    height = 6,
    ...otherProps
  } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="3" cy="3" r="3" fill={fill} />
    </svg>
  );
};

export default Dot;
