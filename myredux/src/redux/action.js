import { ADD, GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAIL, POST_TODO_REQUEST, POST_TODO_SUCCESS, SUB } from "./actionTypes"


export const add=(payload)=>{
    return {type: ADD , payload}
}

export const sub =(payload)=>{
    return {type: SUB , payload}
}

export const todoRequest=()=>{
    return {type: GET_TODO_REQUEST}
}
export const todoSuccess=(payload)=>{
    return {type: GET_TODO_SUCCESS, payload}
}

export const todoFail=()=>{
    return {type: GET_TODO_FAIL}
}

export const postRequest=()=>{
    return {type: POST_TODO_REQUEST}
}

export const postSuccess=(payload)=>{
    return {type: POST_TODO_SUCCESS , payload}
}

export const postFailure=()=>{
    return {type: POST_TODO_FAIL}
}