interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function HomeInHand(props: IcoSvgProps) {
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
      viewBox="0 0 51.363 51.362"
      strokeWidth="0"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      {title ? <title>{title}</title> : ''}
      <path d="M24.762,44.409l-1.456-0.023c-1.216-2.494-2.834-6.301-3.22-9.593c-0.21-1.794-1.457-2.608-1.902-2.959    c-0.646-0.51-2.246-1.166-4.06-2.51c-0.939-0.697-2.217-1.775-3.429-2.754c-1.884-1.523-2.763-1.731-3.698-0.721    c-0.329,0.358-0.849,1.56,0.581,2.828c0.313,0.279,1.096,0.906,1.626,1.359c0.484,0.413,1.287,1.168,2.268,2.169    c0.786,0.805,1.119,1.651,1.119,1.651s-0.957-0.699-1.3-0.954c-1.055-0.785-2.448-1.778-3.597-2.839    c-1.153-1.059-1.884-2.039-1.977-3.073c-0.049-1.606,0.939-2.184,1.498-2.487c0,0-3.514-6.12-3.798-6.491    c-0.576-0.745-1.514-1.441-2.129-1.389c-0.007,0.001-0.494-0.106-1.039,0.414c-0.298,0.285-0.415,0.918,0.142,2.076    c0,0,2.223,5.003,3.888,11.851c0,0,0.199,0.78,0.812,1.29c3.189,2.391,6.287,5.354,6.594,5.669    c1.541,1.587,3.204,3.509,3.802,6.339l-1.291-0.019l0.274,4.406l10.412,0.131L24.762,44.409z M17.3,46.998    c-0.276,0.286-0.73,0.298-1.019,0.021c-0.287-0.275-0.297-0.729-0.022-1.02c0.275-0.287,0.73-0.298,1.019-0.021    C17.565,46.253,17.575,46.708,17.3,46.998z" />
      <path d="M46.273,32.257c0.612-0.51,0.81-1.29,0.81-1.29c1.668-6.848,3.89-11.851,3.89-11.851c0.556-1.158,0.439-1.791,0.141-2.076    c-0.544-0.52-1.031-0.413-1.038-0.414c-0.615-0.052-1.554,0.644-2.129,1.389c-0.283,0.372-3.798,6.492-3.798,6.492    c0.558,0.303,1.545,0.88,1.497,2.487c-0.094,1.035-0.823,2.016-1.976,3.073c-1.15,1.062-2.544,2.054-3.598,2.839    c-0.342,0.255-1.3,0.954-1.3,0.954s0.334-0.846,1.119-1.651c0.979-1.001,1.784-1.757,2.269-2.169    c0.531-0.453,1.313-1.08,1.625-1.359c1.431-1.269,0.911-2.47,0.582-2.828c-0.936-1.012-1.813-0.803-3.698,0.721    c-1.211,0.979-2.489,2.058-3.429,2.754c-1.815,1.344-3.413,2-4.062,2.511c-0.445,0.35-1.692,1.164-1.903,2.958    c-0.385,3.293-2.003,7.099-3.218,9.593L26.6,44.411l-0.118,4.376l10.411-0.133l0.274-4.405l-1.291,0.02    c0.597-2.831,2.261-4.753,3.802-6.34C39.984,37.611,43.082,34.648,46.273,32.257z M35.082,47.019    c-0.289,0.277-0.744,0.266-1.021-0.021c-0.275-0.289-0.265-0.745,0.022-1.02c0.287-0.275,0.743-0.265,1.02,0.021    C35.379,46.288,35.37,46.744,35.082,47.019z" />
      <path d="M28.82,2.575v2.889H16.606l-4.042,4.393c-0.58,0.627-0.539,1.607,0.09,2.187l1.594,1.466l3.986-4.331H33.2l3.883,4.317    l1.61-1.449c0.636-0.572,0.688-1.55,0.116-2.186l-3.954-4.396h-2.711V2.575H28.82z" />
      <path d="M27.114,16.618h6.511V28.79h0.868c0.854,0,1.547-0.694,1.547-1.548v-13.41l-3.042-3.405H18.646l-3.34,3.817v12.998    c0,0.854,0.693,1.548,1.547,1.548h10.26V16.618z M20.601,25.891h-2.422v-2.422h2.422V25.891z M20.676,22.03h-2.422v-2.422h2.422    V22.03z M24.839,25.891h-2.423v-2.422h2.423V25.891z M24.916,22.03h-2.422v-2.422h2.422V22.03z" />
    </svg>
  );
}
