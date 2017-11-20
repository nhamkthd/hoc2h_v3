const Test=require('../models/Test')
const jwt = require('jsonwebtoken');
module.exports=function(router){
    router.post('/test',function(req,res,next){
        req.check('title','Tiêu đề không được để trống').notEmpty();
        req.check('category_id','Danh mục không được để trống').notEmpty();
        req.check('level','Độ khó không được để trống').notEmpty();
        req.check('numberOfQuestion','Số câu hỏi không được để trống').notEmpty();
        req.check('time','Thời gian không được để trống').notEmpty();
        let errors = req.validationErrors();
        if (errors) return res.status(422).json(errors);
        return next();
    },function(req,res,next){
        try {
           decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        return next();
    },function(req,res){
        let test =new Test();
        test.title=req.body.title;
        test.category_id=req.body.category_id;
        test.level=req.body.level;
        test.numberOfQuestion=req.body.numberOfQuestion;
        test.time=req.body.time;
        test.decriptions=req.body.decriptions;
        test.state=0;
        test.user_id=jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY).user_id;
        test.save(function(err,test){
            if(test)
                return res.status(200).json(test);
            else
                return res.status(422).json(test);
        });
        
    });
    router.get('/test',function(req,res){
        Test.find({},function(err,tests){
            return res.status(200).json(tests);
        })
    })
}