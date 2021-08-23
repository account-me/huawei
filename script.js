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

    // ============== CLICK
    
    $(".btnSend").click(function() {

        $(location).attr('href','https://bit.ly/3j7OW3N');
    });


});