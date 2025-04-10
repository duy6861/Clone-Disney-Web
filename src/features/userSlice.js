import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  photo: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetail: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state, action) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    }
  },


})

export const { setUserLoginDetail, setSignOutState } = userSlice.actions

export default userSlice.reducer