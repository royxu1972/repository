/*
 *  the APIs to respond query request
 */
var express = require('express');
var Paper = require('../model/Paper');
var Info = require('../model/Info');
var router = express.Router();

/* POST search list */
router.post('/search', function(req, res) {
    var content = req.body.content;
    //console.log(content);
    Paper.searchByInput(content, function (err, results) {
        res.send(JSON.stringify(results));
    });
});

/* POST all list */
router.post('/all', function(req, res) {
    Paper.getPaperAll(function (err, results) {
        res.send(JSON.stringify(results));
    });
});

/*
 *  POST query list
 *  group = author | field | subfield | booktitle
 *  content
 */
router.post('/query', function(req, res) {
    var group = req.body.group ;
    var content = req.body.content ;

    Paper.searchByContent(group, content, function (err, results) {
        res.send(JSON.stringify(results));
    });
});

/*
 *  POST author information list
 */
router.post('/author_info', function(req, res) {
    var content = req.body.content ;
    Info.getAuthorInfo(content, function (err, result) {
        res.send(JSON.stringify(result));
    });
});

module.exports = router;
