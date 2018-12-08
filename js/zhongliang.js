// 轮播图左边菜单
// $(".head p").mouseover(function(){
//     console.log(2)
//     $(this).css({
//         display:"block"
//     })
// })

$("#title-1").mouseover(function(){
    // console.log(1);
    $(".cont-a").show().siblings(".cont").hide();
    $("#title-1").css({
        'border-bottom':"2px solid green",
        background:"#fff"
    }).siblings("li").css({
        'border-bottom':"none",
        background:"#f7f7f7"
    })
})
$("#title-2").mouseover(function(){
    $(".cont-b").show().siblings(".cont").hide();
    $("#title-2").css({
        'border-bottom':"2px solid green",
        background:"#fff"
    }).siblings("li").css({
        'border-bottom':"none",
        background:"#f7f7f7"
    })
})
$("#title-3").mouseover(function(){
    $(".cont-c").show().siblings(".cont").hide();
    $("#title-3").css({
        'border-bottom':"2px solid green",
        background:"#fff"
    }).siblings("li").css({
        'border-bottom':"none",
        background:"#f7f7f7"
    })
})

$(".sale-detail").mouseover(function(){
    // console.log(1);
    $(this).css({
        background: "#c30000",
            opacity: .8
    }).siblings("li").css({
        background: "#c30000",
            opacity: 1
    })
})
$(".sale-detail").mouseout(function(){
    $(this).css({
        background: "#c30000",
            opacity: 1
    })
})

$(".sale-left").mouseover(function(){
    // console.log(1);
    $(this).css({
        background: "#c30000",
            opacity: .8
    })
})
$(".sale-left").mouseout(function(){
    $(this).css({
        background: "#c30000",
            opacity: 1
    })
})

