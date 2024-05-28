/* eslint-disable react/button-has-type */

import { ButtonSpinner } from '@/components/svg';

interface ButtonSubmitProps {
  className?: string;
  title: string;
  titleLoad?: string;
  titleError?: string;
  titleSuccess?: string;
  loading?: boolean;
  showError?: boolean;
  showSuccess?: boolean;
  disabled?: boolean;
  isCanSend?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function ButtonSubmit(props: ButtonSubmitProps) {
  const {
    className = '',
    type = 'submit',
    title,
    titleLoad = 'Loading',
    titleError = 'Error',
    titleSuccess = 'Success',
    loading,
    isCanSend = true,
    disabled,
    showError,
    showSuccess,
    onClick = () => {},
    ...otherProps
  } = props;

  const success = showSuccess ? 'bg-success' : '';
  const error = showError ? 'bg-error' : '';
  const allowSend = isCanSend ? 'specialHover bg-primary' : 'bg-grayPrim';

  const titleFormate = showError ? titleError : title;

  if (loading || disabled) {
    return (
      <button
        disabled={loading}
        type={type}
        className={`${className} flex items-center justify-center border border-grayPrim bg-grayPrim text-sm font-semibold text-white transition-colors hover:bg-gray-light hover:text-primary focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary`}
        onClick={onClick}
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
      type={type}
      className={`${className} ${success} ${error} ${!showError ? allowSend : ''} group relative overflow-hidden text-white transition-all duration-300 ease-out`}
      onClick={onClick}
      {...otherProps}
    >
      {showSuccess ? titleSuccess : titleFormate}
    </button>
  );
}
