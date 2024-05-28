interface IcoSvgProps {
  title?: string;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
}

export default function GirlCheckList(props: IcoSvgProps) {
  const {
    className = '',
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
      viewBox="0 0 807 788"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <style>{`.a{opacity:.3;fill:#1f5573}.b{fill:#4875a3;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.c{fill:#f5f5f5;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.d{fill:#1f5573;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.e{fill:#f5f5f5;stroke:#2c285b;stroke-miterlimit:10;stroke-width:5.6}.f{fill:#289448}.g{fill:#2c285b}.h{fill:#e0a953;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.i{fill:#c7466e;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.j{fill:#a8c5dd;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.k{fill:#efa89a;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.l{opacity:.1;fill:#2c285b}.m{fill:#a11c26;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.n{fill:none;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.o{fill:#efa89a}.p{fill:#db901b;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.q{opacity:.5;fill:#2c285b}.r{fill:#efa89a;stroke:#2c285b;stroke-miterlimit:10;stroke-width:1.9}.s{fill:#80a0bf;stroke:#2c285b;stroke-miterlimit:10;stroke-width:3.7}.t{fill:#db901b;stroke:#2c285b;stroke-miterlimit:10;stroke-width:1.9}.u{fill:#f5f5f5}.v{fill:#a11c26}`}</style>

      {title ? <title>{title}</title> : ''}
      <path
        className="a"
        d="m802.6 752.9c0 19.4-179.7 35.2-401.3 35.2-221.6 0-401.2-15.8-401.2-35.2 0-19.5 179.6-35.3 401.2-35.3 221.6 0 401.3 15.8 401.3 35.3z"
      />
      <path className="b" d="m63.1 61.7h425.4l34.6 674-437.1 1.8z" />
      <path className="c" d="m91.9 89.6h370.1l31.8 618.4-380.9 1.6z" />
      <path
        fillRule="evenodd"
        className="d"
        d="m425.4 120.2h-292.1l-0.2-3.6-3.5-69.7h73.2l17.7-44.5h97.3l12.1 46.4 92.7 1.8zm-138.5-83.5c0-7.3-5.9-13.3-13.2-13.3-7.4 0-13.3 6-13.3 13.3 0 7.4 5.9 13.3 13.3 13.3 7.3 0 13.2-5.9 13.2-13.3z"
      />
      <path className="e" d="m125.4 174.2l57.5-3.7 4.6 73.2-55.6-3.7z" />
      <path className="e" d="m125.4 317.9l57.5-3.7 4.6 73.3-55.6-3.7z" />
      <path className="e" d="m125.4 458.9l57.5-3.7 4.6 73.2-55.6-3.7z" />
      <path className="e" d="m125.4 596.1l57.5-3.7 4.6 73.3-55.6-3.7z" />
      <path
        className="f"
        d="m136.6 204.8c0.4 0.5 0.7 0.8 1.2 1.2q0.6 0.6 1.3 1.1l2.6 2.1q1.4 1 2.7 2l2.8 2c1.8 1.3 3.6 2.6 5.4 3.7 0.9 0.5 1.8 1 2.7 1.5q0.6 0.3 1.1 0.5c0.3 0.1 0.6 0.1 0.5 0l-6.8 2c0.5-1.4 0.9-3 1.2-4.6 0.3-1.6 0.6-3.4 0.9-5.2 0.3-1.9 0.6-3.9 1-6l0.4-1.7 0.4-1.5 0.8-3c0.5-1.9 1.1-3.8 1.7-5.8 0.6-2 1.3-3.9 2-5.9l1.1-2.9 1.2-2.8c0.7-1.9 1.5-3.8 2.4-5.7 0.9-1.8 1.7-3.7 2.7-5.5 0.9-1.8 1.8-3.7 2.8-5.4 2-3.6 4.1-7.1 6.5-10.5 1.1-1.7 2.4-3.4 3.6-5 1.2-1.7 2.5-3.3 3.9-4.9 1.3-1.6 2.7-3.2 4.2-4.7q2.1-2.4 4.6-4.5l1 0.5-9.9 22c-1.6 3.6-3.2 7.3-4.8 11-1.5 3.7-3 7.4-4.6 11.1-2.9 7.5-5.9 14.9-8.6 22.5-0.6 1.9-1.4 3.8-2 5.7l-1.8 5.7c-1.3 3.9-2.8 7.8-5.2 11.1l-0.4 0.6-0.6-0.3c-1.3-0.5-2.2-1.2-3.1-1.9-1-0.7-1.8-1.4-2.7-2.2-1.7-1.6-3.3-3.2-4.8-4.9q-2.3-2.5-4.5-5.2-1.1-1.3-2.1-2.7-0.5-0.7-1-1.4c-0.3-0.5-0.6-1.1-0.8-1.6z"
      />
      <path
        className="f"
        d="m140.3 345.2c0.4 0.5 0.8 0.7 1.2 1.1q0.6 0.6 1.3 1.1l2.6 2.1q1.4 1.1 2.7 2.1l2.8 1.9c1.8 1.4 3.6 2.6 5.4 3.7 0.9 0.6 1.8 1.1 2.7 1.5q0.6 0.3 1.1 0.5c0.3 0.1 0.7 0.2 0.5 0l-6.8 2.1c0.5-1.5 0.9-3 1.2-4.6 0.3-1.7 0.6-3.4 0.9-5.3 0.3-1.9 0.6-3.9 1.1-6l0.3-1.6 0.4-1.6 0.8-2.9c0.5-2 1.1-3.9 1.7-5.8 0.6-2 1.3-4 2-5.9l1.1-2.9 1.2-2.9c0.8-1.9 1.5-3.8 2.4-5.6 0.9-1.9 1.7-3.7 2.7-5.5 0.9-1.9 1.8-3.7 2.8-5.5 2-3.5 4.2-7.1 6.5-10.4 1.1-1.8 2.4-3.4 3.6-5.1 1.2-1.6 2.5-3.3 3.9-4.9 1.3-1.6 2.7-3.2 4.2-4.7q2.2-2.3 4.6-4.5l1 0.5-9.9 22c-1.6 3.7-3.2 7.4-4.8 11.1-1.5 3.6-3 7.4-4.5 11.1-2.9 7.5-6 14.9-8.7 22.5-0.6 1.9-1.4 3.7-2 5.6l-1.8 5.8c-1.2 3.8-2.8 7.7-5.2 11.1l-0.4 0.5-0.6-0.2c-1.3-0.5-2.2-1.2-3.1-1.9-1-0.7-1.8-1.5-2.7-2.3-1.7-1.5-3.2-3.2-4.8-4.8q-2.3-2.6-4.5-5.2-1.1-1.3-2.1-2.7-0.5-0.7-1-1.5c-0.3-0.4-0.6-1-0.8-1.5z"
      />
      <path
        className="f"
        d="m144.6 481.2c0.4 0.5 0.8 0.8 1.2 1.2q0.6 0.5 1.3 1.1l2.7 2.1q1.3 1 2.7 2l2.7 2c1.8 1.3 3.6 2.5 5.5 3.6 0.9 0.6 1.8 1.1 2.6 1.5q0.6 0.3 1.2 0.5c0.3 0.1 0.6 0.2 0.4 0l-6.8 2.1c0.5-1.5 0.9-3 1.2-4.6 0.4-1.6 0.6-3.4 0.9-5.3 0.3-1.8 0.6-3.8 1.1-6l0.3-1.6 0.4-1.6 0.8-2.9c0.5-2 1.1-3.9 1.7-5.8 0.7-2 1.4-4 2.1-5.9l1-2.9 1.2-2.9c0.8-1.8 1.5-3.7 2.4-5.6 0.9-1.8 1.7-3.7 2.7-5.5 0.9-1.8 1.8-3.7 2.9-5.4 2-3.6 4.1-7.1 6.4-10.5 1.2-1.7 2.4-3.4 3.6-5.1 1.3-1.6 2.6-3.3 3.9-4.8 1.4-1.6 2.7-3.3 4.2-4.8q2.2-2.3 4.7-4.4l1 0.4-9.9 22c-1.7 3.7-3.2 7.4-4.8 11.1-1.6 3.7-3.1 7.4-4.6 11.1-2.9 7.5-5.9 14.9-8.6 22.5-0.7 1.9-1.4 3.8-2 5.6l-1.9 5.8c-1.2 3.8-2.7 7.7-5.2 11.1l-0.4 0.5-0.6-0.2c-1.2-0.5-2.2-1.2-3.1-1.9-0.9-0.7-1.8-1.5-2.6-2.3-1.7-1.5-3.3-3.1-4.9-4.8q-2.3-2.5-4.5-5.2-1-1.3-2.1-2.7-0.5-0.7-0.9-1.5c-0.3-0.4-0.7-1-0.9-1.5z"
      />
      <path
        className="f"
        d="m143.4 620.9c0.4 0.5 0.8 0.8 1.2 1.2q0.6 0.6 1.3 1.1l2.6 2.1q1.4 1 2.7 2l2.8 2c1.8 1.3 3.6 2.6 5.4 3.7 0.9 0.5 1.8 1 2.7 1.4q0.6 0.4 1.1 0.6c0.3 0.1 0.6 0.1 0.5 0l-6.8 2c0.5-1.4 0.9-3 1.2-4.6 0.3-1.6 0.6-3.4 0.9-5.2 0.3-1.9 0.6-3.9 1-6l0.4-1.7 0.4-1.6 0.8-2.9c0.5-1.9 1.1-3.8 1.7-5.8 0.6-2 1.3-3.9 2-5.9l1.1-2.9 1.2-2.8c0.7-1.9 1.5-3.8 2.4-5.7 0.9-1.8 1.7-3.7 2.7-5.5 0.9-1.8 1.8-3.7 2.8-5.4 2-3.6 4.1-7.1 6.5-10.5 1.1-1.7 2.4-3.4 3.6-5.1 1.2-1.6 2.5-3.2 3.9-4.8 1.3-1.6 2.7-3.2 4.2-4.7q2.2-2.4 4.6-4.5l1 0.5-9.9 22c-1.6 3.6-3.2 7.3-4.8 11-1.5 3.7-3 7.4-4.6 11.1-2.9 7.5-5.9 14.9-8.6 22.5-0.6 1.9-1.4 3.8-2 5.7l-1.8 5.7c-1.2 3.9-2.8 7.8-5.2 11.1l-0.4 0.6-0.6-0.3c-1.3-0.5-2.2-1.2-3.1-1.9-1-0.7-1.8-1.5-2.7-2.2-1.7-1.6-3.3-3.2-4.8-4.9q-2.3-2.5-4.5-5.2-1.1-1.3-2.1-2.7-0.5-0.7-1-1.4c-0.3-0.5-0.6-1.1-0.8-1.6z"
      />
      <path
        className="g"
        d="m196.7 175.1c0 0 3.8-0.1 10.4-0.4 6.6-0.2 16.1-0.6 27.4-0.8 11.4-0.2 24.6-0.6 38.8-0.7 7.1-0.1 14.4-0.2 21.8-0.3 7.5 0 15-0.1 22.6-0.1 7.6-0.1 15.1-0.1 22.6-0.1 7.4 0 14.8 0.1 21.8 0.1 14.2 0 27.5 0.3 38.8 0.4 11.3 0.1 20.8 0.5 27.4 0.6 6.6 0.2 10.4 0.3 10.4 0.3 0 0-3.8 0.2-10.4 0.4-6.6 0.2-16 0.6-27.4 0.8-11.3 0.2-24.6 0.6-38.7 0.8-7.1 0-14.5 0.1-21.9 0.2-7.4 0.1-15 0.1-22.6 0.2-7.5 0-15.1 0-22.5 0-7.5 0-14.8-0.1-21.9-0.1-14.2 0-27.4-0.3-38.8-0.4-11.3-0.1-20.8-0.5-27.4-0.6-6.6-0.2-10.4-0.3-10.4-0.3z"
      />
      <path
        className="g"
        d="m202.7 200.1c0 0 3.7 0 10.3-0.1 6.5 0 15.8-0.2 26.9-0.1 11.2 0 24.2 0 38.2 0.2 6.9 0.1 14.1 0.2 21.5 0.3 7.3 0.1 14.7 0.2 22.2 0.4 7.4 0.1 14.8 0.3 22.2 0.5 7.3 0.2 14.5 0.4 21.4 0.6 14 0.4 27 1 38.2 1.4 11.1 0.4 20.4 0.9 26.9 1.2 6.5 0.4 10.2 0.6 10.2 0.6 0 0-3.7 0.1-10.2 0.2-6.5 0-15.8 0.1-27 0.1-11.1-0.1-24.2-0.1-38.1-0.2-7-0.1-14.2-0.2-21.5-0.3-7.3-0.2-14.8-0.3-22.2-0.4-7.5-0.2-14.9-0.4-22.2-0.6-7.3-0.2-14.5-0.4-21.5-0.6-14-0.4-27-1-38.1-1.4-11.2-0.4-20.5-0.9-27-1.2-6.5-0.4-10.2-0.6-10.2-0.6z"
      />
      <path
        className="g"
        d="m205.7 229.1c0 0 3.7-0.1 10.1-0.2 6.4-0.1 15.5-0.3 26.5-0.4 11 0 23.8-0.1 37.5-0.1 6.8 0.1 13.9 0.1 21.1 0.1 7.2 0.1 14.5 0.2 21.8 0.3 7.4 0.1 14.7 0.2 21.9 0.3 7.2 0.1 14.2 0.3 21.1 0.4 13.7 0.3 26.5 0.8 37.5 1.1 10.9 0.3 20.1 0.8 26.5 1 6.4 0.3 10 0.5 10 0.5 0 0-3.6 0.1-10 0.2-6.4 0.1-15.6 0.4-26.6 0.4-10.9 0-23.7 0.2-37.4 0.1-6.9 0-14-0.1-21.2-0.1-7.2-0.1-14.5-0.2-21.8-0.2-7.3-0.2-14.6-0.3-21.8-0.4-7.2-0.1-14.3-0.3-21.2-0.4-13.7-0.3-26.5-0.8-37.4-1.1-11-0.3-20.1-0.8-26.5-1-6.4-0.3-10.1-0.5-10.1-0.5z"
      />
      <path
        className="g"
        d="m204.7 317.1c0 0 3.7-0.2 10.2-0.4 6.5-0.2 15.7-0.7 26.8-0.9 11.2-0.3 24.1-0.7 38-1 6.9-0.1 14.1-0.2 21.4-0.3 7.3-0.1 14.7-0.2 22.1-0.2 7.4-0.1 14.8-0.1 22.1-0.2 7.3 0 14.5 0 21.4 0 13.9 0 26.9 0.2 38 0.3 11.1 0 20.4 0.3 26.8 0.4 6.5 0.2 10.2 0.3 10.2 0.3 0 0-3.7 0.2-10.2 0.5-6.4 0.2-15.7 0.6-26.8 0.9-11.1 0.2-24.1 0.6-38 0.9-6.9 0.1-14.1 0.2-21.4 0.3-7.3 0.1-14.7 0.2-22.1 0.3-7.4 0-14.8 0-22.1 0.1-7.3 0-14.4 0-21.4 0-13.9 0-26.8-0.2-37.9-0.3-11.2 0-20.4-0.3-26.9-0.4-6.5-0.2-10.2-0.3-10.2-0.3z"
      />
      <path
        className="g"
        d="m204.7 352.1c0 0 3.8-0.2 10.4-0.5 6.6-0.2 16.1-0.7 27.4-1 11.4-0.3 24.6-0.8 38.8-1.1 7.1-0.1 14.4-0.3 21.8-0.4 7.5-0.1 15-0.2 22.6-0.3 7.6-0.1 15.1-0.2 22.6-0.3 7.4 0 14.7 0 21.8-0.1 14.2 0 27.4 0.1 38.8 0.1 11.3 0.1 20.8 0.3 27.4 0.4 6.6 0.1 10.4 0.2 10.4 0.2 0 0-3.8 0.2-10.4 0.5-6.6 0.2-16 0.7-27.4 1-11.3 0.3-24.6 0.8-38.7 1.1-7.1 0.1-14.4 0.3-21.9 0.4-7.4 0.1-15 0.2-22.6 0.4-7.5 0-15.1 0.1-22.5 0.2-7.5 0-14.8 0.1-21.9 0.1-14.2 0-27.4-0.1-38.8-0.1-11.3 0-20.8-0.3-27.4-0.4-6.6-0.1-10.4-0.2-10.4-0.2z"
      />
      <path
        className="g"
        d="m205.7 381.1c0 0 3.9-0.1 10.6-0.4 6.7-0.2 16.3-0.6 27.9-0.8 11.5-0.2 24.9-0.6 39.3-0.7 7.3-0.1 14.7-0.2 22.3-0.3 7.5 0 15.2-0.1 22.9-0.1 7.7-0.1 15.4-0.1 23-0.1 7.5 0 15 0.1 22.2 0.1 14.4 0 27.8 0.3 39.4 0.4 11.5 0.1 21.1 0.5 27.8 0.6 6.8 0.2 10.6 0.3 10.6 0.3 0 0-3.8 0.2-10.5 0.4-6.8 0.2-16.4 0.6-27.9 0.8-11.5 0.2-25 0.6-39.4 0.8-7.2 0-14.7 0.1-22.2 0.2-7.6 0.1-15.3 0.1-23 0.2-7.7 0-15.3 0-22.9 0-7.6 0-15-0.1-22.2-0.1-14.5 0-27.9-0.3-39.4-0.4-11.6-0.1-21.2-0.5-27.9-0.6-6.7-0.2-10.6-0.3-10.6-0.3z"
      />
      <path
        className="g"
        d="m203.7 460.1c0 0 3.9-0.2 10.7-0.4 6.8-0.2 16.4-0.7 28.1-0.9 11.6-0.3 25.1-0.7 39.7-1 7.2-0.1 14.7-0.2 22.4-0.3 7.6-0.1 15.4-0.2 23.1-0.2 7.8-0.1 15.5-0.1 23.1-0.2 7.7 0 15.2 0 22.4 0 14.6 0 28.1 0.2 39.8 0.3 11.6 0 21.3 0.3 28.1 0.4 6.7 0.2 10.6 0.3 10.6 0.3 0 0-3.9 0.2-10.6 0.5-6.8 0.2-16.5 0.6-28.1 0.9-11.6 0.2-25.2 0.6-39.7 0.9-7.3 0.1-14.8 0.2-22.4 0.3-7.7 0.1-15.4 0.2-23.2 0.3-7.7 0-15.5 0-23.1 0.1-7.6 0-15.1 0-22.4 0-14.5 0-28.1-0.2-39.7-0.3-11.6 0-21.3-0.3-28.1-0.4-6.8-0.2-10.7-0.3-10.7-0.3z"
      />
      <path
        className="g"
        d="m204.7 494.1c0 0 3.9-0.2 10.7-0.5 6.8-0.2 16.5-0.7 28.2-1 11.7-0.3 25.3-0.8 39.9-1.1 7.3-0.1 14.8-0.3 22.5-0.4 7.6-0.1 15.4-0.2 23.2-0.3 7.8-0.1 15.6-0.2 23.2-0.3 7.7 0 15.2 0 22.5-0.1 14.6 0 28.2 0.1 39.9 0.1 11.7 0.1 21.4 0.3 28.2 0.4 6.8 0.1 10.7 0.2 10.7 0.2 0 0-3.9 0.2-10.7 0.5-6.8 0.2-16.5 0.7-28.2 1-11.6 0.3-25.3 0.8-39.8 1.1-7.3 0.1-14.9 0.3-22.5 0.4-7.7 0.1-15.5 0.2-23.3 0.4-7.7 0-15.5 0.1-23.2 0.2-7.6 0-15.2 0.1-22.5 0.1-14.6 0-28.2-0.1-39.9-0.1-11.6 0-21.4-0.3-28.2-0.4-6.8-0.1-10.7-0.2-10.7-0.2z"
      />
      <path
        className="g"
        d="m199.7 520.1c0 0 4.1-0.1 11.1-0.3 7.1-0.1 17.1-0.5 29.2-0.6 12.1-0.1 26.2-0.3 41.4-0.4 7.5 0 15.3-0.1 23.3-0.1 7.9 0 16 0 24 0.1 8.1 0 16.2 0.1 24.1 0.1 7.9 0.1 15.7 0.2 23.3 0.3 15.1 0.1 29.2 0.5 41.3 0.7 12.1 0.2 22.2 0.6 29.2 0.8 7.1 0.3 11.1 0.4 11.1 0.4 0 0-4 0.1-11.1 0.3-7 0.1-17.1 0.5-29.2 0.6-12.1 0.1-26.2 0.4-41.3 0.4-7.6 0-15.4 0.1-23.3 0.1-8 0-16 0-24.1 0-8-0.1-16.1-0.1-24-0.2-8-0.1-15.8-0.2-23.4-0.2-15.1-0.2-29.2-0.6-41.3-0.8-12.1-0.2-22.1-0.6-29.2-0.8-7-0.2-11.1-0.4-11.1-0.4z"
      />
      <path
        className="g"
        d="m210.7 603.1c0 0 3.9-0.2 10.7-0.5 6.7-0.3 16.4-0.8 28.1-1.2 11.6-0.3 25.1-0.8 39.7-1.2 7.2-0.2 14.7-0.3 22.4-0.5 7.6-0.2 15.3-0.3 23.1-0.4 7.7-0.1 15.5-0.3 23.1-0.4 7.6 0 15.2-0.1 22.4-0.2 14.6-0.1 28.1 0 39.8 0 11.6 0 21.3 0.2 28.1 0.2 6.7 0.1 10.6 0.2 10.6 0.2 0 0-3.9 0.2-10.6 0.5-6.8 0.3-16.5 0.8-28.1 1.2-11.6 0.3-25.2 0.9-39.7 1.2-7.3 0.2-14.8 0.3-22.4 0.5-7.7 0.2-15.4 0.3-23.1 0.5-7.8 0.1-15.6 0.2-23.2 0.3-7.6 0-15.1 0.1-22.4 0.2-14.5 0.1-28.1 0-39.7 0-11.6 0-21.3-0.2-28.1-0.2-6.8-0.1-10.7-0.2-10.7-0.2z"
      />
      <path
        className="g"
        d="m200.7 632.1c0 0 4.2-0.2 11.6-0.6 7.4-0.3 17.9-0.9 30.6-1.4 12.6-0.4 27.4-1 43.2-1.5 7.9-0.2 16.1-0.5 24.4-0.7 8.3-0.2 16.7-0.4 25.2-0.6 8.4-0.2 16.9-0.4 25.2-0.5 8.3-0.2 16.4-0.3 24.4-0.4 15.8-0.3 30.5-0.3 43.2-0.4 12.7-0.1 23.2 0 30.6 0 7.4 0.1 11.6 0.1 11.6 0.1 0 0-4.2 0.2-11.6 0.6-7.4 0.3-17.9 0.9-30.5 1.4-12.7 0.4-27.5 1.1-43.3 1.5-7.9 0.3-16.1 0.5-24.4 0.7-8.3 0.2-16.7 0.5-25.1 0.7-8.5 0.1-16.9 0.3-25.2 0.5-8.3 0.1-16.5 0.2-24.4 0.3-15.8 0.3-30.6 0.3-43.3 0.4-12.6 0.1-23.2 0-30.6 0-7.4-0.1-11.6-0.1-11.6-0.1z"
      />
      <path
        className="g"
        d="m210.7 661.1c0 0 4.1-0.2 11.3-0.6 7.1-0.3 17.4-0.8 29.6-1.2 12.3-0.4 26.6-1 42-1.4 7.7-0.2 15.6-0.4 23.7-0.6 8-0.2 16.2-0.4 24.4-0.5 8.2-0.2 16.4-0.3 24.4-0.4 8.1-0.1 16-0.2 23.7-0.3 15.3-0.2 29.7-0.2 42-0.3 12.2 0 22.5 0.2 29.7 0.2 7.1 0.1 11.2 0.1 11.2 0.1 0 0-4.1 0.2-11.2 0.6-7.2 0.3-17.4 0.8-29.7 1.2-12.3 0.4-26.6 1-41.9 1.4-7.7 0.2-15.7 0.4-23.7 0.6-8.1 0.2-16.3 0.4-24.4 0.6-8.2 0.1-16.4 0.2-24.5 0.4-8 0.1-16 0.2-23.7 0.3-15.3 0.1-29.6 0.1-41.9 0.2-12.3 0-22.5-0.1-29.7-0.1-7.2-0.1-11.3-0.2-11.3-0.2z"
      />
      <path
        className="h"
        d="m804.7 177.9l-54.6 483.5-1.5 13.6-2.8 24.5-6 53.4h-30.4-12.5-3.4-0.1l0.3-2.1 6.1-55.5 2.2-20.3 2-17.5 53.2-481.7 0.2-1.6 22.9-37.7 14.1-23.3 0.1-0.2 4.2 26.9 6 37.8z"
      />
      <path
        className="i"
        d="m748.6 675l-2.8 24.5-6 53.4h-42.9-3.4-0.1l0.3-2.1 6.1-55.5 2.2-20.3z"
      />
      <path
        className="j"
        d="m750.1 661.4l-1.5 13.6-2.8 24.5-46-4.2 2.2-20.3 2-17.5z"
      />
      <path
        className="k"
        d="m804.7 177.7l-15.7 31.1-8.1-32.2-14.8 30.3-8.9-31.1 0.2-1.6 22.9-37.7 14.2-23.5 4.2 26.9z"
      />
      <path
        className="g"
        d="m798.7 139.9c-6.8 0-13.5-1.7-18.4-3.4l14.2-23.5z"
      />
      <path
        className="l"
        d="m794.4 113.2l-3.7 21.9-25 47-56.3 570.8h-12.5-3.4-0.1l0.3-2.1 6.1-55.5 2.2-20.3 2-17.5 53.2-481.7 0.2-1.6 22.9-37.7z"
      />
      <path
        className="m"
        d="m472.4 113.6c0 0 32.8-43.3 67.4-19.2 34.6 24.1 26 103.9 66.2 142.8 40.1 39 65.5 167.6-52.6 194.8-118.1 27.2-204-68.6-191.7-136 12.4-67.4 63.1-49.5 61.9-116.3-1.3-66.7 17.3-69.8 17.3-69.8 0 0 19.8-5.6 31.5 3.7z"
      />
      <path
        className="k"
        d="m514 763.5c0 0.3-1-0.2-2.7-1.1-8.4-4.4-33-19.7-33-19.7l0.4-14.3v-1.5c0 0-6-55.2-13.4-86.7-7.4-31.5 5.6-39.9 5.1-53.8-0.2-7-4.2-34.1-8.1-59.1-0.9-5.7-1.8-11.1-2.6-16.3-2.8-17.6-5.1-31.2-5.1-31.2l4.8-0.1 41.6-0.4c0 0 0.9 21.9 1.2 45.5 0.1 4.7 0.1 9.5 0.1 14.2 0 13.5-0.3 26.1-1.2 34-0.5 4.8-1 8.3-1.5 11.1q-0.1 0.4-0.1 0.8-0.1 0.5-0.2 1-0.1 0.3-0.1 0.6c-1.3 6.8-2.1 10.5-1.4 24.9 0.9 21.4-3.8 86.2-3.8 106.7 0 1.2 8.7 13.8 17.1 24.3 4.8 6 9.6 11.2 12.6 13.3 8.4 5.5-9.7 6.4-9.7 7.8z"
      />
      <path
        className="g"
        d="m499.6 584.1c0 0 0.1 1.8-0.3 4.4-0.2 1.3-0.6 2.8-1 4.4-0.3 0.8-0.5 1.6-0.8 2.4q-0.4 1.3-1 2.5c-0.3 0.8-0.7 1.6-1.2 2.4-0.3 0.8-0.9 1.5-1.3 2.2-0.5 0.7-1.1 1.3-1.6 1.9-0.5 0.5-1.1 1-1.6 1.5-0.5 0.4-1 0.7-1.5 1-0.4 0.3-0.9 0.5-1.2 0.6-0.8 0.3-1.2 0.5-1.2 0.5 0 0 0.4-0.3 1-0.8 0.3-0.2 0.6-0.5 1-0.9 0.3-0.3 0.8-0.7 1.2-1.2q0.6-0.8 1.3-1.6c0.3-0.6 0.8-1.3 1.2-1.9 0.4-0.7 0.8-1.4 1.2-2.2 0.3-0.7 0.7-1.5 1-2.3 0.8-1.5 1.4-3.1 1.9-4.6 0.6-1.5 1.1-2.9 1.5-4.2 0.9-2.5 1.4-4.1 1.4-4.1z"
      />
      <path
        className="g"
        d="m478.9 583.5c0 0 0.2 1.2 0.3 3.1 0.2 1.9 0.3 4.3 0.4 6.8 0 1.2 0.1 2.4 0.2 3.6 0 0.5 0 1.1 0.1 1.6 0.1 0.5 0.1 1 0.2 1.5 0.1 0.4 0.1 0.8 0.3 1.2 0.1 0.3 0.1 0.6 0.3 0.9 0.2 0.5 0.4 0.7 0.4 0.7q-0.1 0-0.7-0.5c-0.3-0.2-0.4-0.5-0.7-0.8-0.2-0.4-0.4-0.8-0.6-1.2-0.2-0.5-0.4-1-0.6-1.5-0.1-0.5-0.2-1.1-0.4-1.7-0.2-1.2-0.3-2.5-0.4-3.7-0.1-2.6 0.1-5.1 0.5-6.9 0.3-1.9 0.7-3.1 0.7-3.1z"
      />
      <path
        className="l"
        d="m494 750.3c-15.9-16.9-9-48-16-80.9-9.3-43.3-12.4-49.5-2.5-65.5 5.7-9.3 2.4-44.2-1.5-72.1 8.2 2.9 17.8 5.5 28.3 7.2 0-4.7 0-9.5-0.1-14.2-0.3-23.6-1.2-45.5-1.2-45.5l-41.6 0.4-5.6-9.4c0 0-6.6 6.3-15.2 14.3q-0.7 6-0.8 12.3c0 0 8 7 21.9 14.1 0.8 5.2 1.7 10.6 2.6 16.3 3.9 25 7.9 52.1 8.1 59.1 0.5 13.9-12.5 22.3-5.1 53.8 7.4 31.5 13.4 86.7 13.4 86.7v1.5c-0.6-3.1-0.4-5.2-0.4-5.2l-0.3-1.3c0 0-16.4 17.1-9.6 24.8 3.5 4 12.6 12.5 23.4 18.7l19.5-3 5.6-0.9c-10.7-2-17.9-5.9-22.9-11.2z"
      />
      <path
        className="g"
        d="m523.1 771.7c-9.6 3.6-21.2-0.3-31.3-6.3-10.8-6.2-19.9-14.7-23.4-18.7-6.8-7.7 9.6-24.8 9.6-24.8l0.3 1.3c0 0-0.2 2.1 0.4 5.2 1 5.7 4.4 14.9 15.3 21.9q3.2 2 7.2 3.7c24 10 9.7-11.2 9.2-11.9q0.4 0.1 0.7 0.3c19.1 8.6 31.5 22 12 29.3z"
      />
      <path
        className="k"
        d="m598.4 604.5c-28.8 21.8-50.6 67.7-58.5 78.3-7.8 10.7 5.6 42.2 5.6 42.2 0 0-2 2.5-5.7 3.9-3 1.2-7.2 1.7-12.4-0.1-11.6-4.2-7.9-43.2-7.9-43.2 1.5-1.2 2.9-2.8 4.2-4.7 11.2-16.3 17.4-55.5 23.2-75 6.5-21.8 31.1-32 31.1-32l-24.3-37.1-16.1-24.4-6.5-9.9c-0.9-24.8 13.4-34 23.4-37.4 5.4-1.9 9.6-2 9.6-2q1.5 1 3 2.3c12.6 10.5 21.6 29.2 28 48.6 8.2 24.8 12 51 13.5 63.6 2.8 23.2-10.2 26.9-10.2 26.9z"
      />
      <path
        className="g"
        d="m597 585.5c0 0-0.4 0.1-1 0.5-0.6 0.3-1.4 0.8-2.3 1.5q-0.7 0.5-1.5 1.1c-0.5 0.4-1 0.9-1.5 1.4-0.4 0.5-1 1-1.4 1.6q-0.7 0.8-1.3 1.8c-0.4 0.6-0.7 1.3-1 1.9-0.3 0.7-0.5 1.4-0.8 2-0.2 0.7-0.3 1.3-0.5 2-0.2 0.6-0.2 1.2-0.3 1.8-0.1 0.5-0.3 1.1-0.3 1.5q0 0.7-0.1 1.3c0 0.7-0.1 1-0.1 1 0 0-0.1-0.3-0.2-1-0.1-0.7-0.4-1.7-0.4-2.9 0-0.6-0.1-1.3 0-1.9 0.1-0.7 0.2-1.5 0.3-2.2 0.3-0.7 0.4-1.5 0.7-2.3 0.4-0.7 0.7-1.5 1.2-2.2q0.6-1 1.4-2c0.5-0.6 1.2-1.1 1.7-1.6 1.2-1 2.4-1.7 3.6-2.2 2.2-1 3.8-1.1 3.8-1.1z"
      />
      <path
        className="l"
        d="m595.1 514c-6.4-19.4-15.4-38.1-28-48.6l-12.6-0.3c-10 3.4-24.3 12.6-23.4 37.4l6.5 9.9 16.1 24.4 24.3 37.1c0 0-24.6 10.2-31.1 32-5.8 19.5-12 58.7-23.2 75-1.3 1.9-2.7 3.5-4.2 4.7 0 0-3.7 39 7.9 43.2 5.2 1.8 9.4 1.3 12.4 0.1-20.4 0.8-21.3-28.9-11.4-42.8 10-14.1 25.9-64.9 29.6-79.3 3.7-14.4 28.3-29.7 29.7-28.3 0.9 0.9-11.6-24.8-23.7-45.2 10.6-4.1 21.1-10.4 31.1-19.3z"
      />
      <path
        className="g"
        d="m524 680.8c0 0-15.4 3.8-19.8 10.2-4.3 6.5 6.2 19.5 8.1 31.9 1.8 12.3 4.6 26.6 24.7 25.9 20.1-0.6 37.1-12.3 8.5-23.8 0 0-15 7.2-19.6-6.1-4.7-13.3-1.9-38.1-1.9-38.1z"
      />
      <path
        className="g"
        d="m597.3 500.6q-2.8 1.9-5.6 3.7c-16.3 10.2-32 16.2-46.8 19.2-15.4 3.2-29.8 3.1-42.7 1.3-11.4-1.7-21.6-4.8-30.4-8.3-4.4-1.7-8.5-3.6-12.1-5.5-13.9-7.1-21.9-14.1-21.9-14.1q0.1-6.3 0.8-12.3c2.3-22.4 9.4-41.5 18.4-57.5 4-7.1 8.4-13.6 12.9-19.5 13.1-17 27.1-28.6 35.7-34.9q1.4-1.1 2.5-1.9c3.6-2.5 5.7-3.7 5.7-3.7l46.4-6.2c2.1 1.9 3.8 4.4 5.3 7.6 6.6 13.8 8.1 38.2 8.1 57.4 0 15.6-1 27.7-1 27.7 6.1 16.1 24.7 47 24.7 47z"
      />
      <path
        className="k"
        d="m533.3 402.8q-0.3 1-1.2 1.8c-8.4 7-30.6-6.5-30.6-6.5 0 0-19.1 13.4-33.4 9.1q-1.4-0.5-2.8-1.2c0 0-5.4-1.9-13.4-5.1-21.8-8.8-63.3-27.6-71.5-45.9 0 0 1.7-2.3 4.3-6.1 9-12.9 30-42.4 39.3-51.4l13.5 29.7-23.7 21.3c0 0 23.3 23.6 40.8 35.2 4.4 2.9 8.3 5 11.5 5.9q0.5 0.1 1 0.2c0 0 33.9-20.9 39.5-16.7 5.1 3.9 29.6 21.6 26.7 29.7z"
      />
      <path
        className="l"
        d="m533.3 402.8q-0.3 1-1.2 1.8c-8.4 7-30.6-6.5-30.6-6.5 0 0-19.1 13.4-33.4 9.1q-1.4-0.5-2.8-1.2c0 0-5.4-1.9-13.4-5.1-21.8-8.8-63.3-27.6-71.5-45.9 0 0 1.7-2.3 4.3-6.1 19.5 17.5 64.6 55 90.3 51.1 32.3-4.9 28.2-21.5 58.3 2.8z"
      />
      <path className="n" d="m532.1 404.6l-27.6-15.3" />
      <path className="n" d="m533.2 400.5l-26.2-18.8" />
      <path className="o" d="m391.7 349.5c0 0 5.4 10 0 15.4" />
      <path
        className="g"
        d="m391.7 349.5c0 0 1.1 0.6 2 1.9 1.1 1.4 2 3.4 2.2 5.7 0.1 1.2 0 2.4-0.3 3.5-0.3 1.1-0.8 2-1.4 2.7-0.7 0.7-1.2 1.1-1.7 1.3-0.5 0.2-0.8 0.3-0.8 0.3 0 0 0.1-0.3 0.2-0.8 0-0.2 0.1-0.5 0.2-0.8q0-0.4 0.1-1c0.1-0.3 0.1-0.7 0.1-1.1 0.1-0.3 0-0.8 0.1-1.2-0.1-0.8-0.1-1.6-0.2-2.6-0.1-1.8-0.4-3.7-0.4-5.2-0.1-1.6-0.1-2.7-0.1-2.7z"
      />
      <path
        className="p"
        d="m468.1 407.2q-1.4-0.5-2.8-1.2c0 0-5.4-1.9-13.4-5.1-0.6-4.9-0.6-11.6 2.7-17.2 4.4 2.9 8.3 5 11.5 5.9-0.6 5.1-0.8 12.5 2 17.6z"
      />
      <path
        className="c"
        d="m466.2 389.4c0 4.2-3.4 7.6-7.5 7.6-4.2 0-7.6-3.4-7.6-7.6 0-4.1 3.4-7.5 7.6-7.5 4.1 0 7.5 3.4 7.5 7.5z"
      />
      <path
        className="k"
        d="m746.7 270.9l-2.1 19.5-0.7 5.7-2.8 0.8-10.6 3.2-86.2 25.9c-21-3.1-60.9-27.2-60.9-27.2l1.8-11.9 2.8-18.7c2.8 6.4 60.9 27.1 60.9 27.1 4.3-3.7 38-4.3 53.8-7.1 5.8-1 14-3.9 21.9-7.2 4-1.7 8-3.5 11.6-5.1 4.2-1.9 7.9-3.7 10.5-5z"
      />
      <path
        className="l"
        d="m744.6 290.4l-0.7 5.7-2.8 0.8-10.6 3.2-86.2 25.9c-21-3.1-60.9-27.2-60.9-27.2l1.8-11.9c9.6 7.1 43.5 30.7 60.9 26.4 16.8-4.2 77.4-18.1 98.5-22.9z"
      />
      <path
        className="p"
        d="m741.1 296.9l-10.6 3.2c-2.8-5.6-4.8-13.6-5.9-19.1 4-1.7 8-3.5 11.6-5.1z"
      />
      <path
        className="k"
        d="m799 289.9c-2.4 10.1-7 16.2-7 16.2 0 0-25-2-27.5-18.9-0.4-2.1-0.3-4.5 0.1-7.1 4.2-23.4 33.2-18.3 33.2-18.3 3.5 11 3 20.6 1.2 28.1z"
      />
      <path
        className="l"
        d="m799 289.9c-2.4 10.1-7 16.2-7 16.2 0 0-25-2-27.5-18.9 7.3 3.7 22 8.4 34.5 2.7z"
      />
      <path
        className="g"
        d="m769.7 271.6c0 0 1.8-0.6 4.3-0.9 2.6-0.4 6.1-0.5 9.5-0.3 3.4 0.2 6.8 0.6 9.3 1.3 2.6 0.5 4.3 1.2 4.3 1.2 0 0-1.8 0.6-4.4 0.9-2.6 0.4-6 0.5-9.4 0.3-3.4-0.2-6.8-0.7-9.4-1.3-2.5-0.5-4.2-1.3-4.2-1.2z"
      />
      <path
        className="g"
        d="m764.4 282.2c0 0 2-0.6 4.9-1 1.5-0.3 3.3-0.5 5.1-0.6 1-0.1 1.9-0.2 2.9-0.2q1.5 0 3 0 1.5 0 2.9 0c1 0 2 0.1 2.9 0.2 1.9 0.1 3.6 0.3 5.1 0.6 3 0.4 4.9 1 4.9 1 0 0-1.9 0.6-4.9 1.1-1.5 0.2-3.2 0.4-5.1 0.5-0.9 0.1-1.9 0.2-2.9 0.2q-1.4 0-2.9 0.1-1.5-0.1-3-0.1c-1 0-1.9-0.1-2.9-0.2-1.8-0.1-3.6-0.3-5.1-0.5-2.9-0.5-4.9-1.1-4.9-1.1z"
      />
      <path
        className="g"
        d="m766.5 292.9c0 0 1.7-0.5 4.3-0.7 2.6-0.2 6-0.2 9.4 0.1 3.4 0.3 6.8 0.9 9.3 1.7 2.5 0.7 4.1 1.4 4.1 1.4 0 0-1.8 0.5-4.3 0.7-2.6 0.2-6.1 0.2-9.4-0.1-3.4-0.3-6.8-0.9-9.3-1.7-2.5-0.6-4.1-1.4-4.1-1.4z"
      />
      <path
        className="o"
        d="m737.3 276.9c-2.2-7.4 0.8-18.6 19.4-22.5 0 0 12.1 11.8 21.1 18.8 0 0-9 14.3-21.5-4 0 0-5.1 12.5-10.9 14.4-1.1 0.3-2.2 0.3-3.3-0.2"
      />
      <path
        className="g"
        d="m737.3 276.9c-0.2-0.6-0.4-1.3-0.6-2q-0.2-1-0.3-2.1c-0.1-0.7 0-1.5 0-2.2 0.1-0.7 0.1-1.4 0.3-2.2q0.2-1 0.6-2.1c0.3-0.7 0.6-1.3 1-2 0.3-0.7 0.8-1.2 1.2-1.9 0.4-0.6 0.9-1.1 1.4-1.6 0.5-0.6 1.1-1.1 1.6-1.6 0.6-0.5 1.2-0.9 1.8-1.3 0.6-0.5 1.2-0.8 1.9-1.2q0.9-0.6 1.9-1c0.7-0.3 1.4-0.6 2-0.9l2.1-0.8c1.4-0.5 2.8-0.8 4.2-1.2l0.8-0.2 0.6 0.6q5.2 4.8 10.5 9.5c1.7 1.5 3.4 3.1 5.3 4.6l5.3 4.4 1.3 1.1-0.8 1.3c-0.5 0.7-0.8 1.1-1.3 1.6q-0.6 0.7-1.3 1.3c-0.5 0.5-1 0.8-1.5 1.2-0.6 0.4-1.1 0.8-1.7 1-0.6 0.2-1.2 0.6-1.9 0.7-0.7 0.1-1.3 0.3-2 0.3-0.7 0-1.4 0-2-0.1-0.7-0.1-1.4-0.2-2-0.5-0.6-0.2-1.2-0.4-1.8-0.7l-1.6-1c-0.5-0.3-0.9-0.8-1.4-1.2-0.4-0.4-1-0.7-1.3-1.2l-1.2-1.3c-0.4-0.5-0.8-0.9-1.2-1.4l-2-2.9 2.2-0.2c-0.8 1.7-1.7 3.3-2.6 4.9q-1.4 2.4-3.2 4.6-0.9 1.1-1.9 2c-0.4 0.3-0.7 0.7-1.1 1-0.4 0.2-0.7 0.5-1.1 0.8-0.5 0.2-0.8 0.5-1.3 0.6l-0.7 0.3-0.7 0.1c-0.4 0-1 0-1.4-0.1-0.5-0.1-0.9-0.3-1.3-0.5 0.5 0.1 0.9 0.3 1.3 0.3 0.5 0 0.9-0.1 1.3-0.2l0.7-0.2c0.1-0.1 0.3-0.2 0.5-0.3 0.4-0.1 0.8-0.4 1.1-0.7 0.4-0.2 0.7-0.6 1-0.9 0.3-0.3 0.6-0.6 0.9-0.9q0.8-1.1 1.5-2.2c1-1.5 1.8-3.1 2.6-4.7 0.8-1.6 1.5-3.2 2.1-4.8l0.7-2.1 1.5 1.8 2.1 2.6c0.3 0.4 0.7 0.8 1.1 1.1l1.1 1.2c0.4 0.4 0.8 0.6 1.2 1 0.4 0.3 0.8 0.6 1.3 0.9l1.3 0.7c0.4 0.2 0.9 0.3 1.3 0.5 0.5 0.2 0.9 0.2 1.4 0.3 0.4 0.1 0.9 0 1.3 0 0.5 0 0.9-0.2 1.4-0.3 0.4 0 0.8-0.3 1.2-0.5q1.3-0.6 2.4-1.6 0.5-0.5 1-1.1c0.3-0.3 0.7-0.8 0.9-1.1l0.4 2.4-5.5-4.5c-1.9-1.5-3.6-3.1-5.3-4.7-1.8-1.6-3.6-3.2-5.2-4.9q-2.6-2.4-5.1-5l1.5 0.5c-1.4 0.3-2.7 0.5-4 0.9l-2 0.6c-0.6 0.2-1.2 0.5-1.9 0.7-0.6 0.2-1.2 0.5-1.8 0.8-0.6 0.3-1.2 0.6-1.8 0.9-0.5 0.4-1.1 0.7-1.7 1.1-0.5 0.4-1 0.8-1.5 1.3-0.5 0.4-1 0.8-1.5 1.4-0.4 0.5-0.9 0.9-1.2 1.5-0.4 0.6-0.8 1.1-1.1 1.7q-0.5 0.9-0.8 1.9c-0.2 0.6-0.3 1.3-0.5 1.9-0.1 0.7-0.2 1.4-0.3 2.1 0 0.7 0 1.4 0.1 2 0 0.7 0.1 1.4 0.2 2.1z"
      />
      <path
        className="c"
        d="m592.8 317.5l-11.1-6.1q0.1 3.2-0.6 6.1c-2 9.5-8.7 16.2-8.7 16.2 0 0 2.2 17.4-4.8 31.2-5 10-14.9 18.1-33.7 16.5-45-3.7-57.9-70-57.9-70-4.7 0.5-26.9 22.3-26.9 22.3-3.9-0.7-7.5-2.1-10.7-3.9-15.8-8.7-23.2-27.6-23.2-27.6 8.8-7.5 38.5-39.9 38.5-39.9 38.5-25.5 104.8-17.6 104.8-17.6 13 13.9 42.2 26.4 42.2 26.4-6.6 8.4-7.9 26.7-8 37.6-0.1 5.2 0.1 8.8 0.1 8.8z"
      />
      <path
        className="q"
        d="m567.6 364.9c-5 10-14.9 18.1-33.7 16.5-45-3.7-57.9-70-57.9-70-4.7 0.5-26.9 22.3-26.9 22.3-3.9-0.7-7.5-2.1-10.7-3.9 8.9-8.9 33.3-32.2 45-30 0 0 15.3 99.3 84.2 65.1z"
      />
      <path
        className="q"
        d="m592.8 317.5l-11.1-6.1c0 0-1.9-4.6-5.5-11.1 4.4 2.6 10.8 6.1 16.5 8.4-0.1 5.2 0.1 8.8 0.1 8.8z"
      />
      <path
        className="g"
        d="m506.4 340.5c0 0 0.6 0.3 1.7 0.7 1 0.4 2.5 0.9 4.4 1.5 0.9 0.3 1.9 0.6 2.9 0.9 1.1 0.3 2.2 0.5 3.4 0.7 1.2 0.3 2.4 0.4 3.6 0.6 1.3 0.1 2.5 0.2 3.8 0.2 1.3-0.1 2.5 0 3.7-0.3q1-0.1 1.9-0.2c0.6-0.1 1.1-0.3 1.7-0.4q0.9-0.2 1.7-0.4 0.8-0.3 1.6-0.6 0.7-0.3 1.4-0.5c0.5-0.2 0.9-0.5 1.4-0.7 0.8-0.5 1.6-0.8 2.3-1.2q1-0.7 1.7-1.2c0.9-0.6 1.4-1 1.4-1 0 0-0.4 0.5-1.2 1.3q-0.6 0.6-1.5 1.4c-0.6 0.6-1.4 1.1-2.2 1.6-0.4 0.3-0.8 0.6-1.3 0.9q-0.7 0.3-1.5 0.7-0.8 0.4-1.6 0.7c-0.6 0.2-1.2 0.4-1.8 0.6-0.6 0.2-1.2 0.4-1.8 0.5q-1 0.2-1.9 0.3c-1.3 0.3-2.7 0.3-4 0.3-1.3 0-2.7-0.1-4-0.2-1.3-0.3-2.5-0.4-3.7-0.8q-1.9-0.4-3.5-1c-1-0.3-2-0.8-2.9-1.2-1.8-0.8-3.2-1.6-4.2-2.2-1-0.6-1.5-1-1.5-1z"
      />
      <path
        className="g"
        d="m455.4 266.9c0 0 1.8 2.1 4.1 5.5 1.2 1.7 2.5 3.7 3.8 5.9 0.6 1.1 1.3 2.3 1.9 3.5q1 1.8 2 3.6c0.6 1.2 1.1 2.5 1.7 3.7q0.8 1.9 1.6 3.6c0.8 2.5 1.6 4.8 2.2 6.7 0.5 2 0.7 3.7 0.9 4.9 0.3 1.2 0.4 1.9 0.4 1.9 0 0-0.3-0.7-0.7-1.8-0.4-1.1-0.9-2.7-1.6-4.6-0.8-1.9-1.8-4.1-2.7-6.4q-0.9-1.8-1.7-3.6c-0.6-1.2-1.2-2.4-1.8-3.6q-0.9-1.8-1.8-3.6c-0.6-1.2-1.2-2.4-1.8-3.5-1.2-2.2-2.4-4.3-3.3-6.1-1.9-3.7-3.2-6.1-3.2-6.1z"
      />
      <path
        className="g"
        d="m572.4 333.7c0.7-0.8 1.3-1.6 1.9-2.5 0.3-0.4 0.5-0.8 0.8-1.2 0.3-0.5 0.6-0.9 0.8-1.3 0.5-1 1.1-1.8 1.5-2.7 0.4-1 0.9-1.8 1.3-2.8l0.5-1.4c0.2-0.5 0.4-1 0.5-1.5l0.7-2.9 0.4-3 0.1-2.9v0.2c-0.8-1.7-1.6-3.5-2.5-5.2l-2.7-5.2c-0.4-0.8-1-1.7-1.4-2.5l-1.5-2.6c-0.5-0.8-0.9-1.7-1.5-2.5l-1.5-2.4c-1.1-1.6-2.1-3.3-3.2-4.9l-3.4-4.8c-0.6-0.7-1.1-1.6-1.8-2.3l-1.8-2.3q-1.9-2.2-3.7-4.5 2.1 2 4.1 4.1l2.1 2.1c0.7 0.7 1.3 1.5 1.9 2.3l3.7 4.6c1.3 1.5 2.3 3.2 3.4 4.8l1.7 2.5c0.6 0.8 1 1.6 1.5 2.5l1.5 2.5c0.5 0.9 1 1.6 1.5 2.6l2.7 5.2c0.9 1.8 1.7 3.6 2.4 5.4l0.1 0.2v0.1l-0.1 3.2-0.3 1.6-0.3 1.5-0.9 3c-0.1 0.6-0.4 1-0.6 1.5l-0.6 1.4c-0.4 1-1 1.9-1.5 2.8-0.5 0.9-1.1 1.7-1.7 2.6-0.3 0.4-0.7 0.8-1 1.2-0.3 0.4-0.6 0.9-0.9 1.3q-1.1 1.1-2.2 2.2z"
      />
      <path
        className="g"
        d="m557.8 247c0 0 0.2 1.5 0.4 3.7 0.2 2.2 0.2 5.2 0.3 8.1 0 1.5 0 3-0.1 4.3-0.1 1.4 0 2.7-0.1 3.8-0.1 2.2-0.3 3.7-0.3 3.7 0 0-0.4-1.4-0.8-3.6-0.1-1.1-0.4-2.4-0.4-3.8-0.1-1.4-0.1-2.9-0.1-4.4 0-1.5 0-3 0.1-4.4 0.1-1.3 0.2-2.6 0.4-3.7 0.2-2.3 0.6-3.7 0.6-3.7z"
      />
      <path
        className="r"
        d="m534.8 276.3c-0.2-0.7-1 10.4-1.5 9.5-0.2-0.5-9.8-15.9-19.5-22-10.9-6.8-22.1-4.3-22.1-4.3l-2-28.4-0.6-8.6-0.8-11.5 21.8 1.6 6.7 0.5c0 0 0.4 10.2 0.7 19.5 0.4 7.4 0.6 14.1 0.7 14.6 0-0.7 12.5 8.5 12.5 7.8 0.3 0.8 4.4 22 4.1 21.3z"
      />
      <path
        className="l"
        d="m517.5 232.6c-11.8 8.3-22.1 3.1-27.8-1.5l-0.6-8.6c4.8-3.1 13-7 21-9.9l6.7 0.5c0 0 0.4 10.2 0.7 19.5z"
      />
      <path
        className="s"
        d="m534.2 286.5c-0.4 0.4 2.7-25.2-16-39.3l-0.8-19.5c0 0 30.4 15.2 27 50.7 0 0-4.9-13.8-9.1-21.1-4-7 4.2 24.1-1.1 29.2z"
      />
      <path
        className="s"
        d="m534.2 285.8c0 0-12.2-19.4-18.8-23.4-6.7-4-26.2-16.5-27-31.5 0 0-7.3-3.4-8.9 9.3-1.5 12.6 0.8 22.8 0.8 22.8 0 0 19.5 23.1 32.3 28.3 0 0-3.4-25.6 2-24.2 5.4 1.4 19.6 18.7 19.6 18.7z"
      />
      <path
        className="k"
        d="m456.9 162.4c0 0-14.5-3.7-16.6 9.6-2.2 13.3 9.5 38.3 32.1 26.6z"
      />
      <path className="o" d="m447.7 180.4c0 0 8-11.2 16 6.1" />
      <path
        className="g"
        d="m447.7 180.4c0 0 0.1-0.4 0.4-0.9 0.4-0.5 0.9-1.2 1.8-1.9 0.4-0.4 0.9-0.7 1.5-1 0.6-0.2 1.2-0.5 2-0.5q0.5-0.1 1.1-0.1c0.4 0.1 0.8 0 1.1 0.2l1.1 0.4c0.4 0.1 0.7 0.3 1 0.5 0.7 0.4 1.2 0.9 1.8 1.4 0.5 0.5 0.9 1.1 1.3 1.6 0.4 0.5 0.8 1.1 1 1.6q0.5 0.8 0.8 1.5c0.8 2 1.1 3.3 1.1 3.3 0 0-0.9-1.1-2-2.7q-0.5-0.6-1-1.3-0.5-0.7-1.2-1.4c-0.4-0.4-0.8-0.9-1.3-1.3-0.4-0.4-0.9-0.8-1.4-1.1-0.3-0.2-0.5-0.3-0.8-0.5l-0.8-0.3c-0.3-0.1-0.6-0.1-0.9-0.1q-0.4-0.2-0.8-0.1c-0.6 0-1.1 0.1-1.6 0.2-0.5 0.2-1 0.4-1.4 0.6-0.9 0.4-1.6 0.9-2.1 1.3-0.5 0.3-0.7 0.6-0.7 0.6z"
      />
      <path
        className="l"
        d="m468.8 185.6c-0.8 4-6 6.5-11.8 5.4-5.7-1.1-9.7-5.3-8.9-9.4 0.8-4.1 6.1-6.5 11.8-5.4 5.7 1.1 9.7 5.3 8.9 9.4z"
      />
      <path
        className="t"
        d="m461.9 191.8c0 0-0.8 0.6-2.1 1.8-0.6 0.6-1.2 1.4-2 2.3-0.6 1-1.4 2.1-1.9 3.3-0.6 1.2-0.9 2.6-1.1 4.1q0 0.5-0.1 1.1 0 0.5 0.1 1.1c0 0.8 0.2 1.6 0.3 2.4 0 0.4 0.2 0.7 0.3 1.1l0.3 1.1c0.2 0.4 0.4 1 0.5 1.3 0.2 0.3 0.3 0.6 0.5 0.9 0.9 1.3 2 2.4 3.3 3.3 2.7 1.8 6.2 2.6 9.3 2.4 3.2-0.3 5.9-1.6 7.6-3.6 0.9-0.9 1.4-2.1 1.9-3.1 0.4-1 0.7-2 0.9-2.9q0.3-1.2 0.3-2 0.1-0.7 0.1-0.7 0 0 0.2 0.7c0.2 0.5 0.4 1.2 0.5 2.1 0.1 0.9 0.2 2 0.1 3.3-0.2 1.3-0.5 2.9-1.3 4.4-0.8 1.5-2.1 3-3.7 4.2-1.7 1.2-3.7 2-5.8 2.4-2.2 0.5-4.5 0.5-6.7 0.1-2.2-0.5-4.5-1.3-6.4-2.6-2-1.4-3.8-3.2-4.9-5.3-0.3-0.5-0.6-1.1-0.8-1.7-0.3-0.6-0.3-1-0.5-1.4l-0.1-0.2v-0.1-0.1-0.2l-0.1-0.4-0.2-0.8c0-0.5-0.2-1-0.2-1.5 0-1.1-0.2-2.2 0-3.2q0.1-0.8 0.2-1.5 0.2-0.8 0.3-1.5c0.3-0.9 0.7-1.8 1.1-2.7 0.5-0.7 0.8-1.5 1.4-2.2 1-1.3 2.1-2.3 3.2-3.1 1-0.7 2-1.3 2.8-1.7 0.8-0.4 1.5-0.6 2-0.7 0.4-0.2 0.7-0.2 0.7-0.2z"
      />
      <path
        className="k"
        d="m532.7 152.4c0 0 12.3-8.5 19 3.1 6.7 11.7 4.4 39.3-20.8 36.2z"
      />
      <path className="o" d="m547.6 166c0 0-11.4-7.6-12.8 11.4" />
      <path
        className="g"
        d="m547.6 166c0 0-0.3-0.2-0.9-0.3-0.5-0.2-1.4-0.4-2.3-0.5-0.5-0.1-1 0-1.6 0-0.5 0-1 0.1-1.5 0.3q-0.4 0.1-0.8 0.4c-0.2 0.1-0.5 0.2-0.7 0.4l-0.7 0.6c-0.2 0.2-0.4 0.5-0.5 0.7-0.5 0.4-0.7 1-1 1.6-0.4 0.5-0.6 1.1-0.8 1.7q-0.4 0.8-0.6 1.6-0.3 0.9-0.5 1.6c-0.5 1.9-0.9 3.3-0.9 3.3 0 0-0.2-1.4-0.2-3.5q0.1-0.8 0.2-1.7c0.1-0.6 0.2-1.2 0.4-1.9 0.3-0.6 0.4-1.3 0.8-1.9 0.3-0.7 0.6-1.4 1.1-1.9 0.2-0.3 0.5-0.6 0.7-0.9l0.9-0.7c0.3-0.3 0.7-0.4 1-0.6q0.6-0.3 1.1-0.4c0.7-0.2 1.4-0.1 2.1-0.1 0.6 0.1 1.2 0.2 1.7 0.4 1 0.3 1.8 0.8 2.3 1.1 0.5 0.4 0.7 0.7 0.7 0.7z"
      />
      <path
        className="l"
        d="m548.9 166.9c2.4 3.4 0.5 8.8-4.3 12.2-4.8 3.3-10.6 3.2-13-0.2-2.3-3.4-0.4-8.8 4.4-12.2 4.8-3.3 10.6-3.3 12.9 0.2z"
      />
      <path
        className="t"
        d="m537.9 185.8c0 0 0.2-0.1 0.7-0.1 0.5 0 1.2-0.1 2.1 0 0.9 0.1 2 0.3 3.3 0.6 1.2 0.4 2.7 0.9 4.1 1.8 0.7 0.4 1.3 1 2.1 1.6 0.6 0.6 1.3 1.3 1.9 2.1q0.4 0.6 0.8 1.3 0.4 0.6 0.7 1.3c0.5 1 0.8 2 1.1 3 0.2 0.5 0.2 1 0.3 1.6l0.2 0.8v0.4l0.1 0.2v0.1 0.2c0 0.5 0.1 0.9 0.1 1.5-0.1 0.6-0.1 1.3-0.2 1.9-0.3 2.4-1.3 4.7-2.7 6.6-1.4 1.9-3.2 3.5-5.1 4.7-2 1.2-4.1 2-6.3 2.3-2.1 0.4-4.3 0.3-6.3-0.2-1.9-0.5-3.6-1.5-4.9-2.7-1.3-1.1-2.2-2.4-2.8-3.6-0.6-1.2-0.9-2.3-1.1-3.2-0.2-0.9-0.2-1.6-0.3-2.1q0-0.7 0-0.7 0 0 0.3 0.6 0.4 0.7 1.1 1.8c0.4 0.7 1 1.6 1.8 2.4 0.8 0.8 1.7 1.6 2.9 2.2 2.2 1.2 5.2 1.6 8.3 0.7 3-0.8 6-2.8 7.9-5.4 0.9-1.3 1.6-2.8 1.9-4.3 0.1-0.4 0.1-0.7 0.2-1 0-0.4 0-1 0-1.4l-0.1-1.1c0-0.4 0-0.9-0.1-1.3-0.2-0.7-0.3-1.6-0.5-2.3q-0.2-0.5-0.4-1-0.2-0.6-0.5-1c-0.6-1.4-1.5-2.5-2.4-3.5-0.9-1-2-1.7-3-2.4-0.9-0.5-1.9-1.1-2.6-1.4-1.6-0.7-2.6-1-2.6-1z"
      />
      <path
        className="k"
        d="m452.9 162.1c0 0 14.6 68 52.9 64.6 38.3-3.4 29-75.7 29-75.7 0 0-48.2 3.7-59.9-20.7 0 0-11.5 30.2-22 31.8z"
      />
      <path
        className="g"
        d="m507 141.7c0 0 0.7-1.1 2.3-2.1 0.4-0.3 0.9-0.5 1.4-0.7 0.5-0.1 1.1-0.4 1.7-0.4 1.2-0.3 2.6-0.1 3.8 0.3 0.6 0.3 1.3 0.4 1.8 0.8 0.6 0.3 1.1 0.6 1.5 1 1 0.8 1.7 1.6 2.2 2.4 0.6 0.7 0.9 1.4 1.2 1.9 0.2 0.5 0.4 0.8 0.4 0.8 0 0-0.3-0.2-0.7-0.6-0.4-0.3-0.9-0.9-1.6-1.4q-0.6-0.4-1.1-0.9c-0.4-0.3-0.9-0.5-1.3-0.8-0.4-0.4-1-0.5-1.4-0.8-0.5-0.3-1-0.4-1.5-0.6q-0.8-0.3-1.6-0.4c-0.5-0.1-1-0.1-1.5-0.1-1.1 0-2 0.2-2.8 0.5-1.7 0.5-2.8 1.1-2.8 1.1z"
      />
      <path
        className="g"
        d="m467.6 156.6c0 0-0.1-1.2 0.2-3 0.1-0.9 0.4-1.9 0.8-2.9 0.5-1.1 1.1-2.2 1.9-3.1 0.9-0.9 2-1.7 3.2-2.1q0.4-0.1 0.8-0.2 0.4-0.1 0.9-0.1 0.4 0 0.7 0 0.4 0 0.8 0.1c0.4 0.1 0.8 0.1 1.2 0.3q0.5 0.2 0.8 0.4c0.5 0.2 0.8 0.4 0.8 0.4 0 0-0.3-0.1-0.8-0.1q-0.4 0-0.9 0c-0.4 0-0.8 0.1-1.2 0.1-0.4 0-0.8 0.1-1.2 0.2q-0.4 0.1-0.7 0.2-0.3 0.1-0.6 0.3c-0.5 0.1-0.8 0.5-1.3 0.7q-0.6 0.5-1.1 1c-0.7 0.8-1.3 1.7-1.8 2.6-0.5 0.9-1 1.7-1.3 2.5-0.7 1.6-1.2 2.7-1.2 2.7z"
      />
      <path
        className="g"
        d="m469.7 176.7c0 0-0.2-0.4-0.3-1.3-0.1-0.8-0.2-2.1 0.1-3.6 0.3-1.4 0.9-3.2 2.2-4.8 0.7-0.8 1.5-1.6 2.5-2.2 0.9-0.6 2.1-1 3.2-1.3 0.5-0.1 1-0.2 1.7-0.2 0.5 0 0.8 0 1.4 0q1.8 0.1 3.2 0.6c2 0.7 3.6 2.1 4.5 3.5 0.8 1.4 1.1 2.7 1.1 3.5 0.1 0.9-0.1 1.4-0.1 1.4 0 0-0.3-0.4-0.9-0.9-0.6-0.6-1.4-1.3-2.4-1.8-0.5-0.2-1-0.5-1.6-0.6-0.6-0.2-1.2-0.2-1.8-0.3-0.3 0-0.6 0-0.9-0.1-0.3 0-0.6 0.1-0.9 0.1-0.3 0-0.8 0.1-1.3 0.1-0.2 0-0.6 0.1-0.8 0.2q-1 0.1-1.8 0.5-0.8 0.4-1.6 1c-1 0.7-2 1.7-2.8 2.6-0.8 1-1.5 1.9-1.9 2.6-0.5 0.6-0.8 1-0.8 1z"
      />
      <path
        className="g"
        d="m528.1 166c0 0-0.4-0.3-1.2-0.7-0.7-0.4-1.6-1-2.7-1.6-1.1-0.5-2.4-1-3.7-1.3q-0.9-0.2-1.8-0.2-0.9-0.1-1.8 0.1c-0.3 0.1-0.7 0.1-0.9 0.2-0.4 0.2-0.9 0.3-1.2 0.4-0.3 0.1-0.5 0.2-0.8 0.3-0.3 0.1-0.6 0.3-0.9 0.4-0.5 0.3-1 0.6-1.5 1-0.5 0.3-0.8 0.8-1.2 1.2-0.8 0.9-1.2 1.8-1.6 2.5-0.3 0.8-0.4 1.3-0.4 1.3 0 0-0.4-0.4-0.7-1.2-0.3-0.9-0.6-2.2-0.3-3.8 0.2-1.6 1.2-3.5 2.7-4.9q1.2-1.1 2.8-1.9c0.5-0.2 0.8-0.3 1.2-0.5 0.7-0.2 1.2-0.3 1.8-0.4 1.1-0.2 2.3-0.3 3.4-0.1 1.1 0.2 2.2 0.5 3.1 1 1.8 1 3.1 2.4 3.9 3.6 0.9 1.3 1.3 2.4 1.5 3.3 0.2 0.8 0.3 1.3 0.3 1.3z"
      />
      <path
        className="g"
        d="m494.5 183c0 0 1 0.6 2.6 1.3 0.7 0.4 1.6 0.7 2.6 1q0.7 0.1 1.4 0.2c0.5 0 1 0 1.4-0.1 0.1 0 0.4-0.1 0.3 0l0.4-0.2 0.8-0.3c0.5-0.3 0.8-0.5 1.2-0.7q0.6-0.5 1.1-1 0.5-0.5 0.9-0.9c1-1.3 1.7-2.3 1.7-2.3 0 0-0.1 1.2-0.8 2.8-0.4 0.9-1 1.8-1.9 2.6-0.4 0.4-1 0.9-1.5 1.1l-0.8 0.4-0.4 0.2c-0.3 0.1-0.4 0.1-0.6 0.1-0.6 0.2-1.3 0.1-2 0.1-0.6-0.1-1.2-0.3-1.7-0.5-1.1-0.4-2-1-2.7-1.6-1.4-1.2-2-2.2-2-2.2z"
      />
      <path
        className="u"
        d="m486.9 195.5c0 0 5.8 1.9 16.9-0.5 11.1-2.3 15.7-5.3 15.7-5.3 0 0-5.3 18.8-14.1 19.5-8.8 0.7-18.5-13.7-18.5-13.7z"
      />
      <path
        fillRule="evenodd"
        className="v"
        d="m486.9 195.3c2.8 0.1 5.6-0.1 8.3-0.5 1.3-0.1 2.7-0.4 4-0.6 1.4-0.2 2.7-0.5 4.1-0.8 0.5-0.1 1.3-0.3 1.9-0.4l2.1-0.4c1.4-0.3 2.9-0.4 4.2-0.7 1.3-0.3 2.7-0.6 4-1q1-0.3 1.9-0.8c0.7-0.2 1.3-0.5 1.8-0.9l1.3-0.8-0.4 1.5-1.8 5.9c-0.7 2-1.3 4-2.2 5.9-0.5 1-1 1.9-1.6 2.8-0.6 1-1.3 1.8-2 2.7l-1.2 1.2c-0.4 0.4-1 0.7-1.4 1.1-1 0.7-2.2 1.3-3.5 1.5l-0.5 0.1h-0.2-0.1v0.1h-0.3-0.1l-0.7-0.1h-0.8l-1-0.1c-1.4-0.3-2.3-0.8-3.4-1.3l-1.5-0.8-1.3-0.9c-0.9-0.7-1.8-1.4-2.5-2.2q-2.3-2.2-4.1-4.8c-1.2-1.7-2.3-3.5-3.2-5.4l-0.1-0.3zm0.7 0.7q1.9 1.9 3.8 3.6c1.5 1.3 3 2.6 4.6 3.8q1.2 0.9 2.4 1.6 1.2 0.7 2.5 1.3c0.8 0.3 1.7 0.6 2.3 0.7l0.6 0.1 0.7 0.1h0.7 0.1 0.1l0.3-0.1c0.7-0.1 1.4-0.4 2.1-0.8 0.4-0.2 0.7-0.4 1.1-0.7l1-0.9c0.6-0.6 1.3-1.3 1.9-2.1 0.6-0.7 1.1-1.5 1.7-2.3 1.1-1.7 2.2-3.4 3.1-5.2q1.1-2 1.9-4.2-0.3 0.1-0.6 0.3c-0.7 0.3-1.3 0.6-1.9 1-1.4 0.5-2.7 1.1-4 1.8-1.3 0.6-2.6 1-4 1.5l-2 0.6c-0.7 0.2-1.3 0.4-2.1 0.6l-2.1 0.3c-0.8 0.1-1.5 0.3-2.2 0.3-1.5 0.1-2.9 0.2-4.3 0.1-0.8 0-1.5 0-2.2-0.1l-2.2-0.3c-0.7-0.2-1.4-0.3-2.1-0.5-0.4-0.2-0.8-0.3-1.2-0.5zm17.6 11.2c-0.2 0 0.2 0 0.2 0h-0.1zm13.3-16.3q0.6-0.4 1.3-0.7l-0.9-0.7q-0.2 0.7-0.4 1.4z"
      />
    </svg>
  );
}
