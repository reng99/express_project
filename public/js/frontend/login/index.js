"use strict";

// 登录index.js
$(function () {
    // 页面加载完成后进行调用

    var $login = $("#login");

    $login.find(".login").on("click", function () {
        // 通过ajax提交请求
        $.ajax({
            type: 'post',
            url: '/frontend_api/user/login', // 后端提供的地址
            data: { // 客户端传过去给后端的数据
                username: $login.find('[name="username"]').val(),
                password: $login.find('[name="password"]').val()
            },
            dataType: 'json',
            success: function success(result) {
                // 链接成功，后端返回给前端的数据
                // console.log(result);
                if (!result.code && !result.userInfo.isAdmin) {
                    $('#login .colWarn').html("");
                    // 登录成功,直接跳转到前端首页
                    window.location.href = window.location.origin + '/index.html';
                } else if (!result.code & result.userInfo.isAdmin) {
                    $('#login .colWarn').html("");
                    // 登录成功,直接跳转到后台首页
                    window.location.href = window.location.origin + '/admin/index.html';
                } else {
                    $('#login .colWarn').html("<i class=\"fa fa-times-circle\"></i> " + result.message);
                }
            }
        });
    });
});