import Card, { type ServiceCardData } from './Card/Card';

interface ServiceCardsProps {
  className?: string;
  propertyName: string;
  data: ServiceCardData[] | [] | null;
  title: string;
}

export default function ServiceCards(props: ServiceCardsProps) {
  const {
    className = '',
    propertyName = '',
    title = '',
    data = [],
    ...otherProps
  } = props;

  return (
    <ul className={`${className} flex flex-col`} {...otherProps}>
      <li className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-bold md:text-3xl">
          <span className="text-primary lg:block">{title}</span> {propertyName}
        </h3>
      </li>
      {data.map((el, i) => (
        <li
          key={el.title}
          className="my-3 flex flex-col items-center md:items-start"
        >
          <Card data={el} isCardOpen={i === 0} />
        </li>
      ))}
    </ul>
  );
}
