import Image, { type StaticImageData } from 'next/image';

interface TwoImageProps {
  className?: string;
  revers?: boolean;
  images: [StaticImageData, StaticImageData];
}

export default function TwoImage(props: TwoImageProps) {
  const { className = '', revers = false, images, ...otherProps } = props;

  return (
    <div className={`${className} relative inline-block`} {...otherProps}>
      <div
        className={`${revers ? 'right-0' : 'left-0'} absolute -z-10 mt-2 hidden sm:block`}
      >
        <Image
          className="mx-auto flex-auto rounded-3xl"
          src={images[0]}
          width={430}
          height={430}
          alt=""
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div
        className={`${revers ? 'sm:pr-[120px]' : 'sm:pl-[120px]'} mt-5 w-full sm:my-0 sm:pt-20`}
      >
        <Image
          className="w-[430px] rounded-3xl sm:size-[430px]"
          src={images[1]}
          width={430}
          height={430}
          alt=""
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
