const path = require('path');
module.exports={   
    outputDir:"dist",
    assetsDir:"./measure",
    indexPath:"measureVue.html" ,
    devServer: {
        // proxy: {
        //     '/api':{
        //         target:'https://www.rcrn88.com' ,//接口域名
        //         // secure:true,
        //         changeOrigin:true
        //     }
        // }
        proxy: {
            //配置跨域
            '/api': {
                target: "https://www.rcrn88.com",
                ws:true,
                changOrigin:true              
            }
        }

      }
}