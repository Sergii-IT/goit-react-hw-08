import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Селектор
export const selectNameFilter = state => state.filters.name;

// Редюсер
export default filtersSlice.reducer;

// Дії
export const { setNameFilter } = filtersSlice.actions;

