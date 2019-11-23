let baseUrl = "http://localhost:8080/1908/ZOL.com";

define(['jquery','cookie'],function($,cookie){
    return {
        render:function(){
            let shop=cookie.get('shop');
           
            if(shop){
                shop=JSON.parse(shop);
                console.log(shop);
                let idList=shop.map(elm=>elm.id).join(); //取id并且用','链接
                $.ajax({
                    type: 'get',
                    url: '../../lib/shop.php',
                    data: {
                        idlist:idList
                    },
                    dataType: 'json',
                    success: function (res) {
                        console.log(res);
                        let tempstr='';
                        let tempstr2='';
                        res.forEach(elm=>{
                            let pic=JSON.parse(elm.pic);
                            let price=JSON.parse(elm.price);

                            let arr=shop.filter((val,i)=>{
                                return val.id ==elm.id;
                            });
                            tempstr+=` <div class="con"> <div class="con-1">
                            <div class="kuang"><input type="checkbox"></div>
                            <div class="smallimg"><img src="${baseUrl}/src/${pic[0].src1}" alt=""></div>
                            <div class="direction">
                                <p>${elm.title}</p>
                                <p>颜色：<span>黑色</span></p>
                            </div>
                        </div>
                        <div class="con-2">${price[0].p1}</div>
                        <div class="con-3">
                            <button class="minus" data-id="${elm.id}">-</button>
                            <button class="number">${arr[0].num}</button>
                            <button class="add" data-id="${elm.id}">+</button>
                        </div>
                        <div class="con-4">--</div>
                        <div class="con-5">${(price[0].p1*arr[0].num).toFixed(2)}</div>
                        <div class="con-6">
                            <p>加入收藏夹</p>
                            <p class="delete" >删除</p>
                        </div>
                    </div>
                 </div>`;

                    tempstr2=`<footer class="wrapper">
                    <div>商品总价<span>（不含运费）&nbsp;：</span><span>￥${(price[0].p1*arr[0].num).toFixed(2)}</span></div>
                </footer>`;});
                        $('.main-2').append(tempstr);
                        $('.zhongjia').append(tempstr2);
                        $('.delete').on('click',function(ev){
                            var sp=JSON.parse(cookie.get('shop'));
                            sp.splice($(ev.target.parentNode),1);
                            var ss=JSON.stringify(sp);
                            cookie.set('shop',ss,1);
                            location.reload();
                        });
                        $('main').on('click',function(ev){
                            let sp=JSON.parse(cookie.get('shop'));
                            // console.log(sp);
                            // console.log((ev.target).attr('data-id'));
                            if(ev.target.classList.item(0)==='minus'){
                               var x=ev.target.getAttribute('data-id');
                               let r=sp.find(i => i.id==x);
                               if(r.num==1){
                                 r.num=1;
                               }else{
                                r.num=Number(r.num)-1;
                                var sl=JSON.stringify(sp);
                               cookie.set('shop',sl,1);
                               location.reload();
                               }
                            }else if(ev.target.classList.item(0)==='add'){
                                var x=ev.target.getAttribute('data-id');
                               let r=sp.find(i => i.id==x);
                               if(r.num==29){
                                 r.num=29;
                               }else{
                                r.num=Number(r.num)+1;
                               }
                               var sl=JSON.stringify(sp);
                               cookie.set('shop',sl,1);
                               location.reload();
                            }
                               
                        });
                    }
                });
            }
        }
    }
})