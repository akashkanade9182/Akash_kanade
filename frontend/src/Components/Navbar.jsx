import React, { useState, useEffect } from 'react'
import "../Styles/Navbar.css"
import { getData } from '../Redux/AppReducer/action';
import { useDispatch } from 'react-redux';
const Navbar = () => {
     const [word, setWord] = useState("");
     const dispatch=useDispatch();

      const handleClick=(e)=>{
          if(word===""){
               dispatch(getData("i")) 
          }else{
               dispatch(getData(word))
          }
         
      }
     return (
          <div className='navbox'>
               <div className="searchbox">
                    <input type="search" onChange={(e)=>setWord(e.target.value)} placeholder='enter keywords' />
                    <div className='searchiconbox' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="2.5" stroke="#3495eb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                         <circle cx="10" cy="10" r="7" />
                         <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    </div>
                    
               </div>
          </div>
     )
}

export default Navbar