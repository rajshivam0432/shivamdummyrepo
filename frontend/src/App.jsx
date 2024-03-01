import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 let [gdata,setgdata]=useState({})
const [companys,setCompanys]=useState([]);
useEffect(()=>{
  axios.get('/api/company')
 console.log("abcd")
  .then((response)=>{
    console.log(response)
  setCompanys(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})

  return (
    <>
      <h1>My Github data</h1>
      <p>company: {companys.length}</p>
      
      {
        companys.map((company)=>(
         <div key={company.id}>
          <h3>{company.name}</h3>
          <h3>{company.salary}</h3>
         </div>
          )
        )
      }
    </>
  )
}

export default App
