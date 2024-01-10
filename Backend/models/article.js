const mongoose=require('mongoose')


const article = mongoose.Schema({
    title:{
        type:String
    },
    idAuthor:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
        },
        
    content:{
        type:String
    },
    image:{
        type:String
    }, 
     tags:{
        type:Array
    },


})

module.exports = mongoose.model("Article" , article)
