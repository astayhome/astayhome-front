'use client';

import { useRouter } from 'next/navigation';

import Button from './UI/Button';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        flex
        h-[40vh]
        flex-col 
        items-center 
        justify-center 
        gap-2 
        overflow-hidden 
      "
    >
      <div className="text-center">
        <div className="text-2xl font-bold">{title}</div>
        <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
      </div>
      <div className="mt-4 w-48">
        {showReset && (
          <Button
            className="rounded-lg"
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
