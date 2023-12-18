import { ADD, SUB } from "./actionTypes"

export const reducer =(state ,{type,payload})=>{
    switch(type){
        case ADD:
            return {...state , Counter:state.Counter + payload}
        case SUB:
            return {...state , Counter:state.Counter - payload}
        default:
            return state
    }
}