const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Education = new Schema(
    {
        id: { type: Number, required: true },
        Utbildning: { type: String, required: true },
        Utbildningsledare: { type: String, required: true },
        Kursnamn:{ type: String, required: true },
        Beskrivning:{ type: String, required: true },
     }, 
     
     {timestamps: true },
    
    
)

module.exports = mongoose.model("Education",Education)