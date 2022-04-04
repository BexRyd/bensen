
const Education = require('../models/educationModels')

createEducation = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Education',
        })
    }

    const education = new Education(body)

    if (!education) {
        return res.status(400).json({ success: false, error: err })
    }

    education
        .save()
       
}

getEducation = async (req, res) => {
    await Education.find({}, (err, education) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!education.length) {
            return res
                .status(404)
                .json({ success: false, error: `education not found` })
        }
        return res.status(200).json({ success: true, data: education })
    }).clone().catch(err => console.log(err))
}



updateEducation = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'cant find education to update',
        })
    }

   

   
     await Education.findOne( {id: req.params.educationListId }, (err, education) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Education not found!',
            })
        }
        education.Utbildning =body.Utbildning
        education.Utbildningsledare = body.Utbildningsledare
        education.Kursnamn = body.Kursnamn
        education.Beskrivning = body.Beskrivning
        
        education
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: education._id,
                    message: 'Education updated!',
                })
            })
    }).clone().catch(err => console.log(err))
}



deleteEducation = async (req, res) => {
    await Education.findOneAndDelete({ id: req.params.educationListId }, (err, education) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!education) {
            return res
                .status(404)
                .json({ success: false, error: `Education not found` })
        }

        return res.status(200).json({ success: true, data: education })
    }).clone().catch(err => console.log(err))
}





module.exports = {
    createEducation,
    updateEducation,
    getEducation,
    deleteEducation,
    
    
   
}