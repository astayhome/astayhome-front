interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Clock(props: IcoSvgProps) {
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
      <circle cx={10} cy={10} r={10} fill="#fff" />
      <path
        d="M9.375 9.88938H9.875V9.38938V3.125C9.875 3.05584 9.93082 3 10 3C10.0695 3 10.125 3.05552 10.125 3.125V10.015C10.125 10.0835 10.0698 10.1394 10 10.1394H4.375C4.30521 10.1394 4.25 10.0835 4.25 10.015C4.25 9.94517 4.30648 9.88938 4.375 9.88938H9.375ZM17 9.875V10.125H16.75V9.875H17ZM0.75 10C0.75 15.1086 4.89136 19.25 10 19.25C15.1086 19.25 19.25 15.1086 19.25 10C19.25 4.89201 15.1087 0.75 10 0.75C4.89133 0.75 0.75 4.89201 0.75 10ZM0.5 10C0.5 4.75362 4.75304 0.5 10 0.5C15.247 0.5 19.5 4.75362 19.5 10C19.5 15.247 15.247 19.5 10 19.5C4.75302 19.5 0.5 15.247 0.5 10ZM14.821 5.17076L14.6625 5.32963L14.504 5.17076L14.6625 5.01199L14.821 5.17076ZM14.4981 14.4129L14.3215 14.2363L14.4981 14.0596L14.6748 14.2363L14.4981 14.4129ZM5.17376 5.02523L5.35039 5.20187L5.17376 5.37851L4.99712 5.20187L5.17376 5.02523ZM4.91447 14.27L5.07313 14.111L5.23178 14.27L5.07313 14.429L4.91447 14.27ZM10.125 16.75V17H9.875V16.75H10.125Z"
        stroke={fill}
      />
    </svg>
  );
}
