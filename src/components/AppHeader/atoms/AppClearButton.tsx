import type { FC } from 'react';

import BiX from '@/components/svg/ico/bi/BiX';

interface AppClearButtonProps {
  active: boolean;
  isFocus?: boolean;
  separator?: boolean;
  onClick: () => void;
}

const AppClearButton: FC<AppClearButtonProps> = ({
  onClick,
  active,
  isFocus = true,
  separator = false,
}) => {
  return (
    <div
      className={`${separator && 'border-r border-grayPrim'} flex h-8 items-center`}
    >
      <button
        type="button"
        aria-label="close"
        tabIndex={0}
        className={`${
          active && isFocus ? 'opacity-100' : 'opacity-0'
        } flex items-center pr-3`}
        onClick={onClick}
      >
        <BiX className="size-6 rounded-full border border-grayPrim bg-white p-1 hover:bg-gray-light" />
      </button>
    </div>
  );
};

export default AppClearButton;
