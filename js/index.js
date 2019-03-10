$(function(){
    var next=$('.next');
    if(window.location.href.indexOf('page5')=='-1'){
        next.show();
    }else{
        next.hide()
    };
    next.click(function () {
        $.fn.fullpage.moveSectionDown()
    })
    //fullpage配置
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        'navigation': true,
        scrollingSpeed:500,
        keyboardScrolling:true,
        easing:200,
        onLeave:function (index,nexindex,direction) {
            if(index==4&&direction=='down'){
                next.hide()
            }else if(direction=='up'){
                next.show()
            }
            autoScrolling()
        }
    });

    //处理移动端复杂的适配
    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 750){
            next.hide()
        }
    }

    autoScrolling();


   var move_menu_btn=$('.move_menu_box .move_menu li a ');
   var move_menu_box=$('.move_menu_box');
   $.each(move_menu_btn,function (index,value) {
       $(value).click(function () {
           move_menu_box.hide()
       })
   })

   var ls_menu=$('.ls_menu');
    ls_menu.click(function () {
        move_menu_box.show()
    })

    var cancel=$('.cancel');
    cancel.click(function () {
        move_menu_box.hide()
    })





});