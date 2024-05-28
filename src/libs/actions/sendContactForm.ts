/* eslint-disable @typescript-eslint/no-shadow */

'use server';

import { postData } from './helpers/postData';

type MyFormaResponse = {
  message?: string;
  email?: string;
  name: string;
  phone: string;
  agreeWithTerms: boolean;
};

export const sendContactForm = async (
  data: MyFormaResponse,
  pathname: string,
  pageName: string,
) => {
  const { name, phone, message, email, agreeWithTerms } = data;

  try {
    if (!agreeWithTerms) {
      const option: POSTErrorOptions = {
        name: 'Invalid data',
        message: 'Missing agreeWithTerms',
        code: 'Invalid data',
        statusCode: 400,
        details: [
          {
            path: '/agreeWithTerms',
            code: '/agreeWithTerms',
            message: 'Missing agreeWithTerms',
            info: {
              format: 'boolean',
            },
          },
        ],
      };

      throw new Error('Missing agreeWithTerms', { cause: option });
    }

    await postData('/api/contact-us-submit', {
      name,
      type: pageName || 'main',
      pageLink: pathname,
      email,
      phone,
      message: message || '',
    });

    return { statusCode: 200 };
  } catch (error: unknown) {
    const err = error as POSTError;
    console.log('Send Contact Form Error ->', err.message);

    if (!err?.cause?.details) {
      console.log(JSON.stringify(err, null, 2));
      return null;
    }

    const messages = err.cause.details.map(({ code, message, path }) => {
      return {
        element: path.slice(1),
        message,
        code,
      };
    });

    return {
      statusCode: err.cause.statusCode,
      messages,
    };
  }
};
