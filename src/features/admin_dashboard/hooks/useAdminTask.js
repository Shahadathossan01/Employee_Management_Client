import { useContext } from "react"
import { AdminContext } from "../AdminProvider"
import axios from "axios"

export const useAdminTask=()=>{
    const {state,dispatch}=useContext(AdminContext)
    const token=localStorage.getItem('token')?localStorage.getItem('token'):null;
    const getAllTasks=async()=>{
        dispatch({
            type:"SET_LOADING",
            payload:true
        })
        const {data}=await axios.get(`http://localhost:3000/tasks`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({
            type:"GET_TASKS",
            payload:data
            
        })
        dispatch({
            type:"SET_LOADING",
            payload:false
        })
    }

    const getAllUsers=async()=>{
        dispatch({
            type:"SET_LOADING",
            payload:true
        })
        const {data}=await axios.get('http://localhost:3000/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({
            type:"GET_ALL_USERS",
            payload:data
        })
        dispatch({
            type:"SET_LOADING",
            payload:false
        })
    }

    const createTasks=async({title,description,publishDate,deadlineDate,assignedTo})=>{
        const {data}=await axios.post('http://localhost:3000/tasks',{
            title,
            description,
            published:publishDate,
            deadline:deadlineDate,
            assignedTo
        },
        {
            headers:{Authorization: `Bearer ${token}`}
        }
        )
        dispatch({
            type:"CREATE_TASK",
            payload:data
        })
    }

    const updateTasks=async({id,title,description,publishDate,deadlineDate,assignedTo})=>{
        console.log(publishDate)
        console.log(deadlineDate)
       const {data}=await axios.patch(`http://localhost:3000/tasks/${id}`,
        {
            title,
            description,
            published:publishDate,
            deadline:deadlineDate,
            assignedTo,
            status:"Panding",
            new_task:true,
            completed:false,
            failed:false
        },
        {
          headers:{Authorization: `Bearer ${token}`}  
        }
       )
       dispatch({
        type:"UPDATE_TASKS",
        payload:data
       })

    }

    const deleteTask=async({id})=>{
        const {data}=await axios.delete(`http://localhost:3000/tasks/${id}`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        dispatch({
            type:"DELETE_TASK",
            payload:data
        })
    }
    const deleteUser=async({id})=>{
        const {data}=await axios.delete(`http://localhost:3000/users/${id}`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        dispatch({
            type:"DELETE_USER",
            payload:data
        })
    }



    return {state,getAllTasks,getAllUsers,createTasks,updateTasks,deleteTask,deleteUser}
}