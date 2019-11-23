//配置
require.config({
    paths:{
        jquery:"../../node_modules/jquery/dist/jquery",
        index:"./lib/index"
    },
    shim:{}
});
require(['jquery','index'],function($,index){
    index.render();
    index.addItem();
});


