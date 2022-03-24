import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import guy from "../img/guy.png";
import {get,post} from "../utility/educationApi"
import {useState} from 'react'
import "../css/Education.css"

function Education() {
  const [id, setId] = useState(0)
 
  const [leaders, setLeaders] = useState([])
  const [courses, setCourses] = useState([])
  const [eventLists, seteventLists] = useState([])
  
  const [chooseCourse, setChooseCourse] = useState("")
  const [chooseEvent, setChooseEvent] = useState("")
  const [chooseLeader, setChooseLeader] = useState("")
  
 
  
     
  
  


  
  return (
    <div>
     <Header />
     
   <div  className="Box">
   
        
        
    <div className="createdEducationBox">
      
      <div className="liBox">
       <div className="topBox">
          <div className="bottomBox">
            {eventLists.map((eventList)=> {
            return( 
              <div>
          
            
           
           
             {leaders.map((leader)=>{
               return(
                 <div>
                {courses.map((course)=>{
                return(
              <div>
              <li className="getLi" key={eventList.id}>
              
                  <p>
             <b>Utbildning:</b> {eventList.utbildning}
            </p>
           
            <p>
             <b>Utbildningsledare:</b> {leader.profession}
            </p>
            
            <p>
             <b>Kurs Namn:</b> {course.coursename}
            </p>
            </li>
           </div>
         
           )
            })}  
                
             </div>
            
               )
           
         
           
            })}  

{/*             
            id: 36748940392840,
    coursename: "Frontend",
    coursedescription: "LoremIpsum",
    teacher: "Dan Kingbrandt",
    courselength: "5weeks", */}
            
            
            
           
            </div>
            
            ) })} 
          </div>
        </div>
      </div>
    
        
     </div> 
     <input  className="input1Id" value={id} onChange={(event) => setId(event.target.value)}></input>
     <div className="createEducationbox">
     <select
                className="leader1select"
                value={leaders}
                onChange={(event) => setChooseLeader(event.target.value)}
               
              > <option> Utbildningar </option>
                {leaders.map((leader) => { 
                 if (leader.profession === "Utbildningsledare"){
                  return (
                   
                    <option className="educationLi" key={leaders.id}>
                      {`${leader.firstName} ${leader.lastName} `}
                    </option>
                  );}
                })}
              </select>

        
        <select
                className="event1select"
                value={eventLists}
                onChange={(event) => setChooseEvent(event.target.value)}
               
              > <option> Utbildningar </option>
                {eventLists.map((eventList) => { 
                 
                  return (
                   
                    <option className="educationLi" key={eventList.id}>
                      {`${eventList.utbildning} ${eventList.utbildningledare} ${eventList.kurs} ${eventList.ID} `}
                    </option>
                  );
                })}
              </select>

     
      <select
                className="course1select"
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

        <textarea id="beskrivning" className="beskrivningBox" rows="10" cols="30"> </textarea>

       

        

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
           get('/Staff').then((response)=>setLeaders(response.data))
           
         
        }}>READ</button>
        
        </div>
      
      
      {/* <img className="girlImg" src={guy} alt="computer" /> */}
     
     </div>
      <Footer />
    </div>
  );
}

export default Education;
