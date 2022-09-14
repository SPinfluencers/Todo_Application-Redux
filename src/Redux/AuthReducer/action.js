import * as types from "./action.types"

export const handleloginEmail=(payload)=>{
    return {
        type:types.EMAIL,
        payload
    }
}

export const handleloginpassword=(payload)=>{
    return {
        type:types.PASSWORD,
        payload
    }
}

export const handleloginrequest=()=>{
    return {
        type:types.LOGIN_REQUEST,
        
    }
}

export const handleloginsuccess=(payload)=>{
    return {
        type:types.LOGIN_SUCCESS,
        payload,
        
    }
}

export const handleloginfailure=()=>{
    return {
        type:types.LOGIN_FAILURE,
        
    }
}