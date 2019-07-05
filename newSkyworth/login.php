<?php
	header('content-type:text/html;charset="utf8"');
	//声明统一返回格式
	$responseDate = array("code" => 0, "message" => " ");

	$username = $_POST["username"];
	$password = $_POST["password"];

	$str = md5(md5(md5($password)."qianfeng")."qingdao");

	if($username == ""){
		$responseDate['code'] = 1;
		$responseDate['message'] = "用户名不能为空";
		echo json_encode($responseDate);
		exit;
	}
	if($password == ""){
		$responseDate['code'] = 2;
		$responseDate['message'] = "密码不能为空";
		echo json_encode($responseDate);
		exit;
	}

	$link = mysql_connect("localhost","root","123456");

	if(!$link){
		$responseDate['code'] = 3;
		$responseDate['message'] = "数据库连接失败";
		echo json_encode($responseDate);
		exit;
	}

	mysql_set_charset("utf8");
	mysql_select_db("qd1904");

	$sql = "SELECT * FROM users WHERE username = '{$username}' AND password = '{$str}'";

	$res = mysql_query($sql);

	$row = mysql_fetch_assoc($res);

	if(!$row){
		$responseDate["code"] = 4;
		$responseDate["message"] = "用户名或密码错误";
		echo json_encode($responseDate);
		exit;
	}else{
		$responseDate["message"] = "登录成功";
		echo json_encode($responseDate);
	}

	
	mysql_close($link);
?>