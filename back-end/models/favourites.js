const mongoose=require('mongoose')
const favouritesSchema=mongoose.Schema({
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
    blogId:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Favourites',favouritesSchema)