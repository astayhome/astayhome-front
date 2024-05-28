import type { FC } from 'react';

const Languages: FC<ImgSvgProps> = (props) => {
  const {
    className,
    fill = 'currentColor',
    width = 21,
    height = 21,
    title,
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
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 10.5C0.5 7.84784 1.55357 5.3043 3.42893 3.42893C5.3043 1.55357 7.84784 0.5 10.5 0.5C13.1522 0.5 15.6957 1.55357 17.5711 3.42893C19.4464 5.3043 20.5 7.84784 20.5 10.5C20.5 13.1522 19.4464 15.6957 17.5711 17.5711C15.6957 19.4464 13.1522 20.5 10.5 20.5C7.84784 20.5 5.3043 19.4464 3.42893 17.5711C1.55357 15.6957 0.5 13.1522 0.5 10.5ZM9.875 1.84625C9.0375 2.10125 8.20625 2.87125 7.51625 4.165C7.3375 4.5 7.17125 4.865 7.0225 5.255C7.90375 5.45125 8.8625 5.57625 9.875 5.61375V1.84625ZM5.81125 4.92375C5.98875 4.44375 6.19125 3.99375 6.4125 3.57625C6.62863 3.16757 6.87824 2.77749 7.15875 2.41C6.09458 2.851 5.12781 3.4975 4.31375 4.3125C4.76625 4.5425 5.2675 4.7475 5.81125 4.92375ZM4.88625 9.875C4.93125 8.5375 5.12125 7.26625 5.43125 6.115C4.75462 5.89861 4.09969 5.61948 3.475 5.28125C2.47943 6.61794 1.88853 8.21234 1.7725 9.875H4.885H4.88625ZM6.63625 6.44875C6.34156 7.56846 6.17384 8.71777 6.13625 9.875H9.875V6.86375C8.7375 6.82625 7.64625 6.6825 6.63625 6.44875ZM11.125 6.8625V9.875H14.8625C14.8253 8.71782 14.658 7.5685 14.3637 6.44875C13.3537 6.6825 12.2625 6.82375 11.125 6.8625ZM6.1375 11.125C6.18125 12.3588 6.3575 13.5175 6.63625 14.5513C7.70007 14.3098 8.78465 14.1713 9.875 14.1375V11.125H6.1375ZM11.125 11.125V14.1363C12.2625 14.1738 13.3537 14.3175 14.3637 14.5513C14.6425 13.5175 14.8188 12.3588 14.8638 11.125H11.125ZM7.0225 15.745C7.1725 16.135 7.3375 16.5 7.51625 16.835C8.20625 18.1287 9.03875 18.8975 9.875 19.1538V15.3875C8.8625 15.425 7.90375 15.5487 7.0225 15.745ZM7.16 18.59C6.87904 18.2226 6.62901 17.8325 6.4125 17.4237C6.18228 16.9881 5.98141 16.5375 5.81125 16.075C5.29704 16.2403 4.79638 16.445 4.31375 16.6875C5.12781 17.5025 6.09583 18.149 7.16 18.59ZM5.43125 14.885C5.10672 13.6565 4.92345 12.395 4.885 11.125H1.7725C1.88846 12.7877 2.47937 14.3821 3.475 15.7188C4.0625 15.3963 4.71875 15.1163 5.43125 14.885ZM13.8413 18.59C14.9049 18.1493 15.8712 17.5032 16.685 16.6888C16.2028 16.4463 15.7025 16.2415 15.1888 16.0763C15.0185 16.5383 14.8177 16.9885 14.5875 17.4237C14.3714 17.8325 14.1218 18.2226 13.8413 18.59ZM11.125 15.3863V19.1538C11.9625 18.8988 12.7937 18.1287 13.4838 16.835C13.6625 16.5 13.8287 16.135 13.9775 15.745C13.0395 15.5393 12.0847 15.4184 11.125 15.3863ZM15.5688 14.885C16.2812 15.1163 16.9375 15.3963 17.525 15.7188C18.5206 14.3821 19.1115 12.7877 19.2275 11.125H16.115C16.0765 12.395 15.8933 13.6565 15.5688 14.885ZM19.2275 9.875C19.1115 8.21233 18.5206 6.61791 17.525 5.28125C16.9375 5.60375 16.2812 5.88375 15.5688 6.115C15.8788 7.265 16.0687 8.5375 16.115 9.875H19.2275ZM14.5875 3.57625C14.8088 3.99375 15.0112 4.44375 15.19 4.92375C15.7034 4.75843 16.2032 4.55365 16.685 4.31125C15.8711 3.49728 14.9048 2.85165 13.8413 2.41125C14.1138 2.765 14.3638 3.1575 14.5875 3.57625ZM13.9775 5.255C13.8355 4.88186 13.6706 4.51783 13.4838 4.165C12.7937 2.87125 11.9625 2.1025 11.125 1.84625V5.6125C12.1375 5.575 13.0962 5.45125 13.9775 5.255Z"
        fill={fill}
      />
    </svg>
  );
};

export default Languages;