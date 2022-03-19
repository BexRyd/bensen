const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

let educationLists = []   // todos

router.get('/read', (request, response)=>{
    console.log({
        method: request.method,

    });
    response.json({
        status: 'success',
        method: request.method,
        data: educationLists,
    })
})

router.post('/create',(request,response)=>{            // bodyparser behövs för att rendera text vi vill posta in
  console.log({
      method: request.method,
      body: request.body,

  })
  const educationList = {
    id: request.body.id,
    utbildningsledare: request.body.utbildningsledare,
    beskrivning: request.body.beskrivning,

  }
educationLists.push(educationList)
  
  response.json({
    status: 'success',
    method: request.method,
    data: educationList,
  });

})
// fetch('/api/update/7') // frontend
router.put('/update/:educationListId', (request,response)=>{
  const educationListId = Number (request.params.educationListId)

  const utbildningsledare = request.body.utbildningsledare
  const beskrivning = request.body.beskrivning
  
  const newEducationList ={
    id:educationListId,
    utbildningsledare: utbildningsledare,
    beskrivning:beskrivning,
  }

  const educationListIndex = educationLists.findIndex((educationList)=>educationList.id === educationListId) // hämtar ut index för todo vi vill uppdatera
  educationLists[educationListIndex] = newEducationList                                   // i det index vi hämtar ut vill vi skriva över med newTodo
    
  
  response.json({             // skickar tillbaka svar .status- success, metod -put 
    status: 'success',
    method: request.method,
    data: newEducationList,
  });

})


router.delete('/delete/:educationListId', (request,response)=>{
  const educationListId = request.params.educationListId

  const  educationListIndex = educationLists.findIndex((educationList)=>educationList.id == educationListId)
  educationLists.splice(educationListIndex, 1)
  
  response.json({             // skickar tillbaka svar .status- success, metod -put 
    status: 'success',
    method: request.method,
    data: educationListId,
  });
})

module.exports = router


