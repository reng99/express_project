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

    // 侧边栏目的选定状态
    (function(){
        var href = window.location.href;
        if(href.indexOf('/category')!=-1){
            $("#sidebar_category").addClass("active");
        }
        if(href.indexOf('/user')!=-1){
            $("#sidebar_user").addClass("active");
        }
        
    })();
});