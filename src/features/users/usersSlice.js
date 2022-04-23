import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    page: 1
  },
  reducers: {
    get: (state, action) => {
        state.value = [
            ...state.value,
            action.payload
        ].flat();
    },
    init: (state, action) => {
      state.value = action.payload;
      state.page = 1;
    },
    addPage: (state) => {
      state.page += 1;
    }
  }
})

export const { get, init, addPage } = usersSlice.actions

export default usersSlice.reducer