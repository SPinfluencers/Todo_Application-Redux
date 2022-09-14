import * as types from "./action.types"

export const gettodorequest=()=>{
  return {
    type:types.GET_TODO_REQUEST
  }
}

export const gettodosucess=(payload)=>{
    return {
      type:types.GET_TODO_SUCCESS,
      payload
    }
  }

  export const gettodofailed=()=>{
    return {
      type:types.GET_TODO_FAILED
    }
  }

  export const posttodorequest=()=>{
    return {
      type:types.POST_TODO_REQUEST
    }
  }
  
  export const posttodosucess=(payload)=>{
      return {
        type:types.POST_TODO_SUCCESS,
        payload
      }
    }
  
    export const posttodofailed=()=>{
      return {
        type:types.POST_TODO_FAILED
      }
    }