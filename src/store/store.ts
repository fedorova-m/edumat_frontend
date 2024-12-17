import { configureStore } from "@reduxjs/toolkit"
import subjectReducer from "./subjectSlice"

const store = configureStore({
  reducer: {
    subjects: subjectReducer,
  },
})

export default store
