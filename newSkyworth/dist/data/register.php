<?php 
	header('content-type:text/html;charset="utf-8"');
	$responseState = array("code" => 0, "message" => "");

	$username = $_POST['username'];
	$password = $_POST['password'];
	$repassword = $_POST["repassword"];
	$addTime = $_POST["addTime"];
	if($password != $repassword){
		$responseState["code"] = 1;
		$responseState["message"] = "两次密码输入不一致";
		echo json_encode($responseState);
		exit; 
	}

	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		$responseState["code"] = 2;
		$responseState["message"] = "数据库链接失败";
		echo json_encode($responseState);
		exit; 
	}

	mysql_set_charset("utf8");

	mysql_select_db("qd1904");

	$sql = "SELECT * FROM users WHERE username='{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		$responseState["code"] = 3;
		$responseState["message"] = "用户名已存在";
		echo json_encode($responseState);
		exit; 
	}
	$password = md5(md5(md5($password)."qianfeng")."qingdao");

	$sql = "INSERT INTO users (username,password) VALUES('{$username}','{$password}')";

	$res = mysql_query($sql);

	if($res){
		$responseState["message"] = "注册成功";
		echo json_encode($responseState);
	}else{
		$responseState["code"] = 4;
		$responseState["message"] = "注册失败";
		echo json_encode($responseState);
	}

	if($username == ""){
		$responseState["code"] = 5;
		$responseState["message"] = "用户名不能为空";
		echo json_encode($responseState);
		exit;
	}
	if($password == ""){
		$responseState["code"] = 6;
		$responseState["message"] = "密码不能为空";
		echo json_encode($responseState);
		exit;
	}
	mysql_close($link);


 ?>