interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function LocationPick(props: IcoSvgProps) {
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        d="M10.0001 17.5C12.9167 14.5 15.8334 11.8137 15.8334 8.5C15.8334 5.18629 13.2217 2.5 10.0001 2.5C6.77842 2.5 4.16675 5.18629 4.16675 8.5C4.16675 11.8137 7.08341 14.5 10.0001 17.5Z"
        stroke={fill}
        fill="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
