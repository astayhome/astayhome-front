'use client';

import format from 'date-fns/format';
import { enUS, ru } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { Calendar } from 'react-date-range';

import Modal from '../Modal';

interface CalendarModalProps {
  className?: string;
  isOpenModal: boolean;
  setIsOpenModal: (prev: boolean) => void;
  setInputDate?: Dispatch<SetStateAction<string>>;
  currentDate?: string | Date;
  modalName?: string;
}

export default function CalendarModal(props: CalendarModalProps) {
  const {
    className = '',
    modalName,
    isOpenModal,
    setIsOpenModal,
    setInputDate,
    currentDate,
  } = props;

  const now = currentDate ? new Date(currentDate) : new Date();
  const locale = useLocale();

  const lang = locale === 'ru' ? ru : enUS;
  const [date, setDate] = useState(now);

  const onChange = (item: Date) => {
    setDate(item);
    setIsOpenModal(false);
    const formatedDate = format(item, 'yyyy-MM-dd');
    setInputDate(formatedDate);
  };

  const body = (
    <Calendar
      className={`${className} capitalize`}
      onChange={onChange}
      locale={lang}
      date={date}
      minDate={new Date()}
      showMonthAndYearPickers={false}
      color="var(--color-gold)"
      monthDisplayFormat="MMMM yyy"
    />
  );

  return (
    <Modal
      useGap={false}
      customClassNameSize="md:h-auto md:w-[450px]"
      actionLabel=""
      hideFooter
      noScroll
      body={body}
      title={modalName || ''}
      isOpen={isOpenModal}
      onSubmit={() => {}}
      onClose={() => setIsOpenModal(false)}
    />
  );
}
