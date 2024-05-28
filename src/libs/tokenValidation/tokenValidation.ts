import { headers } from 'next/headers';

export default function tokenValidation() {
  const auth = headers().get('authorization');

  if (!auth || !auth.startsWith('Bearer ')) {
    throw new Error('Miss header Authorization Bearer Token');
  }

  const secret = auth.split(' ')[1];

  if (secret !== process.env.REVALIDATION_SECRET_TOKEN) {
    throw new Error('Not Valid Authorization Token');
  }

  return true;
}
