interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Plane(props: IcoSvgProps) {
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
        fill="#FFFFFF"
        stroke={fill}
        strokeLinecap="round"
        d="M6.5,21.9h12.1c1.2,0,1.8,0,2.2-0.2c0.4-0.2,0.7-0.5,0.9-0.9c0.2-0.4,0.2-1,0.2-2.2v-10c0-1.2,0-1.8-0.2-2.2  c-0.2-0.4-0.5-0.7-0.9-0.9c-0.4-0.2-1-0.2-2.2-0.2H6.5c-1.2,0-1.8,0-2.2,0.2C3.9,5.6,3.6,6,3.4,6.3c-0.2,0.4-0.2,1-0.2,2.2v10  c0,1.2,0,1.8,0.2,2.2c0.2,0.4,0.5,0.7,0.9,0.9C4.7,21.9,5.3,21.9,6.5,21.9z"
      />
      <line
        fill="#FFFFFF"
        stroke={fill}
        strokeLinecap="round"
        x1="3.3"
        y1="9.4"
        x2="21.9"
        y2="9.4"
      />
      <line
        fill="#FFFFFF"
        stroke={fill}
        strokeLinecap="round"
        x1="7.3"
        y1="3.1"
        x2="7.3"
        y2="5.2"
      />
      <line
        fill="#FFFFFF"
        stroke={fill}
        strokeLinecap="round"
        x1="17.7"
        y1="3.1"
        x2="17.7"
        y2="5.2"
      />
      <path
        fill={fill}
        d="M18.5,10.5c-0.7-0.2-1.4-0.2-2-0.1c-0.8,0.1-1.6,0.5-2.3,1c-0.5,0.4-0.9,0.3-1.4,0.1c-0.8-0.3-1.6-0.7-2.4-1  c-0.9-0.3-0.7-0.4-1.5,0.4l-0.1,0.1c-0.2,0.3-0.2,0.5,0,0.8C8.9,11.8,9,11.9,9.1,12c0.5,0.5,1,1.1,1.5,1.7l-1.9,1.2  c-0.1,0-0.1-0.1-0.1-0.1c-0.3-0.3-0.7-0.5-1-0.8c-0.5-0.5-0.5-0.5-1.3-0.2c-0.3,0.2-0.5,0.4-0.4,0.8c0.1,0.7,0.1,1.4,0.2,2.1  c0,0.5,0.1,0.9,0.3,1.4c0.2,0.4,0.5,0.7,1,0.6s0.9-0.2,1.4-0.3c1.1-0.4,2.1-1.1,3.2-1.6c0.1-0.1,0.2-0.1,0.3-0.2c0,0.1,0,0.2,0,0.3  c-0.1,1.3-0.2,2.4-0.2,3.7c-0.1,0.5,0.2,0.7,0.7,0.5c0.4-0.2,0.9-0.4,1.3-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3  c0.1-0.2,0.1-0.3,0.2-0.5c0.4-1.5,0.7-3.1,1.1-4.7c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.7-0.4,1.4-0.9,2.1-1.4  c0.3-0.2,0.5-0.4,0.8-0.7C19.4,11.7,19.5,10.8,18.5,10.5z"
      />
    </svg>
  );
}
