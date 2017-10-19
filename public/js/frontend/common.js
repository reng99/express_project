// 前台的公共javascript代码

$(function(){//加载完页面后调用
    // 退出登录
    (function(){
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
    })();

    /**
     * 固定侧边的工具栏
     * 
     * 使用方法:
     * 1520是 1180+（100+62+8）*2算出来，1180是固定的显示内容宽度，100为右侧固定fixedTool距离，8是距离右侧的像素
     * 
     * 690是1180/2+100
     * 
     * 70是小于1382时候固定栏目距离右侧有8个像素70-62
     * 
     * 为了解决闪现的问题，需要在css中设置一个默认的左移值，足够隐藏最初的值，我设置为-70px
     */ 
    (function(){
        fixedTool();
        function fixedTool(){
            var _w = $(window).width();
            var _l = 0;
            if(_w <= 1520){
                _l = (Math.floor(_w)) - 70 + 'px';
            }else{
                _l = (Math.floor(_w/2)) + 690 + 'px';
            }
            $('#fixedTool').css({'left':_l});
        }
        $(window).resize(function(){
            fixedTool();
        });
    })();

    /**
     * 返回顶部
     */
    (function(){
        var _top = $(window).scrollTop() || 0;
        var _backTop = $("#fixedTool").find(".backTop").parent();
        if(_top > 0){
            _backTop.css({"display":"block"});
        }else{
            _backTop.css({"display":"none"});
        }
        // 滚动条事件
        $(window).on("scroll",function(){
            _top = $(this).scrollTop();
            if(_top > 0){
                _backTop.css({"display":"block"});
            }else{
                _backTop.css({"display":"none"});
            }
        });
        // 点击返回顶部
        _backTop.on("click",function(){
            $("html,body").animate({
                "scrollTop":0
            },500);
        });
    })();

});
