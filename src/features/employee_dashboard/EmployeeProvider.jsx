import { useReducer } from "react"
import { createContext } from "react"

const initialState={
    employeeTasks:[],
    updateTask:null,
}
const employeeReducer=(state,action)=>{
    switch(action.type){
        case "GET_TASKS":
           return {
            ...state,
            employeeTasks:action.payload
           }
        case "update_Task":
            return{
                ...state,
                updateTask:action.payload
            }
        default:
            throw new Error('Unknown action')
    }
}

export const EmployeeContext=createContext()

export const EmployeeProvider=({children})=>{
    const [state,dispatch]=useReducer(employeeReducer,initialState)

    return(
        <EmployeeContext.Provider value={{state,dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )
}