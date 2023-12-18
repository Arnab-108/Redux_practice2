import { ADD, SUB } from "./actionTypes"


export const add=(payload)=>{
    return {type: ADD , payload}
}

export const sub =(payload)=>{
    return {type: SUB , payload}
}