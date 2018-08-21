/**
 * Created by hasee on 2017/2/6.
 */
$(function(){
    $(document).ready(function(){
        if($(".btn9").hasClass('active3')){
            $(".btn3").mouseenter(function(){
                $(".btn9").animate({
                    paddingTop:'0px'
                });
            });
            $('.btn3').unbind('mouseleave');
        }
        if($(".btn7").hasClass('active3')==false){

            $(".btn1").mouseenter(function(){
                $(".btn7").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn1").mouseleave(function(){
                $(".btn7").animate({
                    paddingTop:'1%'
                });
            });
        }
        if($(".btn8").hasClass('active3')==false){

            $(".btn2").mouseenter(function(){
                $(".btn8").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn2").mouseleave(function(){
                $(".btn8").animate({
                    paddingTop:'1%'
                });
            });
        }
    });

    //标签栏动画
    $('.btn1').click(function(){
        mySwiper.slideTo(0, 1000, false);
        $('.btn2').removeClass('active');
        $('.btn3').removeClass('active');
        $(".btn1").addClass('active');
        $(".btn5").removeClass('active2');
        $(".btn6").removeClass('active2');
        $(".btn4").addClass('active2');
        $('.btn8').removeClass('active3');
        $('.btn9').removeClass('active3');
        $(".btn7").addClass('active3');

        $(".btn8").animate({
            paddingTop:'1%'
        });
        $(".btn9").animate({
            paddingTop:'1%'
        });
        if( $(".btn7").hasClass('active3')==true){

            $(".btn1").mouseenter(function(){
                $(".btn7").animate({
                    paddingTop:'0px'
                });
            });
            $('.btn1').unbind('mouseleave');
        }
        if( $(".btn8").hasClass('active3')==false){
            $(".btn2").mouseenter(function(){
                $(".btn8").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn2").mouseleave(function(){
                $(".btn8").animate({
                    paddingTop:'1%'
                });
            });
        }
        if( $(".btn9").hasClass('active3')==false){
            $(".btn3").mouseenter(function(){
                $(".btn9").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn3").mouseleave(function(){
                $(".btn9").animate({
                    paddingTop:'1%'
                });
            });
        }

    });
    $('.btn2').click(function(){
        mySwiper.slideTo(1, 1000, false);
        $('.btn1').removeClass('active');
        $('.btn3').removeClass('active');
        $(".btn2").addClass('active');
        $(".btn4").removeClass('active2');
        $(".btn6").removeClass('active2');
        $(".btn5").addClass('active2');
        $('.btn7').removeClass('active3');
        $('.btn9').removeClass('active3');
        $(".btn8").addClass('active3');

        $(".btn7").animate({
            paddingTop:'1%'
        });
        $(".btn9").animate({
            paddingTop:'1%'
        });
        if($(".btn8").hasClass('active3')){
            $(".btn2").mouseenter(function(){
                $(".btn8").animate({
                    paddingTop:'0px'
                });
            });
            $('.btn2').unbind('mouseleave');
        }
        if($(".btn7").hasClass('active3')==false){

            $(".btn1").mouseenter(function(){
                $(".btn7").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn1").mouseleave(function(){
                $(".btn7").animate({
                    paddingTop:'1%'
                });
            });
        }
        if($(".btn9").hasClass('active3')==false){

            $(".btn3").mouseenter(function(){
                $(".btn9").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn3").mouseleave(function(){
                $(".btn9").animate({
                    paddingTop:'1%'
                });
            });
        }

    });
    $('.btn3').click(function(){
        mySwiper.slideTo(2, 1000, false);
        $('.btn1').removeClass('active');
        $('.btn2').removeClass('active');
        $(".btn3").addClass('active');
        $(".btn5").removeClass('active2');
        $(".btn4").removeClass('active2');
        $(".btn6").addClass('active2');
        $('.btn8').removeClass('active3');
        $('.btn7').removeClass('active3');
        $('.btn9').addClass('active3');

        $(".btn7").animate({
            paddingTop:'1%'
        });
        $(".btn8").animate({
            paddingTop:'1%'
        });
        if($(".btn9").hasClass('active3')){
            $(".btn3").mouseenter(function(){
                $(".btn9").animate({
                    paddingTop:'0px'
                });
            });
            $('.btn3').unbind('mouseleave');
        }
        if($(".btn7").hasClass('active3')==false){

            $(".btn1").mouseenter(function(){
                $(".btn7").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn1").mouseleave(function(){
                $(".btn7").animate({
                    paddingTop:'1%'
                });
            });
        }
        if($(".btn8").hasClass('active3')==false){

            $(".btn2").mouseenter(function(){
                $(".btn8").animate({
                    paddingTop:'0px'
                });
            });
            $(".btn2").mouseleave(function(){
                $(".btn8").animate({
                    paddingTop:'1%'
                });
            });
        }
    });

    //左右切换动画
    $(".arrow-left").mouseenter(function(){
        $(".arrow-left").css("background-image","url(images/leftbtn2.png)");
        $(".arrow-left").css("top","47%");
    });
    $(".arrow-left").mouseleave(function(){
        $(".arrow-left").css("background-image","url(images/leftbtn.png)");
    });
    $(".arrow-right").mouseenter(function(){
        $(".arrow-right").css("background-image","url(images/leftbtn2.png)");
        $(".arrow-right").css("top","47%");
    });
    $(".arrow-right").mouseleave(function(){
        $(".arrow-right").css("background-image","url(images/leftbtn.png)");
    });
    $('.arrow-left').click(function(){
       if(mySwiper.activeIndex==1){
            $('.btn2').removeClass('active');
            $('.btn3').removeClass('active');
            $(".btn1").addClass('active');
            $(".btn5").removeClass('active2');
            $(".btn4").addClass('active2');
           $('.btn8').removeClass('active3');
           $(".btn7").addClass('active3');
        }else if(mySwiper.activeIndex==2){
            $('.btn1').removeClass('active');
            $('.btn3').removeClass('active');
            $(".btn2").addClass('active');
            $(".btn6").removeClass('active2');
            $(".btn5").addClass('active2');
           $('.btn9').removeClass('active3');
           $(".btn8").addClass('active3');
        }
        mySwiper.slidePrev();
    });
    $('.arrow-right').click(function() {
        if(mySwiper.activeIndex==0){
            $('.btn1').removeClass('active');
            $('.btn3').removeClass('active');
            $(".btn2").addClass('active');
            $(".btn4").removeClass('active2');
            $(".btn5").addClass('active2');
            $('.btn7').removeClass('active3');
            $(".btn8").addClass('active3');
        }else if(mySwiper.activeIndex==1){
            $('.btn1').removeClass('active');
            $('.btn2').removeClass('active');
            $(".btn3").addClass('active');
            $(".btn5").removeClass('active2');
            $(".btn6").addClass('active2');
            $('.btn8').removeClass('active3');
            $(".btn9").addClass('active3');
        }
        mySwiper.slideNext();
    });

    //en动画

    //搜索区域动画
    $(".area").mouseenter(function(){
        $(".search-input").animate({
            width:'130px'
        });
    });
    $(".area").mouseleave(function(){
        $(".search-input").animate({
            width:'0px'
        });
    });
    $(".searchBtn").click(function(){
        $("form").submit();
    });


    //文旅弹出层
    $('.tout_btn1').click(function() {
        $(".layer").fadeIn();
        $(".layer-content3").fadeIn();
    });
    $('.tout_btn2').click(function() {
        $(".layer").fadeIn();
        $(".layer-content").fadeIn();
    });
    $('.tout_btn3').click(function() {
        $(".layer").fadeIn();
        $(".layer-content2").fadeIn();
    });
    $('.layer').click(function(){
        $(".layer").fadeOut();
        $(".layer-content").fadeOut();
        $(".layer-content2").fadeOut();
        $(".layer-content3").fadeOut();
        $(".layer-videoArea").fadeOut();
    });
    $('.playBtn').click(function() {
        $(".layer").fadeIn();
        $(".layer-videoArea").fadeIn();
    });

    //文旅顶部图片
    $(document).ready(function(){
        $('#imgID').animate({
            backgroundSize:'105%'
        },2000);
    });

    //科技文字
    $(document).ready(function(){
        $('.tfont').addClass('rightmove');
    });

    //加载gif
    $(document).ready(function(){
        $('.swiper1').html('<img src="images/1.gif" alt="">');
        $('.swiper2').html('<img src="images/2.gif" alt="">');
        $('.swiper3').html('<img src="images/3.gif" alt="">');
    });

    //视频弹出层
});
