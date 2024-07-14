import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const UserSlice = createSlice({
    name:"user",
    initialState : [],
    reducers:{
        addUser(state,action){
            
            state.push(action.payload)  
            console.log(action.payload)
            // it uses byDefault immer so all the data that are passed are simply added into it and no change in the original array
         },
        removeUser(state,action){
            // console.log("hii",action.payload)
            state.splice(action.payload,1)
            //here we can also used the user by passing the whole user and then taking the index from that particular user 
         },
        // clearAllUsers(state,action){
        //     // return state = []  //here we cannot delete the user but instead it changes the state
        //     return []
        //  },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return []
        })
    }
})
console.log(UserSlice.actions)
export  default UserSlice.reducer

export const { addUser,removeUser } = UserSlice.actions