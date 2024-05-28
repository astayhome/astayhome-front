import { forwardRef } from 'react';

interface ReviewItemSkeletonProps {
  className?: string;
}

const ReviewItemSkeleton = forwardRef(function ReviewItemSkeleton(
  props: ReviewItemSkeletonProps,
  ref,
) {
  const { className, ...otherProps } = props;

  return (
    <div
      // @ts-ignore
      ref={ref}
      className={`${className} text-sm`}
      {...otherProps}
    >
      <div className="mb-2 flex items-center justify-start gap-4">
        <div className="size-[60px] rounded-full bg-grayPrim" />
        <div>
          <div className="mb-1 h-3 w-28 rounded-lg  bg-grayPrim font-semibold" />
          <div className=" mb-1 h-2 w-20 rounded-lg bg-grayPrim" />
          <div className="h-2 w-16  rounded-lg bg-grayPrim" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-grayPrim" />
          <div className="col-span-1 h-2 rounded bg-grayPrim" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 h-2 rounded bg-grayPrim" />
          <div className="col-span-2 h-2 rounded bg-grayPrim" />
        </div>
        <div className="h-2 rounded bg-grayPrim" />
      </div>
    </div>
  );
});

export default ReviewItemSkeleton;
