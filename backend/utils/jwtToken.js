export const sendToken = (item,statusCode,res,message)=>{
    const token = item.getJWTToken();
    const options={
    expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
    ),
    httpOnly: true,
}
res.status(statusCode).cookie("token",token,options).json({
    success : true,
    item,
    message,
    token,
})
}
