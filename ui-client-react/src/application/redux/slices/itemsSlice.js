import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from '../../../infraestructure/adapters/getItems';

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async ({ query, page, pageSize }, thunkAPI) => {
    try {
      const response = await getItems(query, page, pageSize);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    categories: [],
    pagination: {},
    loading: false,
    error: null,
    query: 'laptop',
    page: 1,
    pageSize: 4,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.categories = action.payload.categories;
        state.pagination = action.payload.pagination;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setQuery, setPage } = itemsSlice.actions;
export default itemsSlice.reducer;
