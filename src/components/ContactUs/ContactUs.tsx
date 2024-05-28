import { useTranslations } from 'next-intl';

import ContactForm from './ContactForm';

interface ContactUsProps {
  className?: string;
  pageName?: string;
}

export default function ContactUs(props: ContactUsProps) {
  const { className = '', pageName, ...otherProps } = props;
  const t = useTranslations('ContactUs');
  const tSubmit = useTranslations('ButtonSubmit');
  const translate = {
    'Contact us': t('Contact us'),
    'Send us an enquiry now and get a discount': t(
      'Send us an enquiry now and get a discount',
    ),
    Name: t('Name'),
    Email: t('Email'),
    'Phone Number': t('Phone Number'),
    Terms: t('Terms'),
    Policy: t('Policy'),
    Send: t('Send'),
    'Not Available': t('Not Available'),
    Message: t('Message'),
    ErrorMessage: t('ErrorMessage'),
    ErrorServer: t('ErrorServer'),
    ErrorPhoneMin: t('ErrorPhoneMin'),
    ErrorPhone: t('ErrorPhone'),
    ErrorEmail: t('ErrorEmail'),
    ErrorName: t('ErrorName'),
    Success: tSubmit('Success'),
    Error: tSubmit('Error'),
    Loading: tSubmit('Loading'),
  };

  return (
    <ContactForm
      translate={translate}
      className={className}
      pageName={pageName}
      {...otherProps}
    />
  );
}
