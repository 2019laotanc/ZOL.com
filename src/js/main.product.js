require.config({
    paths:{
        jquery:"../../node_modules/jquery/dist/jquery",
        product:"./lib/product",
        cookie:"./lib/cookie"
    },
    shim:{}
});
require(['jquery','product'],function($,product){
   product.ajax(function(id,price){
       $('.btn-1').on('click',function(){
           product.addItem(id,price,$('.number').text());
       })
   })
});