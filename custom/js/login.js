$(function() {
	/**
	 * jquery鏂规硶锛歛ddClass() addClass() 鏂规硶鍚戣閫夊厓绱犳坊鍔犱竴涓垨澶氫釜绫汇�傝鏂规硶涓嶄細绉婚櫎宸插瓨鍦ㄧ殑 class
	 * 灞炴�э紝浠呬粎娣诲姞涓�涓垨澶氫釜 class 灞炴�с�� 濡傞渶娣诲姞澶氫釜绫伙紝璇蜂娇鐢ㄧ┖鏍煎垎闅旂被鍚嶃��
	 */
	$("#login").addClass("current");

	/**
	 * 姝ｅ垯妫�楠岄偖绠� email 浼犲叆閭 return true 琛ㄧず楠岃瘉閫氳繃
	 */
	function check_email(email) {
		if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(email)) {
			return true;
		}
	}

	/**
	 * input 鎸夐敭浜嬩欢keyup
	 */
	$("input[name]").keyup(function(e) {
		// 绂佹杈撳叆绌烘牸 鎶婄┖鏍兼浛鎹㈡帀(绌烘牸鐨凙SCII涓�32)
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

	// 閿欒淇℃伅
	var succ_arr = [];

	/**
	 * input澶卞幓鐒︾偣浜嬩欢focusout 杩欒窡blur浜嬩欢鍖哄埆鍦ㄤ簬锛屼粬鍙互鍦ㄧ埗鍏冪礌涓婃娴嬪瓙鍏冪礌澶卞幓鐒︾偣鐨勬儏鍐点��
	 */
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

	/**
	 * Ajax鐢ㄦ埛娉ㄥ唽
	 */
	$("button[type='button']").click(function() {
		$("input[name]").focusout(); // 璁╂墍鏈夌殑input鏍囪澶卞幓涓�娆＄劍鐐规潵璁剧疆msg淇℃伅
		for (x in succ_arr) {
			if (succ_arr[x] == false)
				return;
		}

		$("span[name='error_message']").eq(0).css({
						display : 'block'
					}).text('');
		var data = $('#login').serialize(); // 搴忓垪鍖栬〃鍗曞厓绱�

		$.ajax({
			type: 'POST',
			url : "/auth/valid_login",
			data : data,
			success : function(result) {
				if (result.success) {
					window.location = result.redirect;
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

		/**
		 * 鏈夊叴瓒ｇ殑鍙互鍒拌繖閲� 鑷鍙戦�丄jax璇锋眰 瀹炵幇娉ㄥ唽鍔熻兘
		 */
	});

});


$(document).ready(function() {
    
	STATIC_ROOT = 'http://' + window.location.host + '/static';
	$.get( STATIC_ROOT+"/libs/extjs/ext-all.js");
	$.get( STATIC_ROOT+"/libs/extjs/theme-triton/theme-triton.js");
	$.get( STATIC_ROOT+"/libs/extjs/theme-triton/resources/theme-triton-all.css");
});