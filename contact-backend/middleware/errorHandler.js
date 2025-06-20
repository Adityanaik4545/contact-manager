const {constants}=require("../constants")
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
                res.json({
                    title:"VALIDATION ERROR",
                    message:err.message,
                    stackTrace:err.stack
                });
                break;
        case constants.NOT_FOUND:
                res.json({
                    title:"NOT FOUND",
                    message:err.message,
                    stackTrace:err.stack
                });
                break;
        case constants.FORBIDDEN:
                res.json({
                    title:"FORBIDDEN",
                    message:err.message,
                    stackTrace:err.stack
                });
                break;

        case constants.UNAUTHORIZED:
                res.json({
                    title:"UNAUTHORIZED",
                    message:err.message,
                    stackTrace:err.stack
                });
                break;

        case constants.SERVER_ERROR:
                res.json({
                    title:"server error",
                    message:err.message,
                    stackTrace:err.stack
                });
                break;

    
        default:
            console.log("no error all ok!");
            break;
    }
}
module.exports=errorHandler