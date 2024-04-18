import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = 'F4OIsMy+gh1oql005ZqxZg==HVMpKabDslJXwcW5';

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.api-ninjas.com/v1/quotes', prepareHeaders: (headers) => {
            headers.set("X-Api-Key", `${token}`);
            return headers;
        },
    }),
    tagTypes: ['Quotes'],
    endpoints: builder => ({})
})
