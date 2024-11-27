import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from '../../../infraestructure/adapters/getItems';
import { getItemById } from '../../../infraestructure/adapters/getItemById';

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

export const fetchItemById = createAsyncThunk(
  'items/fetchItemById',
  async (id, thunkAPI) => {
    try {
      const response = await getItemById(id);
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
    currentItems: [],
    categories: [],
    currentCategories: [],
    pagination: {},
    loading: false,
    error: null,
    query: 'laptop',
    page: 1,
    pageSize: 4,
    itemById: null,
    loadingItemById: false,
    errorItemById: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    updateCurrentItems: (state) => {
      state.currentItems = state.items;
      state.currentCategories = state.categories;
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
    builder
      .addCase(fetchItemById.pending, (state) => {
        state.loadingItemById = true;
        state.errorItemById = null;
        state.itemById = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItemById = false;
        state.itemById = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItemById = false;
        state.errorItemById = action.payload;
      });
  },
});

export const { setQuery, setPage, updateCurrentItems } = itemsSlice.actions;
export default itemsSlice.reducer;
