import { delay, http, HttpResponse } from 'msw';

import type { AccountState } from '../redux/accountSlice';

export const handlers = [
  http.post('/api/onboarding', async ({ request }) => {
    const account = (await request.json()) as AccountState;
    await delay(1200);

    if (account.user.email === 'fail@example.com') {
      return HttpResponse.json(
        { message: 'Mock onboarding submission failed.' },
        { status: 500 },
      );
    }

    return HttpResponse.json(
      { message: 'Onboarding submitted successfully.' },
      { status: 201 },
    );
  }),
];
