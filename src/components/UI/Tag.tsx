interface TagProps {
  className?: string;
  title?: string;
}

export default function Tag(props: TagProps) {
  const { className = '', title, ...otherProps } = props;

  return (
    <div className={`${className}`} {...otherProps}>
      <span>{title}</span>
    </div>
  );
}
