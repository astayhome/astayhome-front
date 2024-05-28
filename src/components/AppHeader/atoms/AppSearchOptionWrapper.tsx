import type { FC, PropsWithChildren } from 'react';

interface IAppSearchOptionProps extends PropsWithChildren<any> {
  className: string;
}

const AppSearchOptionWrapper: FC<IAppSearchOptionProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`${className} absolute mt-3 rounded-3xl bg-white px-8 py-4 shadow-arround-bold`}
    >
      {children}
    </div>
  );
};

export default AppSearchOptionWrapper;
