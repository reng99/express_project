// 登录index.js
$(function(){// 页面加载完成后进行调用
    
        var $login = $("#login");
    
        $login.find(".login").on("click",function(){
            // 通过ajax提交请求
            $.ajax({
                type:'post',
                url:'/frontend_api/user/login',// 后端提供的地址
                data:{// 客户端传过去给后端的数据
                    username:$login.find('[name="username"]').val(),
                    password:$login.find('[name="password"]').val()
                },
                dataType:'json',
                success:function(result){// 链接成功，后端返回给前端的数据
                    console.log(result);
                }
            });
        });
    
    });