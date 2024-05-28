import { Key, LocationSymbol } from '../svg';

interface StatisticProps {
  className?: string;
}

export default function Statistic(props: StatisticProps) {
  const { className = '', ...otherProps } = props;

  return (
    <div className={`${className}`} {...otherProps}>
      <div className="flex gap-5">
        <LocationSymbol className="min-w-6" />
        <div>
          <h3>Great location</h3>
          <p className="mt-1 text-sm">
            95% of recent guests gave the location a 5-star rating.
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-5 md:mt-7">
        <Key size={24} className="min-w-6" />
        <div>
          <h3>Great check-in experience</h3>
          <p className="mt-1 text-sm">
            100% of recent guests gave the check-in process a 5-star rating.
          </p>
        </div>
      </div>
      <hr className="mt-5 md:mt-10" />
    </div>
  );
}
