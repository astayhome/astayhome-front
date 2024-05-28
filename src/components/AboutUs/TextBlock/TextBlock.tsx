/* eslint-disable react/no-danger */
import sanitize from 'sanitize-html';

import type { AboutPageData } from '@/app/[locale]/about-us/page';

import TwoImage from './TwoImage';

interface TextBlockProps {
  className?: string;
  revers?: boolean;
  data: AboutPageData;
}

export default function TextBlock(props: TextBlockProps) {
  const { className = '', revers, data, ...otherProps } = props;

  return (
    <div
      className={`${className} ${revers ? 'md:flex-row-reverse' : 'md:flex-row'} mt-10 flex min-h-[550px] flex-col-reverse items-center justify-center gap-x-14 xl:items-start xl:justify-between`}
      {...otherProps}
    >
      <div className="flex flex-col items-center xl:block xl:max-w-[550px]">
        <h2
          className="self-start text-2xl font-semibold *:first:font-bold *:first:text-primary"
          dangerouslySetInnerHTML={{ __html: sanitize(data.title) }}
        />
        <TwoImage
          className="mt-3 xl:hidden"
          images={data.img}
          revers={revers}
        />
        <div
          className="mt-5 *:mt-3"
          dangerouslySetInnerHTML={{ __html: sanitize(data.desc) }}
        />
      </div>
      <TwoImage className="hidden xl:flex" images={data.img} revers={revers} />
    </div>
  );
}
