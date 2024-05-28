/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import type { ChangeEvent, FC, FocusEvent, PropsWithChildren } from 'react';

import BiSearch from '@/components/svg/ico/bi/BiSearch';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';

import AppClearButton from './AppClearButton';

interface IAppSearchOptionButtonProps extends PropsWithChildren<any> {
  translate: HeaderTranslation;
  relative?: boolean;
  withSearch?: boolean;
  separator?: boolean;
  isSearch?: boolean;
  type?: string;
  title: string;
  placeholder: string;
  active: boolean;
  value: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onClear: () => void;
}

const AppSearchOptionButton: FC<IAppSearchOptionButtonProps> = ({
  translate,
  relative,
  children,
  separator,
  withSearch,
  isSearch,
  type,
  title,
  placeholder,
  active,
  value,
  onChange,
  onFocus,
  onBlur,
  onClear,
}) => {
  const style = active
    ? 'shadow-arround hover:bg-white'
    : 'hover:bg-gray-light';

  return (
    <div
      tabIndex={0}
      className={` ${style} ${relative && 'relative'} flex cursor-pointer items-center rounded-full`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className={`${
          withSearch && 'min-w-[120px]'
        } flex grow flex-col pl-4 text-left`}
      >
        <span className="text-xs font-bold tracking-wider text-textPrim">
          {title}
        </span>
        {type === 'inputText' ? (
          <input
            disabled
            type="text"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className="w-full truncate bg-transparent text-sm text-textPrim outline-none placeholder:text-placeholder"
          />
        ) : (
          <span className="max-w-[105px] truncate text-sm text-placeholder lg:max-w-none">
            {value || placeholder}
          </span>
        )}
      </div>

      {/* clear icon */}
      <AppClearButton
        onClick={onClear}
        active={value}
        isFocus={active}
        separator={separator}
      />

      {withSearch && (
        <button
          type="submit"
          className={`${
            isSearch ? 'w-28' : 'w-12'
          } specialHover m-2 ml-0 flex h-12 items-center justify-center  rounded-full bg-primary px-3 transition-all duration-300`}
        >
          <BiSearch className="size-5 text-white" />
          <span
            className={`${
              isSearch ? 'inline-block' : 'hidden'
            } ml-2 font-medium text-white`}
          >
            {translate.Search}
          </span>
        </button>
      )}
      <div className={`${active ? 'block' : 'hidden'} mt-16`}>{children}</div>
    </div>
  );
};

export default AppSearchOptionButton;
