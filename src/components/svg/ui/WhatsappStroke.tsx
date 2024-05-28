interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function WhatsappStroke(props: IcoSvgProps) {
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
      viewBox="0 0 21 21"
      strokeWidth="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        d="M7.07228 8.70493C7.44121 8.45846 7.70806 8.29334 7.46784 7.57714C7.22763 6.86094 7.04384 6.23088 6.46378 7.10178C5.61215 8.38118 7.28526 10.7959 8.85418 12.1666C10.4231 13.5373 13.0654 14.8927 14.2188 13.877C15.004 13.1852 14.3549 13.0877 13.613 12.9458C12.871 12.8039 12.7432 13.0905 12.5485 13.4892M19.75 10.375C19.75 15.5527 15.5527 19.75 10.375 19.75C8.6674 19.75 7.06644 19.2935 5.6875 18.4958L1 19.75L2.43078 15.3553C1.52426 13.9123 1 12.2049 1 10.375C1 5.19733 5.19733 1 10.375 1C15.5527 1 19.75 5.19733 19.75 10.375Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
