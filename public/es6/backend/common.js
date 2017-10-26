"use strict";

// 后台公共的javascript的部分

$(function () {
    // 退出登录
    (function () {
        $("#logout").on("click", function () {
            // 通过ajax提交请求
            $.ajax({
                type: 'get',
                url: '/api/user/logout', // 后端提供的api
                data: {},
                success: function success(result) {
                    console.log(result);
                }
            });
        });
    })();
});