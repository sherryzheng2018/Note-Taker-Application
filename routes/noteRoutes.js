const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const notes = require("../db/db.json")

router.get("/",(req,res)=>{
    res.json(notes)
})

router.get("/:id",(req,res)=>{
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].id==req.params.id){
           return res.json(notes[i])
        }   
    }
    res.status(404).send("no note found")
})

router.post("/",(req,res)=>{
    console.log(req.body);
    let note = req.body;
    note.id = uuidv4()
    notes.push(note)
    fs.writeFileSync("./db/db.json",JSON.stringify(notes,null,4))
    console.log("done")
    res.json({message:"data recieved"})
     
}) 

router.delete("/:id",(req,res)=>{
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].id==req.params.id){
            const deleted = notes.splice(i,1)
            fs.writeFileSync("./db/db.json",JSON.stringify(notes,null,4))
            res.json(deleted);
            return;
        }   
    }
    res.status(404).send("no note found")
})


module.exports = router;