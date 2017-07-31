$(function() {
	
	$("#login").addClass("current");

	function check_email(email) {
		if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(email)) {
			return true;
		}
	}
	$("input[name]").keyup(function(e) {
		if ($(this).attr('name') == "password" && e.keyCode == 32) {
			$(this).val(function(i, v) {
				return $.trim(v);
			});
		}
		if ($.trim($(this).val()) != "") {
			$(this).nextAll('span').eq(0).css({
				display : 'none'
			});
		}
	});

	var succ_arr = [];

	$("input[name]").focusout(function(e) {
		var msg = "";
		if ($.trim($(this).val()) == "") {
			if ($(this).attr('name') == 'username') {
				succ_arr[0] = false;
				msg = "Input Username";
			} else if ($(this).attr('name') == 'password') {
				succ_arr[1] = false;
				msg = "Input Password";
			}
		} else {
			if ($(this).attr('name') == 'username') {
				succ_arr[0] = true;
			} else if ($(this).attr('name') == 'password') {
				succ_arr[1] = true;
			}
		}
		$(this).nextAll('span').eq(0).css({
			display : 'block'
		}).text(msg);
	});

	$("button[type='button']").click(function() {
		$("input[name]").focusout(); 
		for (x in succ_arr) {
			if (succ_arr[x] == false)
				return;
		}

		$("span[name='error_message']").eq(0).css({
						display : 'block'
					}).text('');
		var data = $('#login').serialize(); 

		$.ajax({
			type: 'POST',
			url : "/auth/valid_login",
			data : data,
			success : function(result) {
				if (result.success) {
					if($("input[name='next_page']")[0].value=='None')
						{
						window.location = result.redirect;
						}
					else
						{
						  window.location = $("input[name='next_page']")[0].value;
						}
					
				} else {
					$("span[name='username']").eq(0).css({
						display : 'block'
					}).text(result.errors.username);
					$("span[name='password']").eq(0).css({
						display : 'block'
					}).text(result.errors.password);
				}
			},
			error : function(result) {
				$("span[name='error_message']").eq(0).css({
						display : 'block'
					}).text('Server Exception');
			}
		});
	});

});


$(document).ready(function() {
    
	STATIC_ROOT = 'http://' + window.location.host + '/static';
	$.get( STATIC_ROOT+"/libs/extjs/ext-all.js");
	$.get( STATIC_ROOT+"/libs/extjs/theme-triton/theme-triton.js");
	$.get( STATIC_ROOT+"/libs/extjs/theme-triton/resources/theme-triton-all.css");
});