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

router.get('/getByIdAuth/:id',(res,req)=>{
    
})

router.delete('/delete/id',(res,req)=>{
    
})


router.put('/update/:id',(res,req)=>{
    
})




module.exports=router;