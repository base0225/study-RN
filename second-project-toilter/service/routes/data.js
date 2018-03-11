/**
 * Created by zhujia on 2017/2/11.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

//读取模块数据  供客户端使用
// /data/read/it
// /data/read/it.json
router.get('/read', function(req, res, next) {
    var type = req.param('type') || '';
    fs.readFile(PATH + type + '.json', function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:'读读物文件异常(1)',
            })
        }
        var COUNT = 50;
        //TODO:try catch
        var obj = [];
        try{
            obj = JSON.parse(data.toString());
        }catch (e){
            obj = [];
        }
        if(obj.length>COUNT)
        {
            obj = obj.slice(0, COUNT);
        }
        return res.send({
            status:1,
            data:obj,
        })
    });

});

//数据存储模块  后台开发的接口
router.post('/write',function (req, res, next) {
    var type = req.param('type') || '';
    //关键的字段
    var url = req.param('url') || '';
    //获取title
    var title = req.param('title') || '';
    //获取图片
    var img = req.param('img') || '';
    if(!type || !url || !img || !title){
        return res.send({
            status:0,
            info:'提交的信息不全',
        })
    }
    //1)读取文件

    var filePath =  PATH + type + '.json';

    fs.readFile(filePath, function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:'读读物文件异常(2)',
            })
        }

        var arr = JSON.parse(data.toString());
        //代表每一条记录
        var obj = {
            url:url,
            title : title,
            img : img,
            id : guidGenerate(),
            time:new Date()
        };

        arr.splice(0,0,obj);
        //2)写入文件
        var newData = JSON.stringify(arr);
        fs.writeFile(filePath, newData, function (err) {
            if(err){
                return res.send({
                    status:0,
                    info:'写入文件失败',
                });
            }
            return res.send({
                status:1,
                info:obj,
            })
        });
    })

});

//阅读模块写入接口  后台开发的接口
router.post('/write_config',function (req,res,next) {
    //TODO:后期提交数据,是需要对数据进行验证的,防止XSS攻击
    //防止xss攻击
    //npm install xss
    //require('xss')
    //var str = xss(name),

    var data = req.body.data;
    var obj = JSON.parse(data);
    var newData = JSON.stringify(obj);
    //写入
    fs.writeFile(PATH + 'config.json',newData,function (err) {
        if(err){
            return res.send({
                status:0,
                info:'写入数据失败',
            })
        }
        return req.send({
            status:1,
            info:obj,
        })
    })
})

//登录接口
router.post('/login',function (req , res, next) {
    //用户名 密码 验证码
    var username = req.body.username;
    var password = req.body.password;

    //TODO:对用户名 密码进行校验
    //xss 判空

    //密码加密 (md5)
    //密码需要加密->可以写入json
    if(username === 'base' && password === '123456')
    {
        req.session.user = {
            username:username
        };
        return res.send({
            status: 1
        });
    }
    return res.send({
        status: 0,
        info: '登录失败'
    });
});

//guid
function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;

