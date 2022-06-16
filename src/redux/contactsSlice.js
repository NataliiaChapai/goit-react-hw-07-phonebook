import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
        filter: ''
    };

const contactsSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter(state, action) {
            state.filter = action.payload;
        }
    }
})

export default contactsSlice;
export const { filter } = contactsSlice.actions;
export const getFilter = state => state.filter.filter;