// JavaScript Document
function dangnhap(){
	var id = document.getElementById('id').value;
	var pass = document.getElementById('pass').value;
	
	if(id!="" && pass!="")
	{
		document.location = 'index.html';
		document.getElementById('login_pass').innerHTML = "<li id='login_pass'><a href='login.html'>ĐĂNG XUẤT</a></li>";
	}
	else
	{
		document.getElementById('error_result').innerHTML = "Chưa nhập tên hoặc mật khẩu";
	}
}

function dangkiTaiKhoan(){
	var id = document.getElementById('id').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var rep_pass = document.getElementById('rep_pass').value;
	
	if(id!="" && name!="" && email!="" && pass != "")
	{
		if(pass == rep_pass) 
		{
			document.location = 'login.html';
		}
		else
		{
			document.getElementById('error_result').innerHTML = "Password không giống nhau";
		}
	}
	else
	{ 
		document.getElementById('error_result').innerHTML = "Chưa điền đầy đủ thông tin";
	}
}