const express = require('express')
const router = express.Router()
 const educationCtrl = require('./controller/educationController')

const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

let educationLists = [
  {
    id: 2121211223,
    Utbildning: "Frontend Utveckling", 
    Utbildningsledare: "Alexander Wiklund",
    Kursnamn: "Avancerad Javascript",
    Beskrivning:"Object och Class orienterad javascript" 
  },
  {
    id: 2121211224,
    Utbildning: "Backeend Utveckling", 
    Utbildningsledare: "Arne Olofsson",
    Kursnamn: "Server",
    Beskrivning:"Mongo Databas, express server" 
  },
  {
    id: 2121211225,
    Utbildning: "UI/UX", 
    Utbildningsledare: "wisman desi",
    Kursnamn: "Visuell design",
    Beskrivning:"Layout verktyg och hemsida kunskap" 
  },
 
] 
  // todos

router.get('/Education',educationCtrl.getEducation, (request, response)=>{
    console.log({
        method: request.method,

    });
    response.json({
        status: 'success',
        method: request.method,
        data: educationLists,
    })
})

router.post('/Education',educationCtrl.createEducation,(request,response)=>{            // bodyparser behövs för att rendera text vi vill posta in
  console.log({
      method: request.method,
      body: request.body,
      data: educationLists,
      
      

  })
  const educationList = {
    id: request.body.id, 
   Utbildningsledare: request.body.Utbildningsledare,
   
   Utbildning: request.body.Utbildning,
   Kursnamn: request.body.Kursnamn,
   Beskrivning:request.body.Beskrivning,
    

  }
   educationLists.push(educationList)
  
  response.json({
    status: 'success',
    method: request.method,
    data: educationLists,
  });

})

 


 
// fetch('/api/update/7') // frontend
router.put('/Education/:educationListId',educationCtrl.updateEducation,  (request,response)=>{
  const educationListId = Number (request.params.educationListId)

  const Utbildningsledare = request.body.Utbildningsledare
  const Utbildning = request.body.Utbildning
  const Kursnamn = request.body.Kursnamn
  const Beskrivning = request.body.Beskrivning
 
  
  const newEducationList ={
    id:educationListId,
    Utbildningsledare,
    Utbildning,
    Kursnamn,
    Beskrivning,
    
    
   
  }

 

  const educationListIndex = educationLists.findIndex((educationList)=>educationList.id === educationListId) // hämtar ut index för todo vi vill uppdatera
  educationLists[educationListIndex] = newEducationList                                   // i det index vi hämtar ut vill vi skriva över med newTodo
    
  
  response.json({             // skickar tillbaka svar .status- success, metod -put 
    status: 'success',
    method: request.method,
    data: newEducationList,
  });

})


router.delete('/Education/:educationListId',educationCtrl.deleteEducation, (request,response)=>{
  const educationListId = request.params.educationListId
  
  const  educationListIndex = educationLists.findIndex((educationList)=>educationList.id == educationListId)

  if (educationListIndex > -1){
 educationLists.splice(educationListIndex, 1)
  }
  
  
  response.json({             // skickar tillbaka svar .status- success, metod -put 
    status: 'success',
    method: request.method,
    data: educationListId,
  });
})

module.exports = router


