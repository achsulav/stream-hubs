import { About } from "../../models/index.js"

class aboutController {

    index = async(req,res,next)=>{
        try{
            const about = await about.find()
            res.json(about)
        }catch(e){
            next({message: 'problem while processing request', status: 400})
        }
    }
    
    store = async(req,res,next)=>{
        try{
            const {name,email,subject,message} = req.body

            await about.create({name,email,subject,message})
            
            res.status(201).json({
                success:'Your response has been saved successfully'
            })
            

        }catch(e){
            console.error(e)
            next({message: 'problem while processing request', status: 400})
        }
    }


    destroy = async(req,res,next)=>{
        try{
            await About.findByIdAndDelete(req.params.id)
            res.json({
                success:'About removed'
            })
        }catch(e){
            next({message:'Problem while processing request', status: 400})
        }
    }
}

export default new aboutController