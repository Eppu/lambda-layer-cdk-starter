import { getFirstLetter } from '/opt/nodejs/utils';

// Gets the first letter of a string
export const handler = async (event: any) => {
  if (!event.body || event.body === undefined) {
    return {
      statusCode: 400,
      body: 'No body supplied',
    };
  }

  if (event.body === '') {
    return {
      statusCode: 400,
      body: 'Empty body supplied',
    };
  }

  const body = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: getFirstLetter(body),
  };

  return response;
};
