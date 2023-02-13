const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (e) {
    res.send(`Error ${e}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (e) {
    res.send(`Error ${e}`);
  }
});

router.post("/", async (req, res) => {
  const { name, tech, sub } = req.body;
  const alien = new Alien({
    name,
    tech,
    sub,
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (e) {
    res.send("Error", +e);
  }
});

router.patch("/:id", async(req,res)=>{
       try{
            const alien = await Alien.findById(req.params.id);
            alien.sub = req.body.sub;
            const a1 = await alien.save();
            res.json(a1);
       }catch(e){
        res.send(`Error ${e}`);
       } 
})

router.delete("/:id",async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        const a1 = await alien.remove();
        res.json(a1);
   }catch(e){
    res.send(`Error ${e}`);
   } 
})

module.exports = router;
