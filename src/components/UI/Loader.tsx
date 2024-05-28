import { PuffLoader } from 'react-spinners';

interface Props {
  className?: string;
}

const Loader = (props: Props) => {
  return (
    <main
      className={`${props.className} flex h-[70vh] flex-col items-center justify-center`}
    >
      <PuffLoader size={100} color="var(--color-primary)" />
    </main>
  );
};

export default Loader;
