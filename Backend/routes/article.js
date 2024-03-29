const express = require('express')


const router = express.Router();

const uplaod = require('../services/uploadFile');


const Article = require('../models/article')


router.post('/add',uplaod.single('image'),(req,res)=>{

    const article = new Article({...req.body ,  image: req.file.filename});

    article.save().then((saved)=>{
        res.status(200).send(saved);
    }).catch(err=>{
        res.status(400).send(err);

    })
})

router.get('/getAll',async (req, res ) =>{
    try{
        
        const articles = await Article.find();

        res.status(200).json(articles);

    }catch(err){
            res.status(404).json({error:err.message});
    }
}
)

router.get('/getById/:id',async (req,res)=>{

    let id = req.params.id

    await Article.findOne({_id:id}).then(
        (articles)=>{
            res.status(200).send(articles);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);

        }
    )
    
})

router.get('/getByIdAuth/:id',async (req,res)=>{

    let id = req.params.id

    await Article.find({idAuthor:id})
    .then(
        (articles)=>{
            res.status(200).send(articles);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);

        }
    )
    
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