import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk(
    "fetch/country",
    async function (country, { rejectWithValue }) {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${country.toLowerCase()}`
            );

            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.status);
            }
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

const initialState = {
    loading: false,
    erorr: null,
    countries: [],
    inputValue: "",
    test: [],
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getValueInput(state, action) {
            state.inputValue = action.payload;
        },
        getError(state, action) {
            state.erorr = action.payload;
        },
    },
    extraReducers: {
        [fetchCountry.pending]: (state) => {
            state.loading = true;
            state.erorr = "sss";
        },
        [fetchCountry.rejected]: (state, action) => {
            state.error = "aa";
            state.loading = false;
            state.error = action.payload;
        },
        [fetchCountry.fulfilled]: (state, action) => {
            state.loading = false;
            try {
                state.countries.push(...action.payload);
            } catch {
                state.erorr = "Error: is  invalid country, please enter valid name country";
                state.countries = [];
            }
        },
    },
});

export const { getValueInput, getError } = countrySlice.actions;
export default countrySlice.reducer;
