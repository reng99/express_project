// 控制用户管理的页面

$(function () {
    // 分页的上一页和下一页的控制
    (function () {
        // 当前的页面
        var curPage = window.location.search.split("?").reverse()[0].split("=").reverse()[0];
        if (curPage <= 1) {
            $("#previous").addClass("disabled");
        }
        if (curPage >= Number($("#totalPage").text())) {
            $("#next").addClass("disabled");
        }
    })();

    // 删除指定的用户
    (function(){
        $("#users .remove").on("click", function () {
            var _this = $(this);
            // 通过ajax提交请求
            $.ajax({
                type: 'post',
                url: '/api/user/remove', // 后端提供的api
                data: {
                    _id:_this.parent().parent().find('.user_id').text()
                },
                success: function success(result) {
                    if(!result.code){
                        window.location.reload();
                    }
                }
            });
        });
    })();

    // 切换用户的tab
    (function(){
        $("#users .nav-tabs li").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })();
});