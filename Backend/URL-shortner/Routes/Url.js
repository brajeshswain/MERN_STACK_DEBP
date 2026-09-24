const express=require("express")
const { handlenewshorturl }=require("../Controllers/URL")

const router =express.Router();

router.post('/',handlenewshorturl)

module.exports=router

