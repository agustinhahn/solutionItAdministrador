import { configureStore } from '@reduxjs/toolkit'
import itReducer from "../features/itAdminSlice"
import { itApi } from "./services/itServicesAdmin"


export default configureStore({
    reducer: {
        it:itReducer,
        [itApi.reducerPath] : itApi.reducer,
    },
    middleware: (getDefaultMiddleware) => // por ahora no utilizo 
    getDefaultMiddleware().concat(itApi.middleware)
})
