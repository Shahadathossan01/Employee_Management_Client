
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase";

export const useAuth=()=>{
    const {user,dispatch,registerData}=useContext(AuthContext)

    const login=async({email,password,navigate})=>{
       const {data}=await axios.post('http://localhost:3000/user/auth/login',{
        email,
        password
       })
       localStorage.setItem('user',JSON.stringify(data.user))
       localStorage.setItem('token',data.token)
       dispatch({
        type:"LOGIN",
        payload:{data}
       })
       if(data){
        data.user.role=='employee' && navigate('/employee_dashboard')
        data.user.role=='admin' && navigate('/admin_dashboard')
       }
    }

    const register=async({formData,navigate=false})=>{
        const {data}=await axios.post('http://localhost:3000/user/auth/register',{
            username:{
                firstname:formData.firstname,
                lastname:formData.lastname
            },
            email:formData.email,
            password:formData.password,
            role:formData?.role
        })
        console.log(data)
        dispatch({
            type:"REGISTER",
            payload:data
        })
        if(data && navigate){
            navigate('/login')
        }

    }

    const googleLogin=async({navigate})=>{
        try{
            const auth=getAuth(app)
            const provider=new GoogleAuthProvider()
            const result=await signInWithPopup(auth,provider)
            const {data}=await axios.post('http://localhost:3000/user/google',{
                username:{
                    firstname:result.user.displayName
                },
                email:result.user.email
            })
            localStorage.setItem('user',JSON.stringify(data.user))
            localStorage.setItem('token',data.token)
            dispatch({
                type:"GOOGLE_LOGIN",
                payload:{data}
               })
               if(data){
                data.user.role=='employee' && navigate('/employee_dashboard')
                data.user.role=='admin' && navigate('/admin_dashboard')
               }
        }catch(e){
            console.log(e)
        }
        
        
    }

    const logOut=async()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        dispatch({
            type:"LOGIN"
        })
    }

    return {user,login,logOut,register,googleLogin,registerData}
}