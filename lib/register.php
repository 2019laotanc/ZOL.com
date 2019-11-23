<?php
    
    include('./conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where u_name='$username' and u_pass='$password'";

    $res = $mysqli->query($sql);    

    if($res->num_rows>0){
        echo "<script src='../cookie.js'></script>";
        echo "<script>cookie.set('isLogin','true',1);cookie.set('username','$username',1);</script>";
        echo "<script>alert('登录成功');</script>";
        echo "<script>location.href='../src/html/index1.html'</script>";
    }else{
        echo "<script>alert('用户名或密码错误');</script>";
        echo "<script>location.href=\"../src/html/register.html\"</script>";
    }
    $mysqli->close();
?>