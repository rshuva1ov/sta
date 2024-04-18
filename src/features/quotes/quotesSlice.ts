import { apiSlice } from "../api/apiSlice";

export interface IQuotes {
    quote: string
    author: string
    category: string
}

export const quotesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuotes: builder.query<IQuotes[], number>({
            query: () => '/?category=happiness',
        })
    }),
    overrideExisting: false,
})

export const {
    useGetQuotesQuery
} = quotesApiSlice
