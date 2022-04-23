import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: []
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
    }
  }
})

export const { get, init } = usersSlice.actions

export default usersSlice.reducer