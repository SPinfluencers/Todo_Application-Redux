import * as types from "./action.types"
const initialstate={
  todo:[],
  isLoading:false,
  isError:false
}
export const reducer=(oldstate=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_TODO_REQUEST:{
           return {
            ...oldstate,
              isLoading:true
           }
        }
        case types.GET_TODO_SUCCESS:{
            return {
                ...oldstate,
                isLoading:false,
                todo: payload
            }
        }
        case types.GET_TODO_FAILED:{
            return {
                ...oldstate,
                isError:true
            }
        }


        case types.POST_TODO_REQUEST:{
            return {
             ...oldstate,
               isLoading:true
            }
         }
         case types.POST_TODO_SUCCESS:{
             return {
                 ...oldstate,
                  payload
             } 
         }
         case types.POST_TODO_FAILED:{
             return {
                 ...oldstate,
                 isError:true
             }
         }
        default:{
            return oldstate
        }
  
    }
}