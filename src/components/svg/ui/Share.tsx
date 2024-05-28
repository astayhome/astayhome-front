interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Share(props: IcoSvgProps) {
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
      viewBox="0 0 14 15"
      strokeWidth="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98351 10.6625L4.6866 7.65378L4.10327 8.64785L9.40018 11.6565L9.98351 10.6625Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98351 4.33822L4.6866 7.34699L4.10327 6.35292L9.40018 3.34421L9.98351 4.33822Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.45 8.75969C3.15877 8.75969 3.73333 8.19437 3.73333 7.49712C3.73333 6.79979 3.15877 6.23454 2.45 6.23454C1.74123 6.23454 1.16667 6.79979 1.16667 7.49712C1.16667 8.19437 1.74123 8.75969 2.45 8.75969ZM2.45 9.90749C3.8031 9.90749 4.9 8.82826 4.9 7.49712C4.9 6.1659 3.8031 5.0867 2.45 5.0867C1.0969 5.0867 0 6.1659 0 7.49712C0 8.82826 1.0969 9.90749 2.45 9.90749Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5499 10.827C12.2586 10.827 12.8332 11.3923 12.8332 12.0896C12.8332 12.7869 12.2586 13.3522 11.5499 13.3522C10.8411 13.3522 10.2665 12.7869 10.2665 12.0896C10.2665 11.3923 10.8411 10.827 11.5499 10.827ZM11.5499 9.67923C12.9029 9.67923 13.9999 10.7584 13.9999 12.0896C13.9999 13.4208 12.9029 14.5 11.5499 14.5C10.1968 14.5 9.09985 13.4208 9.09985 12.0896C9.09985 10.7584 10.1968 9.67923 11.5499 9.67923Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5499 4.17296C12.2586 4.17296 12.8332 3.60768 12.8332 2.91038C12.8332 2.21307 12.2586 1.6478 11.5499 1.6478C10.8411 1.6478 10.2665 2.21307 10.2665 2.91038C10.2665 3.60768 10.8411 4.17296 11.5499 4.17296ZM11.5499 5.32075C12.9029 5.32075 13.9999 4.24159 13.9999 2.91038C13.9999 1.57916 12.9029 0.5 11.5499 0.5C10.1968 0.5 9.09985 1.57916 9.09985 2.91038C9.09985 4.24159 10.1968 5.32075 11.5499 5.32075Z"
        fill={fill}
      />
    </svg>
  );
}
