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
                    categoryName:$('#category_name').val()
                },
                success: function success(result) {
                    console.log(result);
                }
            });
        });
    })();
});