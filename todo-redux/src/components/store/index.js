
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

import React from 'react'

const store = configureStore({    
    reducer: {
        users: UserSlice
    },
}
)


export default store