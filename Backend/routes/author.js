const express = require('express')
const router = express.Router();
const Author = require('../models/author')
const uplaod = require('../services/uploadFile');
const bcrypt = require('bcrypt')

router.post('/register',uplaod.single('image'),(req,res)=>{

    const author = new Author({...req.body ,  image: req.file.filename});
    salt 
    article.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.post('/login',(req,res)=>{

    const article = new Article({...req.body ,  image: req.file.filename});

    article.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.get('/getall',(req,res)=>{

    const article = new Article({...req.body ,  image: req.file.filename});

    article.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.get('/getById/:id',(req,res)=>{

    const article = new Article({...req.body ,  image: req.file.filename});

    article.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})


router.delete('/delete/:id',(req,res)=>{
    let id = req.params.id

    Article.findByIdAndDelete({_id:id})
    .then(
        (article)=>{
            res.status(200).send(article);
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

    Article.findByIdAndUpdate({_id:id} , data)
    .then(
        (article)=>{
            res.status(200).send(article);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);

        }
    )
    
})


module.exports=router;