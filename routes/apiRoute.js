const router = require('express').Router;

router.get('/notes', (req, res)=>{
    res.json('Get!');
});

router.post('/notes', (req, res)=>{
    
})