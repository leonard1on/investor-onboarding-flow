import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { AccountState } from '../redux/accountSlice';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    submitOnboarding: builder.mutation<{ message: string }, AccountState>({
      query: (account) => ({
        url: 'api/onboarding',
        method: 'POST',
        body: account,
      }),
    }),
  }),
});

export const { useSubmitOnboardingMutation } = accountApi;