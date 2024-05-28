import { useSearchParams } from 'next/navigation';

export default function useQuery() {
  const router = useSearchParams();
  const queryParams: Record<string, string | null> = {};

  for (const [key, value] of router.entries()) {
    // Check if the value is JSON by looking for curly braces
    const isJSON = value.startsWith('{') && value.endsWith('}');

    // If the value is JSON, parse it, otherwise use it as is
    queryParams[key] = isJSON ? JSON.parse(value) : value;
  }

  return queryParams;
}
