import Link from 'next/link';

import SocialLinks from './SocialLinks';

interface ContactsProps {
  className?: string;
  data: HostContacts;
}

/*
    Youtube intent://Htfw2s2oCvw/#Intent;scheme=vnd.youtube;package=com.google.android.youtube;S.browser_fallback_url=market://details?id=com.google.android.youtube;end;
*/

const Contacts: React.FC<ContactsProps> = (props) => {
  const { className = '', data, ...otherProps } = props;

  return (
    <address
      className={`relative ${className} flex flex-col items-center justify-center not-italic`}
      {...otherProps}
    >
      <SocialLinks data={data} />
      <Link
        target="_blank"
        prefetch={false}
        href={`tel:${data?.phone}`}
        className="mt-2 flex-[1_1_100%] whitespace-nowrap text-center"
      >
        {data?.phone}
      </Link>
    </address>
  );
};

export { Contacts };
