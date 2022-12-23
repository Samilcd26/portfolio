import { configureStore } from '@reduxjs/toolkit'
import gitDataSlice from './githubSlice'

export const store = configureStore({
  reducer: {
    gitDataSlice
  },
})

