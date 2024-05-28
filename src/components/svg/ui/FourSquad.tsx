interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function FourSquad(props: IcoSvgProps) {
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
      viewBox="0 0 17 16"
      strokeWidth="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        d="M0.5 1.71429C0.5 1.25963 0.680612 0.823594 1.0021 0.502103C1.32359 0.180612 1.75963 0 2.21429 0H5.64286C6.09751 0 6.53355 0.180612 6.85504 0.502103C7.17653 0.823594 7.35714 1.25963 7.35714 1.71429V5.14286C7.35714 5.59751 7.17653 6.03355 6.85504 6.35504C6.53355 6.67653 6.09751 6.85714 5.64286 6.85714H2.21429C1.75963 6.85714 1.32359 6.67653 1.0021 6.35504C0.680612 6.03355 0.5 5.59751 0.5 5.14286V1.71429ZM9.64286 1.71429C9.64286 1.25963 9.82347 0.823594 10.145 0.502103C10.4665 0.180612 10.9025 0 11.3571 0H14.7857C15.2404 0 15.6764 0.180612 15.9979 0.502103C16.3194 0.823594 16.5 1.25963 16.5 1.71429V5.14286C16.5 5.59751 16.3194 6.03355 15.9979 6.35504C15.6764 6.67653 15.2404 6.85714 14.7857 6.85714H11.3571C10.9025 6.85714 10.4665 6.67653 10.145 6.35504C9.82347 6.03355 9.64286 5.59751 9.64286 5.14286V1.71429ZM0.5 10.8571C0.5 10.4025 0.680612 9.96645 1.0021 9.64496C1.32359 9.32347 1.75963 9.14286 2.21429 9.14286H5.64286C6.09751 9.14286 6.53355 9.32347 6.85504 9.64496C7.17653 9.96645 7.35714 10.4025 7.35714 10.8571V14.2857C7.35714 14.7404 7.17653 15.1764 6.85504 15.4979C6.53355 15.8194 6.09751 16 5.64286 16H2.21429C1.75963 16 1.32359 15.8194 1.0021 15.4979C0.680612 15.1764 0.5 14.7404 0.5 14.2857V10.8571ZM9.64286 10.8571C9.64286 10.4025 9.82347 9.96645 10.145 9.64496C10.4665 9.32347 10.9025 9.14286 11.3571 9.14286H14.7857C15.2404 9.14286 15.6764 9.32347 15.9979 9.64496C16.3194 9.96645 16.5 10.4025 16.5 10.8571V14.2857C16.5 14.7404 16.3194 15.1764 15.9979 15.4979C15.6764 15.8194 15.2404 16 14.7857 16H11.3571C10.9025 16 10.4665 15.8194 10.145 15.4979C9.82347 15.1764 9.64286 14.7404 9.64286 14.2857V10.8571Z"
        fill={fill}
      />
    </svg>
  );
}
