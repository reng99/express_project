// 后台公共的javascript的部分

$(function(){
    // 退出登录
    (function(){
        $("#logout").on("click",function(){
            // 通过ajax提交请求
            $.ajax({
                type:'get',
                url:'/api/user/logout',// 后端提供的api
                data:{},
                success:function(result){
                    console.log(result);
                }
            })
        });
    })();

    // 获取用户列表
    $("#user").on("click",function(){
        // 通过ajax提交请求
        $.ajax({
            type:'get',
            url:'/backend_api/user',// 后端提供的api
            data:{},
            success:function(result){
                console.log(result);
            }
        })
    });
    
});