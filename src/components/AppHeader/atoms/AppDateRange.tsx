'use client';

import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { enUS, ru } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import { type FC } from 'react';
import { DateRange, type RangeKeyDict } from 'react-date-range';

interface IAppDateRangeProps {
  className?: string;
  checkIn?: Date | null;
  checkOut?: Date | null;
  months?: number;
  disabledDates?: Date[];
  isNotAvailable?: boolean;
  maxDate?: Date;
  onChange: (value: RangeKeyDict) => void;
}

const AppDateRange: FC<IAppDateRangeProps> = ({
  className = '',
  checkIn,
  checkOut,
  months,
  disabledDates,
  isNotAvailable,
  maxDate = addDays(new Date(), 180),
  onChange,
}) => {
  const locale = useLocale() === 'ru' ? ru : enUS;
  const now = new Date();

  const selectionRange: any = {
    startDate: checkIn || null,
    endDate: checkOut || new Date(''),
    key: 'selection',
  };

  if (isNotAvailable) {
    const result = eachDayOfInterval({
      start: now,
      end: maxDate,
    });
    disabledDates.push(...result);
  }

  return (
    <div className={`${className} rounded-3xl`}>
      <DateRange
        className="capitalize"
        locale={locale}
        rangeColors={['var(--color-gold)']}
        weekStartsOn={1}
        ranges={[selectionRange]}
        date={now}
        onChange={onChange}
        direction="horizontal"
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        minDate={now}
        maxDate={maxDate}
        months={months || 2}
        color="#444"
        monthDisplayFormat="MMMM yyy"
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default AppDateRange;
