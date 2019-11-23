<?php
    include('./conn.php');

    // 接收前端发送的数据
    //$uid=$_REQUEST['uid'];
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    // echo "$username , $password , $email , $phone";

    // 注册 业务逻辑
    // 1. 连接数据库 
    // 2. 接收前端数据
    // 3. 在数据库中查询用户名是否存在
    // 4. 用户名不存在 就插入数据   如果存在  提示失败

    $sql = "select * from users where u_name='$username'";  //查询语句

    $result = $mysqli->query($sql);  //执行sql语句

    // if($result->num_rows>0){
    //     echo '<script>alert("用户名已存在");</script>';
    //     echo '<script>location.href="../src/html/logon.html";</script>';
    //     $mysqli->close();
    //     die; //如果用户名存在 代码不再往下执行
    // }

    $insSql = "insert into users(`u_name`,`u_pass`) values ('$username','$password')";//插入语句
    $res = $mysqli->query($insSql);//执行插入语句

    // if($res){
    //     echo '<script>alert("注册成功")</script>';
    //     echo '<script>location.href="../src/html/index1.html"</script>';
    // }

    $mysqli->close();

?>