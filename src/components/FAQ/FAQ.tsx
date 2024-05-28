import { useTranslations } from 'next-intl';

import AskQuestion from './AskQuestion';
import FAQCard from './FAQCard';

interface FAQProps {
  className?: string;
  classNameH2?: string;
  faqData: FAQData[];
  pageName?: string;
}

export default function FAQ(props: FAQProps) {
  const {
    className = '',
    classNameH2 = '',
    faqData,
    pageName = 'forOwners',
    ...otherProps
  } = props;
  const t = useTranslations('FAQ.FAQ Title');

  return (
    <section className={`${className} overflow-hidden`} {...otherProps}>
      <h2 className={`${classNameH2} text-start`}>
        <span className="text-primary">{t('first')}</span> {t('second')}
      </h2>
      {faqData.map(({ answer, question }, i) => (
        <FAQCard
          isOpen={i === 0}
          key={question}
          answer={answer}
          question={question}
        />
      ))}
      <AskQuestion pageName={pageName} />
    </section>
  );
}
