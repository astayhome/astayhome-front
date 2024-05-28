import { type ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`${className} max-w-[2520px] px-4 xs:px-8 md:px-10 xl:px-20`}
    >
      {children}
    </div>
  );
}

export default Container;
