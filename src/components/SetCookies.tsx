'use client';

import { useEffect } from 'react';

import { setTimeZone } from '@/libs/setTimeZone';

export default function SetCookies(): null {
  useEffect(() => {
    setTimeZone();
  }, []);
  return null;
}
