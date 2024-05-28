import { randomUUID } from 'crypto';

import Skeleton from './Skeleton';

interface SectionSkeletonProps {
  className?: string;
}

const amount = Array(10)
  .fill('1')
  .map(() => randomUUID());
export default function SectionSkeleton(props: SectionSkeletonProps) {
  const { className, ...otherProps } = props;

  return (
    <section
      className={`${className}
    grid
    grid-cols-1
    gap-8
    pt-8
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    2xl:grid-cols-5`}
      {...otherProps}
    >
      {amount.map((el) => (
        <Skeleton key={el} />
      ))}
    </section>
  );
}
