import { useReducer } from "react"
import { createContext } from "react"

const initialState={
    tasks:[],
    users:[],
    loading:false,
    createNewTask:null,
    updateTask:null,
    deleteTask:null,
    deleteUser:null,
}
const adminTaskReducer=(state,action)=>{
    switch (action.type){
        case "GET_TASKS":
            return {
                ...state,
                tasks:action.payload
            }
        
        case "GET_ALL_USERS":
            return {
                ...state,
                users:action.payload
            }
          
        case "SET_LOADING":
            return {
                ...state,
                loading:action.payload
            }
        
        case "CREATE_TASK":
            return {
                ...state,
                createNewTask:action.payload
            }
        case "UPDATE_TASKS":
            return {
                ...state,
                updateTask:action.payload
            }
        case "DELETE_TASK":
            return {
                ...state,
                deleteTask:action.payload
            }
          case "DELETE_USER":
            return {
                ...state,
                deleteUser:action.payload
            }  
        default:
            throw new Error("Unknown action")    
    }

}

export const AdminContext=createContext()

export const AdminProvider=({children})=>{
    const [state,dispatch]=useReducer(adminTaskReducer,initialState)

    return (
        <AdminContext.Provider value={{state,dispatch}}>
            {children}
        </AdminContext.Provider>
    )
}