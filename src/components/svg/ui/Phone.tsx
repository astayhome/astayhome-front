interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Phone(props: IcoSvgProps) {
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
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        d="M1.93008 6.58503C1.2914 9.64256 3.69891 13.2822 6.72249 16.3058C9.74612 19.3294 13.3857 21.7369 16.4432 21.0982C18.9578 20.5729 20.2415 19.2335 20.964 18.0922C21.2132 17.6983 21.0874 17.1871 20.7138 16.9085L17.1757 14.2693C16.7942 13.9848 16.2615 14.0233 15.9251 14.3599L14.047 16.2378C14.047 16.2378 12.2216 15.6444 9.80266 13.2256C7.38384 10.8067 6.79046 8.98126 6.79046 8.98126L8.66846 7.10326C9.00502 6.7667 9.04357 6.23415 8.75898 5.85263L6.11983 2.31447C5.84115 1.94086 5.32995 1.81503 4.93613 2.06432C3.79477 2.78677 2.45534 4.07049 1.93008 6.58503Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="white"
      />
    </svg>
  );
}
