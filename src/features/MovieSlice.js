import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null
}

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommend = action.payload.recommend
      state.newDisney = action.payload.newDisney
      state.original = action.payload.original
      state.trending = action.payload.trending
    }
  }

})
export const { setMovies } = MovieSlice.actions
export default MovieSlice.reducer