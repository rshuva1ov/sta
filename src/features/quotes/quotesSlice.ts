import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const TOKEN = 'F4OIsMy+gh1oql005ZqxZg==HVMpKabDslJXwcW5';

export interface IQuotes {
    quote: string
    author: string
    category: string,
}

export interface IState {
    quotes: IQuotes[]
    status: string
    error?: undefined | string
}

const initialState: IState = {
    quotes: [
        {
            quote: "Место под вашу цитату",
            author: "Автор цитаты",
            category: "happiness",
        },
    ],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: undefined
}

export const fetchPosts = createAsyncThunk('quotes/quoteAdded', async () => {
    const response = await axios.get(BASE_URL, {
        headers: {
            'X-Api-Key': `${TOKEN}`
        }
    })
    return response.data
})


const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        quoteAdded: {
            reducer: (state, action: PayloadAction<IQuotes>) => {
                state.quotes.push(action.payload);
            },
            prepare: ({ quote, author, category }: IQuotes) => {
                return { payload: { quote, author, category }, type: 'quotes/quoteAdded' };
            },
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.quotes = state.quotes.concat(action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

interface IRootState {
    quotes: IState;
}

export const selectAllQuotes = (state: IRootState) => state.quotes.quotes;
export const getQuotesStatus = (state: IRootState) => state.quotes.status;
export const getQuotesError = (state: IRootState) => state.quotes.status;


export const { quoteAdded } = quotesSlice.actions;

export default quotesSlice.reducer