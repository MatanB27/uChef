import { configureStore } from "@reduxjs/toolkit";
import Reducers from "@/redux/reducers"

const store = configureStore({
    reducer: Reducers,
    middleware: getDefaultMiddleware => 
      getDefaultMiddleware({
        serializableCheck: false
      }),
   
})


export default store;