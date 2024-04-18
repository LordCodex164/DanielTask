import toast from "react-hot-toast";

export function errorHandler (error:any, showToast=true) {
    //let handle and debug the error 
    console.log(error)
    if(error?.message && showToast) {
       toast.error(error?.message)
    }
    toast.error(error)
}