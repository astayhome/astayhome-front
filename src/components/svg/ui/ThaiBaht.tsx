interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function ThaiBaht(props: IcoSvgProps) {
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
      viewBox="0 0 64 64"
      strokeWidth="0"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}

      <path d="M30,47a1,1,0,0,0,1-1V43h5a6,6,0,0,0,.184-11.991A5.99,5.99,0,0,0,31.733,21H31V18a1,1,0,0,0-2,0v3H25a1,1,0,0,0-1,1V42a1,1,0,0,0,1,1h4v3A1,1,0,0,0,30,47ZM40,37a4,4,0,0,1-4,4H31V33h5A4,4,0,0,1,40,37ZM31.733,23a4,4,0,0,1,0,8H31V23ZM26,23h3v8H26Zm0,18V33h3v8Z" />

      <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.032,28.032,0,0,1,32,60Z" />

      <path d="M49.655,16.793a3.172,3.172,0,1,0-3.172,3.172,3.137,3.137,0,0,0,1.263-.266A19.994,19.994,0,0,1,22.692,49.707a1,1,0,0,0-.933,1.77,21.987,21.987,0,0,0,27.47-33.125A3.141,3.141,0,0,0,49.655,16.793Zm-4.344,0a1.172,1.172,0,1,1,1.172,1.172A1.172,1.172,0,0,1,45.311,16.793Z" />

      <path d="M16.793,44.034a3.157,3.157,0,0,0-.692.081A19.78,19.78,0,0,1,12,32,20.023,20.023,0,0,1,32,12a19.811,19.811,0,0,1,8.463,1.874,1,1,0,0,0,.848-1.812,21.99,21.99,0,0,0-26.922,33.1,3.158,3.158,0,1,0,2.4-1.126Zm0,4.345a1.173,1.173,0,1,1,1.172-1.172A1.172,1.172,0,0,1,16.793,48.379Z" />
    </svg>
  );
}
