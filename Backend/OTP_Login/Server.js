const express = require('express');
const app = express();
const PORT = 9000;

app.use(express.json());
app.use(express.static('public'));

let generatedOTP = null;
let loggedInUser = null;

//generate OTP
function generateOTP() {

return Math.floor(100000 + Math.random() * 900000)
}

//send OTP
app.post("/send-otp",(req,res)=>{
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return res.status(400).json({ meassage: "Phone number is required" });
    }
    generatedOTP = generateOTP();
    console.log("OTP",generatedOTP);
    res.json({ message: "OTP sent successfully" });
})

// verify OTP ->
app.post("/verify-otp",(req ,res)=>{
    const{phone,otp}=req.body;

    if (!phone||!otp){
        return res.status(400).json({
            message:"phone number & otp is required"
        })
    }
    if(Number(otp)!==generatedOTP){
        return req.status(401).json({
            message:"invalid OTP"
        })
    }
    loggedInUser=phone;

    res.json({
        message:"Login is successfully",
        user:phone
    })

})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});