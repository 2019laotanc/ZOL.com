let baseUrl = "http://localhost:8080/1908/ZOL.com";

define(['jquery','cookie'],function($,cookie){
    return{
        ajax:function(callback){
            let id=location.search.split('=')[1];
            $.ajax({
                url:'../../lib/getitem.php',
                type:'get',
                data:{id:id},
                dataType:'json',
                success:function(res){
                    let pic=JSON.parse(res.pic);
                    let price=JSON.parse(res.price);
                    
                    let tempstr1=` <img src="${baseUrl}/src/${pic[0].src1}" alt="" class="show">
                    <img src="${baseUrl}/src/${pic[0].src4}" alt="">
                    <img src="${baseUrl}/src/${pic[0].src5}" alt="">
                    <img src="${baseUrl}/src/${pic[0].src6}" alt="">
                    <img src="${baseUrl}/src/${pic[0].src7}" alt="">`;

                    let tempstr2=` <div class="top">${res.title}</div>
                    <div class="price">
                        <span>价格</span>
                        <div class="price-1"><span>￥</span>${price[0].p1}</div>
                    </div>
                    <div class="select">
                        <span>颜色</span>
                        <ul class="ul">
                            <li>【128G】星河银<i></i></li>
                            <li>【128G】亮黑色<i></i></li>
                            <li>【128G】罗兰紫<i></i></li>
                            <li>【128G】翡冷翠<i></i></li>
                            <li>【256G】星河银<i></i></li>
                            <li>【256G】亮黑色<i></i></li>
                            <li>【256G】罗兰紫<i></i></li>
                            <li>【256G】翡冷翠<i></i></li>
                        </ul>
                    </div>
                    <div class="num">
                        <span>数量</span>
                        <div class="num-1">
                            <div class="jj">
                                <span class="minus">-</span><span class="number">1</span><span class="add">+</span>
                                <p>件 （库存${res.num}件）</p>
                            </div>
                        </div>
                    </div>`;

                    let tempstr3=`<li><img src="${baseUrl}/src/${pic[0].src1}" alt=""> <i class="active"></i></li>
                    <li><img src="${baseUrl}/src/${pic[0].src4}" alt=""> <i></i></li>
                    <li><img src="${baseUrl}/src/${pic[0].src5}" alt=""> <i></i></li>
                    <li><img src="${baseUrl}/src/${pic[0].src6}" alt=""> <i></i></li>
                    <li><img src="${baseUrl}/src/${pic[0].src7}" alt=""> <i></i></li>`;
                    $('.b-img').append(tempstr1);
                    $('.content-1-left').prepend(tempstr2);
                    $('.ul-1').append(tempstr3);
                   
                    // callback&&callback(res.id,res.price);
                    $('.content-1>ul>li>i').on('click',function(){
                        var index=$('.content-1>ul>li>i').index(this);
                        $(this).addClass('active').parent().siblings().children().removeClass('active');
                        $('.b-img>img').eq(index).addClass('show').siblings().removeClass('show');
                    });
                    $('.ul>li').on('click',function(){
                        var index=$('.ul>li').index(this);
                        $(this).addClass('border').siblings().removeClass('border');
                        $('.ul>li>i').eq(index).addClass('show').parent().siblings().children().removeClass('show');
                     });
                    $('.minus').on('click',function(){
                        if($('.number').text()<=0){
                            $('.number').text(0);
                        }else{
                            $('.number').text(( Number($('.number').html())-1));
                        }
                    });
                    $('.add').on('click',function(){
                        if($('.number').text()>=Number(res.num)){
                            $('.number').text(res.num);
                        }else{
                            $('.number').text(( Number($('.number').text())+1))
                        }
                    });
                    callback&&callback(res.id,res.price);
                }
            })
        },
        addItem:function(id,price,num){
           let shop=cookie.get('shop');

           let product={
               id:id,
               price:price,
               num:num
           };

           if(shop){
               shop=JSON.parse(shop);
               if(shop.some(elm=>elm.id==id)){
                   shop.forEach(elm=>{
                       elm.id==id?elm.num=num:null;
                   });
               }else{
                   shop.push(product);
               }
           }else{
               shop=[];
               shop.push(product);
           }
           cookie.set('shop',JSON.stringify(shop),1);
        }
    }
});