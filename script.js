$(function() {


    $("#my-text").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    

    // ============= CHOOSE GIFT ======

    $(".box-gif").click(function(){

        $(this).addClass("selected1").siblings().removeClass('selected1');
    });

    // ============= COMPELETE ======

    $clickNum = 0;

    $("#complite").click(function() {
        if($clickNum == 0){

            alert("Sorry, you didn't post message in 5 comments, Please post the message and come back again");
            $clickNum = 1;
        }else{

            $(location).attr('href','done.html');
        }

    });

    $("#complitear").click(function() {
        if($clickNum == 0){

            alert("عفواً , انت لم تقم بارسال الرسالة الى 10 من اصدقائك على واتساب , قم بارسال الرسالة وحاول مجدداً");
            $clickNum = 1;
        }else{

            $(location).attr('href','donear.html');
        }

    });

    // ============== CLICK
    
    $(".btnSend").click(function() {

        $(location).attr('href','https://bit.ly/3ETjlup');
    });
    $(".enclick").click(function() {

        $(location).attr('href','https://bit.ly/3ETjlup');
    });
    //=========
    $(".btnSendar").click(function() {

        $(location).attr('href','https://bit.ly/3FIvkMs');
    });
    $(".arclick").click(function() {

        $(location).attr('href','https://bit.ly/3FIvkMs');
    });


});
