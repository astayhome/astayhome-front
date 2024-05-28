// import dynamic from 'next/dynamic';

import Contacts from './Contacts';

// const MapDefault = dynamic(() => import('@/components/UI/Map'), {
//   ssr: false,
// });

interface MapProps {
  className?: string;
  contacts: HostContacts;
}

export default function Map(props: MapProps) {
  const { className = '', contacts, ...otherProps } = props;

  return (
    <section
      className={`${className} relative flex flex-col items-center justify-center gap-5`}
      {...otherProps}
    >
      <iframe
        title="Map"
        className="min-h-[400px] w-full rounded-2xl border-0 md:mb-0 md:h-[600px] md:rounded-none"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17500!2d100.8690491!3d12.9042894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102974c0a6eef95%3A0x47fe28e56c697086!2sSpice%20Business%20Center%20Pattaya-%20Billboard%20Advertising%20Pattaya!5e0!3m2!1sen!2sua!4v1715588287651!5m2!1sen!2sua"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <Contacts contacts={contacts} />

      {/* <MapDefault
        className="mb-5 w-full rounded-2xl sm:mb-0 sm:h-[600px] sm:rounded-none"
        center={[12.927608, 100.877083]}
      /> */}
    </section>
  );
}
