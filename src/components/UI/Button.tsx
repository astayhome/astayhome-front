/* eslint-disable react/button-has-type */

'use client';

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconElType;
  name?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  wFull?: boolean;
  addSpecialHover?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  onClick = () => {},
  disabled,
  outline,
  small,
  name,
  type = 'button',
  id,
  wFull = true,
  icon: Icon,
  addSpecialHover = false,
}) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      disabled={disabled}
      onClick={(e) => onClick(e)}
      className={`
      ${className}
        relative
        ${wFull ? 'w-full' : ''}
        ${addSpecialHover ? 'specialHover' : ''}
        transition
        disabled:cursor-not-allowed
        disabled:border-gray-light
        disabled:bg-grayPrim
        disabled:opacity-100
        ${outline ? 'bg-white' : 'bg-primary'}
        ${outline ? 'border-black' : 'border-primary50'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-base'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
