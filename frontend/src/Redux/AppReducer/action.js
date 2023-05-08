import * as types from "./actionType"
import axios from "axios"
const getData=(payload)=>(dispatch)=>{
  dispatch({type:types.GET_PRODUCTS_REQUEST});
  return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/adds/search/${payload}`).then((r)=>{
    console.log(r.data)
    dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
  })
  .catch((e)=>{
    console.log(e);
    dispatch({type:types.GET_PRODUCTS_FAILURE})
  })
}

const getAllData=()=>(dispatch)=>{
  dispatch({type:types.GET_PRODUCTS_REQUEST});
  return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/adds/getall`).then((r)=>{
    console.log(r.data)
    dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
  })
  .catch((e)=>{
    console.log(e);
    dispatch({type:types.GET_PRODUCTS_FAILURE})
  })
}

export {getData,getAllData}