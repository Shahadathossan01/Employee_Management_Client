import { createContext, useReducer } from "react"

const initialState={
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    registerData:null,
}

const authReducer=(state,action)=>{
    switch(action.type){
        case "REGISTER":
            return {
                ...state,
                registerData:action.payload
            }
        case "LOGIN":
            return {user:action.payload?.data?.user}
        case "GOOGLE_LOGIN":
            return {user:action.payload?.data?.user}
        case "LOGOUT":
            return {user:null}
        default:
            throw new Error("Unknown action type")
    }
}

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [state,dispatch]=useReducer(authReducer,initialState)

    return (
        <AuthContext.Provider value={{user:state.user,dispatch,registerData:state.registerData}}>
            {children}
        </AuthContext.Provider>
    )
}

