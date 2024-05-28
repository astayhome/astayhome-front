/* eslint-disable tailwindcss/no-custom-classname */

import { randomUUID } from 'crypto';

import ReviewItemSkeleton from './ui/ReviewItemSkeleton';

const elements = new Array(7).fill('1').map(() => randomUUID());

export default function ReviewsSkeleton() {
  return (
    <section className="reviewsSection border-grayPrim/80 my-10 animate-pulse pb-10 pt-5">
      <div className=" mb-4 flex items-center justify-start gap-2 text-lg font-medium leading-none md:mb-9 md:text-xl">
        <div className="flex items-center justify-center gap-1">
          <span className="h-2 w-7 rounded-lg bg-grayPrim" />
        </div>
        <div className="size-2 rounded-full bg-grayPrim" />
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-10 rounded-lg bg-grayPrim" />
          <span className="h-2 w-20 rounded-lg bg-grayPrim" />
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 md:gap-y-12 xl:gap-x-40 2xl:gap-x-[250px]">
        {elements.map((id) => (
          <ReviewItemSkeleton key={id} className="col-span-1" />
        ))}
        <div className="col-span-1 mt-4 flex items-center justify-center md:mt-0 md:justify-start">
          <div className="flex h-14 w-72 items-center justify-center gap-3 rounded-lg border border-textPrim px-4 py-2 font-semibold hover:bg-gray-light">
            <div className="h-2 w-40 rounded-lg bg-grayPrim" />
            <div className="h-2 w-20 rounded-lg bg-grayPrim" />
          </div>
        </div>
      </div>
    </section>
  );
}
