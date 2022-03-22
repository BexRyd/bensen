import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import guy from "../img/guy.png";
import {get,post} from "../utility/educationApi"
import {useState} from 'react'
import "../css/Education.css"

function Education() {
  const [id, setId] = useState(0)
  const [counter, setCounter] = useState(Date.now())
  const [staff, setStaff] = useState = ([])
 
  const [eventLists, seteventLists] = useState([])
  
  return (
    <div>
     <Header />
     <div  className="Box">
     <input value={id} onChange={(event) => setId(event.target.value)}></input>
     <button onClick= {()=>{
       
          post('/Education',{
            id:counter,
            utbildningsledare: "test,",   // input fält med useState beskrivning mm
            utbildning: "lorem",           // dropdown för att utbildningsledare + utbildning
          }).then((response)=>console.log(response)) // hämta utbildningsledare från api, utbildning från array lista
          setCounter(Date.now());
        }}>CREATE</button>
        
       <button onClick= {()=>{
          get('/Education').then((response)=>seteventLists(response.data))
           get('/Staff').then((response)=>setStaff(response.data))
        }}>READ</button>
        
         
      
      
      {/* <img className="girlImg" src={guy} alt="computer" /> */}
      <div className="liBox">
      {eventLists.map((eventList)=> {
         return( 
           <li className="getLi" key={eventList.id}>{`${eventList.utbildning}`}</li>
          
       ) })} 
       {staff.map((staffs)=> {
         return( 
           <li className="getLi" key={staffs.id}>{`${staffs.firstName}`}</li>
          
       ) })} 



     </div>
     </div>
      <Footer />
    </div>
  );
}

export default Education;
