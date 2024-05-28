interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function UserCard(props: IcoSvgProps) {
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
      strokeWidth={0.8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <rect y="3.5" width="25" height="18" fill="#fff" />
      <path
        d="M23.9375 4.6875V4.1875H23.4375H1.5625H1.0625V4.6875V20.3125V20.8125H1.5625H23.4375H23.9375V20.3125V4.6875ZM0.5 21.375V3.625H24.5V21.375H0.5Z"
        stroke={fill}
      />
      <path d="M12.5 7.8125H21.875V9.375H12.5V7.8125Z" fill={fill} />
      <path d="M13 11.4375H21.375V12H13V11.4375Z" stroke={fill} />
      <path d="M13 14.5625H16.6875V15.125H13V14.5625Z" stroke={fill} />
      <path
        d="M7.3125 10.9375V11.4375H7.8125H8.4375C9.56761 11.4375 10.4375 12.3074 10.4375 13.4375V16.6875H3.625V13.4375C3.625 12.3074 4.49489 11.4375 5.625 11.4375H6.25H6.75V10.9375V10.7812V10.4209L6.40811 10.3069C5.66654 10.0597 5.1875 9.46372 5.1875 8.59375C5.1875 7.61989 6.05739 6.75 7.03125 6.75C8.00511 6.75 8.875 7.61989 8.875 8.59375C8.875 9.32748 8.37706 10.066 7.65439 10.3069L7.3125 10.4209V10.7812V10.9375Z"
        stroke={fill}
      />
    </svg>
  );
}
