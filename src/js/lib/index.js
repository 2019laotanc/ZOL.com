let baseUrl = "http://localhost:8080/1908/ZOL.com";

define(['jquery'],function($){
    return{
        render:function(){
            $.ajax({
                type: "get",
                url: `../../lib/getall.php`,
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    var data=res.slice(0,5);
                    let temp='';
                    data.forEach(elm=>{
                        let pic=JSON.parse(elm.pic);
                        console.log(pic);
                        let price=JSON.parse(elm.price);
                        console.log(price);
                        temp+=`<li>
                        <a href=""> <div><img src="${baseUrl}/src/${pic[0].src1}" alt=""></div>
                          <img src="${baseUrl}/src/${pic[0].src2}" alt="" class="img">
                          <p>${elm.title}</p>
                        </a>
                    <div class="pice"><span>￥</span>${price[0].p1}<span>￥${price[0].p2}</span></div>
                        </li>`;
                    });
                    $('.zs-1').append(temp);
                }
            });
        }
    }
})