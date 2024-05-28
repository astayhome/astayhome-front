interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Calendar(props: IcoSvgProps) {
  const {
    className = '',
    fill = 'currentColor',
    size = 16,
    width,
    height,
    title,
    ...otherProps
  } = props;

  return (
    <svg
      className={`${className}`}
      width={width || size}
      height={height || size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        stroke={fill}
        strokeLinecap="round"
        d="M3.1,9.4h18.8 M7.3,3.1v2.1 M17.7,3.1v2.1 M6.2,12.5h2.1 M11.5,12.5h2.1 M16.7,12.5h2.1 M6.2,15.6h2.1   M11.5,15.6h2.1 M16.7,15.6h2.1 M6.2,18.8h2.1 M11.5,18.8h2.1 M16.7,18.8h2.1 M6.5,21.9h12.1c1.2,0,1.8,0,2.2-0.2  c0.4-0.2,0.7-0.5,0.9-0.9c0.2-0.4,0.2-1,0.2-2.2v-10c0-1.2,0-1.8-0.2-2.2c-0.2-0.4-0.5-0.7-0.9-0.9c-0.4-0.2-1-0.2-2.2-0.2H6.5  c-1.2,0-1.8,0-2.2,0.2C3.9,5.6,3.6,6,3.4,6.3c-0.2,0.4-0.2,1-0.2,2.2v10c0,1.2,0,1.8,0.2,2.2c0.2,0.4,0.5,0.7,0.9,0.9  C4.7,21.9,5.3,21.9,6.5,21.9z"
        fill="#fff"
      />
    </svg>
  );
}
