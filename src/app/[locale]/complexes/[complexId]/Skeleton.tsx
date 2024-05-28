import { randomUUID } from 'crypto';

interface SkeletonComplexProps {
  className?: string;
}

const amount = new Array(10).fill('1').map(() => randomUUID());

export default function SkeletonComplex(props: SkeletonComplexProps) {
  const { className = '', ...otherProps } = props;

  return (
    <>
      {amount.map((id) => (
        <div
          key={id}
          className={`${className} relative flex min-w-[250px] flex-auto animate-pulse overflow-hidden rounded-lg sm:flex-[1_1_35%]`}
          {...otherProps}
        >
          <div className="aspect-video flex-auto bg-grayPrim" />
        </div>
      ))}
    </>
  );
}
