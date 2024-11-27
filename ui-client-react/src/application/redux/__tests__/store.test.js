import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchSlice from '../slices/searchSlice';
import itemsSlice from '../slices/itemsSlice';
import store, { persistor } from '../store';

describe('Redux Store', () => {
  it('should create a store with persisted reducer', () => {
    const persistConfig = {
      key: 'root',
      version: 1,
      storage,
    };

    const rootReducer = combineReducers({
      auth: searchSlice,
      items: itemsSlice,
    });

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const testStore = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        }),
    });

    const testState = { ...testStore.getState() };
    delete testState._persist;

    const actualState = { ...store.getState() };
    delete actualState._persist;

    expect(testState).toEqual(actualState);
  });

  it('should create a persistor', () => {
    const testPersistor = persistStore(store);
    expect(testPersistor).toBeDefined();
    expect(typeof testPersistor.persist).toBe('function');
    expect(typeof testPersistor.flush).toBe('function');
  });
});
