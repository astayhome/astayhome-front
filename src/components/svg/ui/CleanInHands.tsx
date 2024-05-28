interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function CleanInHands(props: IcoSvgProps) {
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
      viewBox="0 0 48 48"
      strokeWidth="0"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 18L16 17L19 16L20 12L21 16L24 17L21 18L20 22L19 18Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.6731 12.8995L28.4721 14L30.6354 15.0816L31.5 17.6754L32.3646 15.0816L34.5279 14L32.3269 12.8995L31.5 10.088L30.6731 12.8995ZM29 11.5L24 14L29 16.5L31.5 24L34 16.5L39 14L34 11.5L31.5 3L29 11.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 26C5 25.4477 5.44772 25 6 25H12C12.5523 25 13 25.4477 13 26V26.3545C14.2215 25.919 15.4474 25.471 15.8672 25.2833C16.2807 25.0983 16.7613 25.0345 17.1661 25.0116C17.5909 24.9875 18.0325 25.0041 18.4204 25.0335C18.8114 25.0632 19.1665 25.1075 19.423 25.1441C19.5518 25.1625 19.6571 25.1791 19.7312 25.1914C19.7684 25.1975 19.7978 25.2025 19.8185 25.2062L19.843 25.2105L19.8502 25.2118L19.8536 25.2124C19.8538 25.2124 19.8539 25.2125 19.6739 26.1961L19.8536 25.2124C19.8654 25.2145 19.8773 25.2169 19.8889 25.2195L26.9051 26.764C26.9335 26.7702 26.9616 26.7777 26.9894 26.7864C26.9895 26.7865 26.9892 26.7864 26.9894 26.7864L26.9911 26.787L27.0019 26.7903L27.0514 26.8051C27.0964 26.8184 27.1646 26.838 27.2523 26.8618C27.4282 26.9097 27.6809 26.9741 27.9821 27.0386C28.5931 27.1694 29.3658 27.2922 30.0886 27.2922C30.7266 27.2922 31.3864 27.5235 31.7423 28.1629C32.051 28.7177 31.9798 29.3301 31.8629 29.7568C31.7055 30.331 31.3658 30.9365 30.9394 31.4315C31.5271 31.2188 32.1784 30.9568 32.8824 30.6734L32.9461 30.6478C34.6644 29.956 36.6919 29.1397 38.4793 28.8496C40.5019 28.5213 41.9684 29.2384 42.6367 30.5184C43.2363 31.6668 43.0936 33.1718 42.1992 34.0718C41.9758 34.2966 41.6333 34.5343 41.2851 34.7559C40.9143 34.9919 40.457 35.2589 39.9481 35.5421C38.929 36.1093 37.6668 36.7616 36.3992 37.3925C33.8873 38.6426 31.2586 39.856 30.4268 40.155C29.0102 40.6641 27.3598 40.5007 25.8283 40.3491C25.7835 40.3447 25.7387 40.3403 25.6941 40.3359C25.2382 40.2909 24.7814 40.2459 24.3138 40.2111C22.2837 40.0602 20.7282 39.5751 19.2855 39.125L19.2611 39.1174C17.7093 38.6334 16.2849 38.1926 14.3723 38.117C14.1169 38.1069 13.6042 38.1141 13 38.1301V39.5C13 40.0523 12.5523 40.5 12 40.5H6C5.44772 40.5 5 40.0523 5 39.5V26ZM22.0857 31.9328L21.9096 32.9171C21.3975 32.8255 21.0411 32.3564 21.0902 31.8385C21.1393 31.3205 21.5773 30.9267 22.0976 30.9328L27.7618 31.0001C27.7661 31.0001 27.7704 31.0002 27.7746 31.0003C27.7795 31.0001 27.7895 30.9996 27.8043 30.9983C27.8463 30.9946 27.9274 30.9843 28.0408 30.9554C28.2656 30.8982 28.629 30.7653 29.0761 30.4519C29.2351 30.3406 29.4243 30.1496 29.5951 29.9061C29.7475 29.6887 29.8566 29.4701 29.9153 29.2904C29.0518 29.2731 28.1979 29.1301 27.5633 28.9942C27.2204 28.9208 26.9319 28.8473 26.7274 28.7917C26.6251 28.7639 26.5433 28.7404 26.486 28.7235C26.4665 28.7178 26.4497 28.7128 26.436 28.7086L19.4788 27.1771L19.4747 27.1764C19.4596 27.1738 19.4363 27.1698 19.4055 27.1647C19.3439 27.1545 19.2531 27.1401 19.1404 27.124C18.9138 27.0917 18.6043 27.0532 18.269 27.0278C17.9306 27.0021 17.5843 26.9911 17.2793 27.0084C16.9545 27.0268 16.7635 27.0733 16.6837 27.109C16.0092 27.4107 13.7988 28.197 12.3314 28.7125C12.0255 28.8199 11.6864 28.7724 11.4218 28.5849C11.1572 28.3974 11 28.0932 11 27.769V27H7V38.5H11V37.1604C11 36.6215 11.427 36.1795 11.9656 36.161C12.9216 36.1281 13.9756 36.0998 14.4513 36.1186C16.6409 36.2051 18.2828 36.7173 19.8299 37.1998L19.8566 37.2082C21.3055 37.6601 22.6721 38.0836 24.4621 38.2166C24.9556 38.2533 25.4343 38.3005 25.8854 38.345L25.8904 38.3455C27.6025 38.5144 28.8046 38.6127 29.7504 38.2728C30.4533 38.0202 32.9771 36.8616 35.5081 35.602C36.7619 34.978 37.9939 34.3409 38.9754 33.7946C39.4669 33.521 39.8866 33.2752 40.2113 33.0686C40.5585 32.8477 40.7299 32.713 40.7805 32.662C40.9825 32.4589 41.1138 31.923 40.8638 31.4441C40.6825 31.0969 40.1757 30.6004 38.7998 30.8238C37.2555 31.0744 35.4236 31.8064 33.6293 32.5287L33.6081 32.5373C32.7192 32.8951 31.8374 33.2501 31.0578 33.5072C30.3026 33.7563 29.5025 33.9641 28.8236 33.9239C27.8331 33.8653 26.0833 33.6081 24.6275 33.3753C23.8895 33.2573 23.2106 33.1429 22.7164 33.0579C22.4691 33.0155 22.2679 32.9803 22.1283 32.9558L21.9669 32.9273L21.9107 32.9173C21.9107 32.9173 21.9096 32.9171 22.0857 31.9328Z"
      />
    </svg>
  );
}