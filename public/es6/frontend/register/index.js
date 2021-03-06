// 注册index.js
$(function () {
    // 页面加载完成后进行调用

    var $register = $("#register");

    $register.find(".register").on("click", function () {
        // 通过ajax提交请求
        $.ajax({
            type: 'post',
            url: '/api/user/register', // 后端提供的地址
            data: { // 客户端传过去给后端的数据
                username: $register.find('[name="username"]').val(),
                password: $register.find('[name="password"]').val(),
                repassword: $register.find('[name="repassword"]').val()
            },
            dataType: 'json',
            success: function success(result) {
                // 链接成功，后端返回给前端的数据
                if (!result.code) {
                    // 注册成功
                    $('#register .colWarn').html("");
                    window.location.href = window.location.origin + '/register/success.html';
                } else {
                    $('#register .colWarn').html("<i class=\"fa fa-times-circle\"></i> " + result.message);
                }
            }
        });
    });
});