//register
exports.registerController = (req,res)=>{
    console.log("Inside Register controller");
    console.log(req.body);
    
    res.status(200).json("Register request recived")
}
//login
