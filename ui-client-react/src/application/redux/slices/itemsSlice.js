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
    itemDetails: null,
    categories: [],
    currentCategories: [],
    pagination: {},
    query: '',
    page: 1,
    pageSize: 4,
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetItems: (state) => {
      state.items = [];
      state.categories = [];
      state.pagination = {};
      state.error = null;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCurrentCategories: (state, action) => {
      state.currentCategories = action.payload;
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

    builder.addCase(fetchItemById.pending, (state) => {
      state.loadingItemById = true;
      state.errorItemById = null;
      state.itemById = null;
    });
    builder
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItemById = false;
        state.itemById = action.payload;
        state.categories = action.payload.categories || [];
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItemById = false;
        state.errorItemById = action.payload;
      });
  },
});

export const { setQuery, setPage, resetItems, setCurrentCategories } =
  itemsSlice.actions;
export default itemsSlice.reducer;