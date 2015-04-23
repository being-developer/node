var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.post('/userlist', function(req, res) {
    var db = req.db;
    db.collection('userdata').find().toArray(function (err, items) {
        res.json(items);
    });
});


/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    db.collection('userdata').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});


router.get('/searchuser', function(req, res) {
    var db = req.db;
    var ns=req.query.name;
    
   console.log(req);
    db.collection('userdata').find({ username : ns }).toArray(function (err, result) {
        res.json(result);
    });
});




router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('userdata').removeById(userToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
});





module.exports = router;
