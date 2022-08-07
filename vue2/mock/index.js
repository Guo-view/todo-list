const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5')

function getjsonFile(filePath){
    var json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8')
    return JSON5.parse(json)
}

module.exports = function(app){
    console.log(app,'ddddddd');
    console.log(process.env.Mock,'fffffff');
    if(process.env.Mock == "true"){
        app.get('/user/userinfo',function(rep,res){
            var json = getjsonFile('./userInfo.json5')
            res.json(Mock.mock(json))
        })
    }
}