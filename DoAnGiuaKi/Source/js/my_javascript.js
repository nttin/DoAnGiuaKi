// JavaScript Document

var number = 2;

function guiBinhLuan(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var website = document.getElementById('website').value;
	var message = document.getElementById('message').value;
	
	if(name != "" && message != "")
	{
	
		//Số bình luận ++
		number ++;
		
		//Lấy ngày
		var temp_day = new Date();
		var day = temp_day.getDate();
		var month = temp_day.getMonth() + 1;
		var year = temp_day.getFullYear();
		
		var hour = temp_day.getHours();
		
		var temp = "<div class='comment_box'><div class='avatar'><!-- START AVATAR --><div class='image'><img src='images/avatar_2.png' alt='' /></div></div><div class='comments-info'><a href='#' class='writer'>" + name + "</a> <span class='when'>|</span><span class='when'>" + " Ngày " + day.toString() + " tháng " + month.toString() + ", " + year.toString() + " vào lúc " + hour.toString() + " giờ " + "</span></div> <a href='#' class='reply'>Trả lời</a><div class='text'><p>" + message + "</p></div><div class='clear'></div></div>" + document.getElementById('error_result').innerHTML;
		document.getElementById('error_result').innerHTML = temp;
		
		document.getElementById('number_comments').innerHTML = number.toString() + " bình luận";
	}
}