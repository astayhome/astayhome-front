/* eslint-disable no-underscore-dangle */
// @ts-nocheck

'use client';

import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { useLocale } from 'next-intl';

interface MapProps {
  center?: number[];
  className?: string;
}

export default function GoogleMap({
  center = [51, -0.09],
  className = '',
}: MapProps) {
  const language = useLocale();
  console.log(center);

  return (
    <APIProvider
      region={language === 'ru' ? 'Ru' : 'EN'}
      language={language}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP}
    >
      <Map
        mapId="astayMap"
        className={`${className} w-full, h-[400px] overflow-hidden rounded-lg border-none`}
        defaultCenter={{ lat: center[0], lng: center[1] }}
        defaultZoom={center ? 13 : 2}
        disableDefaultUI
      >
        <AdvancedMarker position={{ lat: center[0], lng: center[1] }} />
      </Map>
    </APIProvider>
  );
}
