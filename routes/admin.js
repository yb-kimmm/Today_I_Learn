const express = require('express');
const router = express.Router();

function testMeddleware( req , res , next ){
    console.log('첫번째 미들웨어');
    next();

}

function testMeddleware2( req , res , next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/' , testMeddleware , testMeddleware2 , (req ,res) =>{
    res.send('admin 이후 url');
});

router.get('/products' , (req ,res) =>{
    // res.send('admin products  이후 url');
    res.render('admin/products.html' , {
        message : 'hello' ,
        online : 'online'
    });
});

router.get('/products/write' , (req , res) =>{
    res.render('admin/write.html' );
});

router.post('/products/write' , (req , res) =>{
    res.send(req.body);
})

module.exports = router;
