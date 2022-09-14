import { accessData, saveData } from "../../utils/localstorage"
import * as types from "./action.types"
const inititalstate={
    email:"",
    password:"",
    isAuth:accessData("token")? true:false,
    token:accessData("token") || "",
    isLoading:false,
    isError:false
}

export const reducer=(oldstate=inititalstate,action)=>{
    const {type,payload}=action
     switch(type){
        case types.EMAIL:{
            return {
                ...oldstate,
                 email:payload
            }
        }
        case types.PASSWORD:{
            return {
                ...oldstate,
                 password:payload
            }
        }
        case types.LOGIN_REQUEST:{
            return {
                ...oldstate,
                 isLoading:true,
            }
        }
        case types.LOGIN_SUCCESS:{
         saveData("token",payload)
         console.log(payload)
            return {
                ...oldstate,
                 isLoading:false,
                 token:payload,
                 isAuth:true
            }
        }
        case types.LOGIN_FAILURE:{
            return {
                ...oldstate,
                 isLoading:false,
                 token:"",
                 isAuth:false,
                 isError:true,
            }
        }
        default:
            return oldstate
     }
}