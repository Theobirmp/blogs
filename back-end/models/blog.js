const mongoose =require('mongoose');
const blogSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    rating:{
        type:Number,
        default:function(){
            return (Math.floor(Math.random()*50))/10
        }
    },
    isFavourite:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('Blog',blogSchema);