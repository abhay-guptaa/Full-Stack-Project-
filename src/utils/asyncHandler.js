import { json } from "express"
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  }
}


export {asyncHandler}


/* through try catch
const asyncHandler = (fn)=> async (req,res, next) =>{

    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code||500),json({
            success:false,//it is a succces flag just wnat ti know that the last process is succes or not
            message:err.message
        })
    }
}*/
