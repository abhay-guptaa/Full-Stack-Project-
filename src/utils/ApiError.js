class ApiError extends Error{
    constructor(//these will be thing that user will give
        statusCode,
        mesage="Something went wrong",
        error=[],
        statck=""

    ){
        super(mesage)
        this.statusCode = statusCode
        this.data = null
        this.message= mesage
        this.success= false
        this.errors=this.errors

    if(statck){
        this.stack = statck

    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
    }
}

export {ApiError}