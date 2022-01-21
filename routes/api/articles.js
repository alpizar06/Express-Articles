var router = require('express').Router();
var mongoose = require('mongoose');

var Article = mongoose.model('Article');

router.get('/article', (req, res)=>{
    Article.find({},['title','description','body','author','commentList'],(err,articles) =>{
        res.json(articles);
    })
});

router.post('/article',(req, res) =>{
    var newArticle = req.body;
    var article = new Article();
    article.title = newArticle.title;
    article.description = newArticle.description;
    article.body = newArticle.body;
    article.author = newArticle.author;
    article.commentList = newArticle.commentList;

    article.save().then(() => {
        return res.json({isCreated: true});
    });
});

router.delete('/:id', (req, res)=>{
    Article.deleteOne({_id: req.params.id},() =>{
        res.json({isDeleted:true})
    })
});

router.put('/:id',(req,res) =>{
    Article.updateOne({_id: req.params.id},{$set:{
        name: req.body.name,
        bio: req.body.bio,
    }}).then(()=>{
        res.json({isUpdated: true});
    })
});


router.put('/AddComments/:id', (req, res) => {
    Article.findOneAndUpdate(
        {_id: req.params.id},
        {$push: {comments : req.body.comments}}
    ).then(() => {
        res.json({isUpdated: true});
    });
});

module.exports = router;