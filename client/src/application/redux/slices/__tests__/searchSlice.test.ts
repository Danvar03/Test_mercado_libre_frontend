import searchReducer, { setSearch } from '../searchSlice';

describe('searchSlice', () => {
  const initialState = {
    payload: {},
  };

  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setSearch', () => {
    const action = {
      type: setSearch.type,
      payload: { query: 'test' },
    };
    const expectedState = {
      payload: { query: 'test' },
    };
    expect(searchReducer(initialState, action)).toEqual(expectedState);
  });
});
