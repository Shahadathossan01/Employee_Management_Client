import { useContext } from "react"
import { EmployeeContext } from "../EmployeeProvider"
import axios from "axios"

export const useEmployee=()=>{
    const {state,dispatch}=useContext(EmployeeContext)
    const token=localStorage.getItem('token')?localStorage.getItem('token'):null;
    
    const getAssignedTask=async({id})=>{
        const {data}=await axios.get(`http://localhost:3000/user/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({
            type:"GET_TASKS",
            payload:data.assignedTasks
            
        })
    }

    const updateTaskInProgress=async({id})=>{
        const {data}=await axios.patch(`http://localhost:3000/tasks/${id}`,
            {status:"In Progress",new_task:false},
            {headers:{Authorization: `Bearer ${token}`}}
        )
        dispatch({
            type:"update_Task",
            payload:data
        })
    }
    const updateTaskToMakeComplete=async({id})=>{
        const {data}=await axios.patch(`http://localhost:3000/tasks/${id}`,
            {status:"Completed",completed:true},
            {headers:{Authorization: `Bearer ${token}`}}
        )
        dispatch({
            type:"update_Task",
            payload:data
        })
    }
    const updateTaskCancel=async({id})=>{
        const {data}=await axios.patch(`http://localhost:3000/tasks/${id}`,
            {new_task:false,status:"Canceled",failed:true},
            {headers:{Authorization: `Bearer ${token}`}}
        )
        dispatch({
            type:"update_Task",
            payload:data
        })
    }


    return {state,getAssignedTask,updateTaskInProgress,updateTaskToMakeComplete,updateTaskCancel}
}
