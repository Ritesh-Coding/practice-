import { CreateApi,createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setCredentials,logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://localhost:3500',
    credentials : 'include',  //we  only send the secure api https request
    prepareHeaders : (headers,{getState})=>{
        const token = getState().auth.token
        if (token){
            headers.set("authorization",`Beared ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args,api,extraOptions)=>{
    let result = await baseQuery(args,api,extraOptions)

    if (result?.error?.originalStatus === 403){
        console.log('sending refresh token')
        //sending refresh token to get the new access token
        const refreshResult = await baseQuery('/refresh',api,extraOptions)  //this is not the actual api i have
        console.log(refreshResult)
        if (refreshResult?.data){
            const user  = api.getState().auth.user

            //store the new token 
            api.dispatch(setCredentials({...refreshResult.data,user}))

            //retry the original query with new access token 
            result = await baseQuery(args,api,extraOptions)
        }
        else{
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery : baseQueryWithReauth,
    endpoints : builder => ({})
})