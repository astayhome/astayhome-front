interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}
function BiPlus(props: IcoSvgProps) {
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
      viewBox="0 0 24 24"
      strokeWidth="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill={fill} />
    </svg>
  );
}

export default BiPlus;
