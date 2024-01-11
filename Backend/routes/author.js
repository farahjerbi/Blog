const express = require('express')
const router = express.Router();
const Author = require('../models/author')
const uplaod = require('../services/uploadFile');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register',uplaod.single('image'),(req,res)=>{

    const author = new Author({...req.body ,  image: req.file.filename});
    salt = bcrypt.genSaltSync(10);
    author.password = bcrypt.hashSync(author.password , salt);
    author.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.post('/login',(req,res)=>{

    let  data = req.body;

    Author.findOne({email:data.email})
            .then(
                (author)=>{
                    let valid = bcrypt.compareSync(data.password,author.password)
                    if(!valid){
                        res.send('email or password invalid')
                    }else{
                        let payload = {
                            _id:author.id,
                            email:author.email,
                            fullname:author.firstname + '' + author.lastname
                        }

                        let token = jwt.sign(payload,'secretKey237')
                        res.send({mytoken:token})
                    }
                }
            ).catch(
                err=>{
                    res.send(err);
                }
            )

    
})


router.get('/getall',(req,res)=>{

    Author.find({})
        .then((authors)=>{
        res.status(200).send(authors);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.get('/getById/:id',(req,res)=>{
    let id = req.params.id
    Author.findOne({_id:id})
    .then((author)=>{
    res.status(200).send(author);
}).catch(err=>{
    res.status(400).send(err);

})
})


router.delete('/delete/:id',(req,res)=>{
    let id = req.params.id

    Author.findByIdAndDelete({_id:id})
    .then(
        (author)=>{
            res.status(200).send(author);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);

        }
    )
})


router.put('/update/:id',uplaod.single('image'),(req,res)=>{

    let id = req.params.id

    let data = req.body;

    Author.findByIdAndUpdate({_id:id} , data)
    .then(
        (author)=>{
            res.status(200).send(author);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);

        }
    )
    
})


module.exports=router;