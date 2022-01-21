var router = require('express').Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

router.get('/user', (req, res)=>{
    User.find({},['fullname','email','bio','birthdate'],(err,users) =>{
        res.json(users);
    })
});

router.post('/user',(req, res) =>{
    var newUser = req.body;
    var user = new User();
    user.name = newUser.name;
    user.email = newUser.email;
    user.birthdate = newUser.birthdate;
    user.bio = newUser.bio;
    user.setPassword(newUser.password);

    user.save().then(() => {
        return res.json({isCreated: true});
    });
});

router.delete('/:id', (req, res)=>{
    User.deleteOne({_id: req.params.id},() =>{
        res.json({isDeleted:true})
    })
});

router.put('/:id',(req,res) =>{
    User.updateOne({_id: req.params.id},{$set:{
        name: req.body.name,
        bio: req.body.bio,
    }}).then(()=>{
        res.json({isUpdated: true});
    })
});

module.exports = router;