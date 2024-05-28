import { forwardRef } from 'react';

export default forwardRef(function Skeleton(_, ref) {
  return (
    // @ts-ignore
    <div className="group col-span-1 animate-pulse cursor-pointer" ref={ref}>
      <div className="flex w-full flex-col gap-2">
        <div
          className="
            relative 
            aspect-square 
            w-full 
            overflow-hidden 
            rounded-xl
          "
        >
          <div
            className="
              size-full 
              bg-gray-300/40 
              object-cover 
              transition
              group-hover:scale-110
            "
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-5 w-3/4 rounded bg-gray-300/40 text-lg font-semibold" />
          <div className="flex h-5 w-10 flex-nowrap items-center justify-center gap-1 rounded bg-gray-300/40 pr-2" />
        </div>
        <div className="flex h-5 w-1/2 flex-row items-center gap-1 rounded bg-gray-300/40">
          <div />
        </div>
        <div className="flex h-5 w-20 flex-row items-center gap-1 rounded bg-gray-300/40" />
      </div>
    </div>
  );
});
