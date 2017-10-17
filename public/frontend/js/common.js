// 前台的公共javascript代码

$(function(){//加载完页面后调用
    // 退出登录
    $("#logout").on("click",function(){
        // 通过ajax提交请求
        $.ajax({
            type:'get',
            url:'/frontend_api/user/logout',// 后端提供的api
            data:{},
            success:function(result){
                console.log(result);
            }
        })
    });
});
