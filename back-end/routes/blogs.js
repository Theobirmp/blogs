const express=require('express');
const router=express.Router();
const Blog=require('../models/blog')


router.get('/',async (req,res)=>{
    try{
        const data=await Blog.find();
        res.status(200).json(data);
    }catch{
        res.status(400).json("sth went wrong")
    }
})

router.get('/:name',getBlogByName,async (req,res)=>{
    try{
    res.status(200).json(res.blog)
    }catch(err){
        return res.status(400).json({message:err.message});
    }
})

router.post('/',async (req,res)=>{
    console.log('post request BLOGS')
    const newBlog=new Blog({
        name:req.body.name,
        summary:req.body.summary,
        body:req.body.body,
        topic:req.body.topic,
        date:Date.now(),
        rating:req.body.rating
    })
    try{
        const blog=await newBlog.save();
        res.status(200).json(blog);
    }catch(err){
        res.status(400).json({message:err.message});
    }

})
router.patch('/:id',async(req,res)=>{
    try{
        const blog= await Blog.findById(req.params.id)
        blog.isFavourite=!blog.isFavourite;
        try{
            const updatedBlog=await blog.save()
        }catch(err){
            res.status(500).json({message:err.message})
    }
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
//DELETE ALL USERS
// router.delete('/',async (req,res)=>{
//     try{
//         const deleteAll = await Subscriber.find()
//         res.status(200).json("Found all users")
//         try{
//             deleteAll.map(sub=>{
//                 Subscriber.deleteOne({name:sub.name})
//                                 })
//         }catch(err){
//         res.status(400).json({message:err.message})
//         }
//     }catch(err){
//         return res.status(400).json({message:err.message})
//     }
// })
router.delete('/:name',getBlogByName,async (req,res)=>{
    // const sub=getSubscriberByName();
    try{
    const data=await Blog.deleteOne({name:req.params.name})
    console.log(data)
    if(data.deletedCount)res.status(200).json("Deleted blog with name: "+req.params.name)
    if(!data.deletedCount)res.status(401).json("Cant find blog with name: "+req.params.name)
    }catch(err){
        res.status(404).json({message:err.message})
    }
})


async function getBlogByName(req,res,next){
    let blog;
    try{
    blog=await Blog.findOne({name:req.params.name});
    }catch(err){
       return res.status(404).json({message:err.message})
    }
    res.blog=blog;
    next();
}
module.exports=router;