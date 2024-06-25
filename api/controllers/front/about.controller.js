import { About } from "../../models/index.js"

class aboutController {

    store = async(req,res,next)=>{
        try{
            const {name,email,subject,message} = req.body

            await About.create({name,email,subject,message})
            
            res.status(201).json({
                success:'Your response has been saved successfully'
            })
            

        }catch(e){
            console.error(e)
            next({message: 'problem while processing request', status: 400})
        }
    }


}

export default new aboutController