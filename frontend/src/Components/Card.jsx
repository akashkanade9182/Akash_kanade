import React ,{useState,useEffect}from 'react'
import "../Styles/Card.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const getCompany=(payload)=>{
     return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/company/${payload}`)
}
const Card = ({ name,companyId, primaryText, headline, description, CTA, imageUrl }) => {
const [company,setCompany]=useState([])
const navigate=useNavigate()

useEffect(()=>{
getCompany(companyId).then((r)=>{
     setCompany(r.data)
})
},[companyId])
     return (
          <div className='card'>
               <h1 className='headline'>{headline}</h1>
               <img src={imageUrl} alt="err" />
               <h1 className='name'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="7 7 12 12 7 17" />
                    <polyline points="13 7 18 12 13 17" />
               </svg><span style={{ fontWeight: "bold" }}>Company:-</span>{name}</h1>
               <h2 className="primarytext">{primaryText}</h2>
            
              <p> <span>Description</span>:-{description}</p>
              <p> <span>Url</span>:-<a style={{fontWeight:"bold",textDecoration:"none"}} href={company.length>0?company[0].url:""}>{name}.com</a></p>
          </div>
     )
}

export default Card