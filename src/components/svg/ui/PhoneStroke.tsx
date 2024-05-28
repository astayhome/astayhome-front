interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function PhoneStroke(props: IcoSvgProps) {
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
        d="M18.8752 9.45827C18.8752 4.8559 15.1442 1.12494 10.5419 1.12494M11.5834 5.42284C13.0477 5.79966 14.2004 6.95242 14.5773 8.41667M13.7313 12.8445V12.8445C14.2971 12.09 15.3215 11.8482 16.165 12.27L17.5088 12.9418C18.3154 13.3452 18.7524 14.2385 18.5755 15.1229L18.155 17.2256C17.968 18.1604 17.1446 18.8474 16.1968 18.7445C8.57907 17.9172 2.08285 11.421 1.25559 3.80329C1.15267 2.8555 1.83967 2.03208 2.77452 1.84511L4.87715 1.42459C5.76154 1.24771 6.6549 1.68463 7.05824 2.49132L7.73012 3.83508C8.15186 4.67856 7.91004 5.70295 7.1556 6.26878V6.26878C6.66425 6.63729 6.36468 7.2292 6.60213 7.79564C7.41823 9.74251 10.2576 12.5819 12.2044 13.398C12.7709 13.6354 13.3628 13.3358 13.7313 12.8445Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
