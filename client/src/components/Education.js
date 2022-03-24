import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import guy from "../img/guy.png";
import {get,post} from "../utility/educationApi"
import {useState} from 'react'
import "../css/Education.css"

function Education() {
  const [id, setId] = useState(0)
 
  // const [staff, setStaff] = useState([])
  const [courses, setCourses] = useState([])
 
  const [eventLists, seteventLists] = useState([])
  const [chooseCourse, setChooseCourse] = useState("")
  
  return (
    <div>
     <Header />
     <div  className="Box">
     <input value={id} onChange={(event) => setId(event.target.value)}></input>
      <select
                className="select"
                value={courses}
                onChange={(event) => setChooseCourse(event.target.value)}
               
              > <option> Kurser </option>
                {courses.map((course) => { 
                 
                  return (
                   
                    <option className="CourseLi" key={course.id}>
                      {`${course.coursename} ${course.coursedescription} ${course.teacher}  ${course.courselenght}`}
                    </option>
                  );
                })}
        </select>

        <select
                className="select"
                value={courses}
                onChange={(event) => seteventLists(event.target.value)}
               
              > <option> Utbildningar </option>
                {eventLists.map((eventList) => { 
                 
                  return (
                   
                    <option className="educationLi" key={eventList.id}>
                      {`${eventList.utbildning} `}
                    </option>
                  );
                })}
              </select>
        

     <button onClick= {()=>{
       
          post('/Education',{
            id:Date.now(),
            utbildningsledare: "test,",   // input fält med useState beskrivning mm
            utbildning: "lorem",           // dropdown för att utbildningsledare + utbildning
          }).then((response)=>console.log(response)) // hämta utbildningsledare från api, utbildning från array lista
          
        }}>CREATE</button>
        
       <button onClick= {()=>{
          get('/Education').then((response)=>seteventLists(response.data))
           get('/Courses').then((response)=>setCourses(response.data))
        }}>READ</button>
        
         
      
      
      {/* <img className="girlImg" src={guy} alt="computer" /> */}
      <div className="liBox">
      {eventLists.map((eventList)=> {
         return( 
           <li className="getLi" key={eventList.id}>{`${eventList.utbildning} ${chooseCourse}`}</li>
          
       ) })} 


      



     </div>
     </div>
      <Footer />
    </div>
  );
}

export default Education;
