const mongoose=require('mongoose')


const Author = mongoose.model('Author',{
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    about:{
        type:String
    },
    image:{
        type:String
    },

})


module.exports=Author