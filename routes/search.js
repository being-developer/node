var express = require('express');
var router = express.Router();


router.search('/searchuser/:name',function(req,res)
    {

        var db=req.db;
        var query=req.params.query;
        
    });