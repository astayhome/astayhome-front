interface SkeletonDateRangeProps {
  className?: string;
}

const amount = new Array(35).fill(1).map((el, i) => `${el * i}tttttttqwe`);

export default function SkeletonDateRange(props: SkeletonDateRangeProps) {
  const { className = '', ...otherProps } = props;

  return (
    <div
      className={`${className} inline-flex w-full animate-pulse flex-col bg-white`}
      {...otherProps}
    >
      <div className="item-center flex h-[60px] items-center justify-between pt-[10px]">
        <div className="mx-3 size-6 rounded-md bg-grayPrim" />
        <span className="flex flex-auto justify-center">
          <span className="h-3 w-36 rounded-lg bg-grayPrim" />
        </span>
        <div className="mx-3 size-6 rounded-md bg-grayPrim" />
      </div>
      <div className="flex">
        <div className="w-full px-3 pb-6">
          <div className="p-3">
            <span className=" block h-3 w-36 rounded-lg bg-grayPrim" />
          </div>
          <div className="grid grid-cols-7 gap-1">
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
            <span className="h-9 bg-grayPrim" />
          </div>
          <div className="mt-2 grid grid-cols-7 grid-rows-5 gap-1">
            {amount.map((el) => (
              <div
                key={el}
                className="col-span-1 row-span-1 h-10 bg-grayPrim"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
