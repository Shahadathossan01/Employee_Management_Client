import { useState } from "react";
import { useAdminTask } from "../hooks/useAdminTask";

const TableBodyItems = ({item,index}) => {
  const {deleteUser}=useAdminTask()
  const [visibility,setVisibility]=useState({})
  const toggleVisibility=(id)=>{
    setVisibility((prev)=>({
      ...prev,
      [id]:!prev[id]
    }))
  }
    return (

      <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
        {index + 1}
      </td>
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{item?.username?.firstname || ''} {item?.username?.lastname || ''}</td>
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{item.email}</td>
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
        <div className="flex justify-center gap-3 items-center">
          {
            visibility[item._id]?(
              <h1>{item.rowPassword}</h1>
            ):
            (
              <h1>...........</h1>
            )
          }
          <div className="flex">
            <button onClick={()=>toggleVisibility(item._id)}> 
              {
                visibility[item._id]?(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
                ):
                (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
                )
              }
            </button>
          </div>
        </div>
        
       


      </td>
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{item.role}</td>
      <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
        <button onClick={()=>deleteUser({id:item._id})} className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 ml-2">Delete</button>
      </td>
    </tr>
    );
};

export default TableBodyItems;