const router = require('express').Router();
const store = require('../db/store');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../')

router.get('/notes', (req, res)=>{
    res.json('Get!');
});

router.post('/notes', (req, res)=>{
    store.addNote(req.body);
    res.json('post!');
});

module.exports = router;