interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function Key(props: IcoSvgProps) {
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
      viewBox="0 0 24 24"
      strokeWidth="0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7702 0.157727C19.1546 0.439385 20.436 1.09237 21.4765 2.04649C22.5171 3.00061 23.2774 4.21978 23.6758 5.57292C24.0449 6.81362 24.0998 8.12629 23.8355 9.3944C23.4533 11.1318 22.4916 12.6882 21.1078 13.809C19.7241 14.9297 18.0001 15.5483 16.2182 15.5636C15.4663 15.5636 14.7178 15.4556 13.9984 15.238L12.625 16.8454L11.9744 17.1453H10.3005V19.7158L9.44217 20.5727H6.86703V23.1432L6.00865 24H0.858379L0 23.1432V19.1897L0.250647 18.5848L8.7898 10.061C8.54746 9.28186 8.43154 8.46902 8.44645 7.65331C8.46209 6.51207 8.72976 5.38833 9.23038 4.36219C9.73099 3.33605 10.4522 2.43278 11.3426 1.71677C12.2331 1.00077 13.2708 0.489658 14.3818 0.219878C15.4928 -0.0499015 16.6497 -0.0699943 17.7702 0.157727ZM20.0328 12.4961C21.1113 11.6244 21.8613 10.413 22.1599 9.06024L22.1668 9.0688C22.3795 8.07968 22.3412 7.05318 22.0554 6.08257C21.7697 5.11196 21.2455 4.22802 20.5304 3.51105C19.8154 2.79409 18.9323 2.26683 17.9612 1.97719C16.9902 1.68755 15.962 1.6447 14.9701 1.85255C13.6324 2.14892 12.4325 2.88352 11.5614 3.93938C10.6903 4.99523 10.1981 6.31165 10.1632 7.67902C10.146 8.46045 10.2834 9.23503 10.5735 9.9582L10.3847 10.8887L1.71676 19.5445V22.2863H5.15027V19.7158L6.00865 18.859H8.58379V16.2885L9.44217 15.4317H11.5795L13.0834 13.6906L14.0465 13.4507C14.7407 13.7215 15.4797 13.8598 16.2251 13.8585C17.6123 13.8479 18.9548 13.3676 20.0328 12.4961ZM18.5942 7.8144C18.7296 7.62769 18.8258 7.41565 18.8772 7.19096C18.9285 6.96627 18.934 6.73355 18.8931 6.50671C18.8523 6.27988 18.7661 6.06359 18.6396 5.8708C18.5131 5.678 18.3489 5.51266 18.1569 5.38466C17.9649 5.25666 17.749 5.16863 17.5221 5.12585C17.2953 5.08306 17.0621 5.08639 16.8365 5.13565C16.611 5.1849 16.3977 5.27906 16.2095 5.41249C16.0212 5.54593 15.8619 5.7159 15.7409 5.91223C15.5083 6.2899 15.4314 6.74286 15.5263 7.17595C15.6212 7.60904 15.8806 7.98857 16.25 8.23479C16.6193 8.48102 17.0699 8.57478 17.507 8.49639C17.9441 8.418 18.3338 8.17355 18.5942 7.8144Z"
        fill={fill}
      />
    </svg>
  );
}