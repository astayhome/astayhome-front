import type { FC } from 'react';

const Youtube: FC<ImgSvgProps> = (props) => {
  const {
    className,
    fill = 'currentColor',
    width = 21,
    height = 21,
    title = 'Youtube',
    ...otherProps
  } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <title>{title}</title>
      <path
        d="M9.10132 12.5221L12.5384 10.5041L9.10132 8.48615V12.5221Z"
        fill={fill}
      />
      <path
        d="M10.5 0C4.70039 0 0 4.70039 0 10.5C0 16.2996 4.70039 21 10.5 21C16.2996 21 21 16.2996 21 10.5C21 4.70039 16.2996 0 10.5 0ZM15.75 12.3785C15.75 14.1873 13.9412 14.1873 13.9412 14.1873H7.05879C5.25 14.1873 5.25 12.3785 5.25 12.3785V8.62559C5.25 6.8168 7.05879 6.8168 7.05879 6.8168H13.9412C15.75 6.8168 15.75 8.62559 15.75 8.62559V12.3785Z"
        fill={fill}
      />
    </svg>
  );
};

export default Youtube;
