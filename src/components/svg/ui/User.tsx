interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function User(props: IcoSvgProps) {
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
        d="M12.5 11.4375C14.9033 11.4375 16.8516 9.48924 16.8516 7.08594C16.8516 4.68264 14.9033 2.73438 12.5 2.73438C10.0967 2.73438 8.14844 4.68264 8.14844 7.08594C8.14844 9.48924 10.0967 11.4375 12.5 11.4375Z"
        stroke={fill}
        fill="#fff"
      />
      <path
        d="M21.3086 22.207C21.3086 19.8708 20.3805 17.6303 18.7286 15.9784C17.0767 14.3265 14.8362 13.3984 12.5 13.3984C10.1638 13.3984 7.92332 14.3265 6.27138 15.9784C4.61945 17.6303 3.69141 19.8708 3.69141 22.207H21.3086Z"
        stroke={fill}
        fill="#fff"
      />
    </svg>
  );
}
