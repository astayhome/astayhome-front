import type { FC } from 'react';

import { ButtonSpinner } from '../svg';

interface ButtonProps {
  className?: string;
  title: string;
  titleLoad?: string;
  titleError?: string;
  titleSuccess?: string;
  titleNotAvailable?: string;
  loading: boolean;
  showError?: boolean;
  showSuccess?: boolean;
  disabled?: boolean;
  isCanSend?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    title,
    titleLoad = 'Loading',
    titleError = 'Error',
    titleSuccess = 'Success',
    titleNotAvailable = 'Not Available',
    isCanSend = true,
    loading,
    disabled,
    showError = false,
    showSuccess = false,
    ...otherProps
  } = props;

  const defaultStyle = isCanSend
    ? 'group bg-primary hover:ring-2 hover:ring-primary50 hover:ring-offset-2 active:scale-90 active:bg-gold active:ring-gold50'
    : 'bg-grayPrim';

  const success = showSuccess
    ? 'bg-success hover:bg-gradient-to-r hover:from-success hover:to-success hover:ring-2 hover:ring-success hover:ring-offset-2'
    : defaultStyle;
  const error = showError
    ? 'bg-error hover:bg-gradient-to-r hover:from-error hover:to-error hover:ring-2 hover:ring-error hover:ring-offset-2'
    : defaultStyle;
  const titleFormate = showError ? titleError : title;

  if (disabled) {
    return (
      <button
        disabled={disabled}
        type="button"
        className={`${className} me-2 flex w-full items-center justify-center rounded-lg border border-grayPrim bg-grayPrim px-5 py-2.5 text-sm font-semibold text-white transition-colors focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary`}
        {...otherProps}
      >
        {titleNotAvailable}
      </button>
    );
  }

  if (loading) {
    return (
      <button
        disabled={loading}
        type="button"
        className={`${className} me-2 flex w-full items-center justify-center rounded-lg border border-grayPrim bg-grayPrim px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-light hover:text-primary focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary`}
        {...otherProps}
      >
        <ButtonSpinner />
        {titleLoad}...
      </button>
    );
  }
  return (
    <button
      disabled={loading || showSuccess}
      type="submit"
      className={`${className} ${success} ${error} relative block w-full overflow-hidden rounded-lg px-5 py-2.5 text-white transition-all duration-300 ease-out`}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-40 translate-x-44 rotate-12 bg-white opacity-10 transition-all duration-[1.5s] group-hover:translate-x-[-60rem]" />
      <span className="relative">
        {showSuccess ? titleSuccess : titleFormate}
      </span>
    </button>
  );
};

export { Button };
