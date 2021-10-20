const logReq = (req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`)
    console.log(`Time: ${Date.now()}`)
    next();
}

module.exports = logReq;