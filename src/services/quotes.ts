import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuotes } from '../features/quotes/quotesSlice';

const token = 'F4OIsMy+gh1oql005ZqxZg==HVMpKabDslJXwcW5';

export const quotesApi = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.api-ninjas.com/v1/quotes', prepareHeaders: (headers) => {
            headers.set("X-Api-Key", `${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getHappinessByCategory: builder.query<IQuotes[], string>({
            query: (category) => `?category=${category}`,
        }),
    }),
})

export const { useGetHappinessByCategoryQuery } = quotesApi