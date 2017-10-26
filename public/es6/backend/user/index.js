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
});