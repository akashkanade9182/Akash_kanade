import React,{useState,useEffect} from 'react'
import "../Styles/SearchPage.css"
import Card from '../Components/Card'
import { getAllData } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
const SearchPage = () => {
  const dispatch=useDispatch();
  const data=useSelector(store=>store.data)
  const  isLoading=useSelector(store=>store.isLaoding);
  useEffect(()=>{
    dispatch(getAllData());
    console.log(data)
    
  },[])
if(isLoading){
  return (
    <div className="loadbox">
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />

    </div>
  )
}
  return (
    <>
        {/* <Navbar/> */}

    <div className="mainbox">
      <div className="resultbox">
        total result:-{data ?data.length:0 }
      </div>
      <div className="gridbox">
        {
          data && data.map((ele,index)=>(
            <Card key={index} {...ele}/>
          ))
        }

      </div>
    </div>
    </>
  )
}

export default SearchPage