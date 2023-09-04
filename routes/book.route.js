const express=require('express')
const { createBook } = require('../controllers/book.controller')
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Book route is displaying data")
})
router.post("/",createBook);
module.exports=router;