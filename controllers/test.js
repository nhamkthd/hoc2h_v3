const Test=require('../models/Test')
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
    },function(req,res){
        
    })
}