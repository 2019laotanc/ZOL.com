define(['jquery','md5'],function($,md5){
    return {
        addItem:function(){
            var reg = {
                'username': /^1[356789]\d{9}$/,
                'password': /^.{6,16}$/
            };
            $('#username').on('keyup',function(){
                if(reg.username.test(this.value)){
                    $('.yz1').html('通过验证');
                    $('.yz1').css('color','green');
                }else{
                    $('.yz1').html('请重新输入');
                    $('.yz1').css('color','red');
                }
            }),
            $('#password').on('keyup',function(){
                if(reg.password.test(this.value)){
                    $('.yz2').html('通过验证');
                    $('.yz2').css('color','green');
                }else{
                    $('.yz2').html('请重新输入');
                    $('.yz2').css('color','red');
                }
            }),
            $('.mima').on('keyup',function(){
                if($('#password').val() === $('.mima').val()){
                    $('.yz3').html('通过验证');
                    $('.yz3').css('color','green');
                }else{
                    $('.yz3').html('密码不正确');
                    $('.yz3').css('color','red');
                }
            })
        },
        btn1:function(){
            $('.zc').on('mouseenter',function(){

                console.log( $('.yz3').html() == '通过验证');
               if( $('.yz1').html()  &&  $('.yz2').html() &&  $('.yz3').html() == '通过验证');
                {
                    $('.zc').removeAttr("disabled");
              
                }
            })
        },
        regEv:function(selector){
            console.log($.md5($('#password').val()));
            $(selector).on('click',function(){
                $.ajax({
                    url:'../../lib/login.php',
                    type:'post',
                    data:{
                        username:$('#username').val(),
                        password:$.md5($('#password').val())
                    },
                    success:function(res){
                        if(res == 1){
                            alert('用户名已存在');
                        }else{
                            alert('注册成功');
                            location.href="../html/index1.html";
                        }
                    }
                })
            })
    }
}
})