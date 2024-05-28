'use server';

import { fetchData } from '../helpers/fetchData';

export default async function getContacts() {
  try {
    const contacts = await fetchData<ReqHostContacts, AllHostContacts>(
      '/api/host-contacts',
      {
        fields: {
          phone: true,
          email: true,
          name: true,
          whatsapp: true,
          telegram: true,
          instagram: true,
          youtube: true,
          address: true,
          workTime: true,
        },
      },
      ['/api/host-contacts'],
    );
    return contacts[0] as HostContacts | undefined;
  } catch (error) {
    console.log(error);
    return null;
  }
}
