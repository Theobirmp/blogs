const express=require('express')
const router=express.Router();
const Favourite=require('../models/favourites')


router.get('/',async (req,res)=>{
    try{
        const favs= await Favourite.find()
        res.send(favs)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

router.post('/',async (req,res)=>{
    const newFav=new Favourite({
        name:req.body.name,
        summary:req.body.summary,
        body:req.body.body,
        topic:req.body.topic,
        date:req.body.date,
        rating:req.body.rating,
        blogId:req.body.blogId
    })
    try{
        const exists=await Favourite.findOne({name:newFav.name}).then().catch(err=>({message:err.message}))
        if(exists){
            return res.status(409).json(`blog with name: ${newFav.name} already exists.`)
        }
        const data= await newFav.save().then(console.log('new blog posted')).catch(e=>({message:err.message}))
        res.status(200).json('Blog added successfully to favourites')
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const deletedBlog=await Favourite.deleteOne({_id:req.params.id})
    res.status(200).json(`blog with id: ${req.params.id} delete succesfully`)
    console.log(`deleted blog with id: ${req.params.id}`)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})
module.exports = router;