/**
 * 分类的相关页面
 */
$(function(){
    // 添加分类
    (function(){
        $("#category_btn").on('click',function(){
            $.ajax({
                type: 'post',
                url: '/api/category/add', // 后端提供的api
                data: {
                    name:$('#category_name').val()
                },
                success: function success(result) {
                    console.log(result);
                    if(!result.code){
                        $('#category .add_hint').html("<i class='fa fa-check-circle add_succ'></i>" + "<span class='add_succ'>"+ result.message +"</span>");
                        // 3秒后跳转到分类的首页
                        setTimeout(function() {
                            window.location.href = window.location.origin+'/admin/category/index.html'
                        }, 3000);
                        
                    }else{
                        $('#category .add_hint').html("<i class='fa fa-times-circle add_err'></i> " + "<span class='add_err'>"+ result.message +"</span>");
                    }
                }
            });
        });
    })();
});