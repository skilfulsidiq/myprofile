 $("document").ready(function() {
    var speed = 500;

    $('intro').first().addClass('main');
    $('.intro').hide();

    $('.main').show();

    //Profile

     $('#profileBtn').on('click',function(){
         $('#profileBtn').animate({width:"200", textAlign:"center"},1000);
        $('.main').show(speed);
        $('.edu').hide(speed,"swing");
        $('.book').hide(speed,"swing");
         $('#profileBtn').animate({width:"-=50", textAlign:"center"},1000);
     });

 //Button Education
     $('#educationBtn').on('click',function(){
         $('#educationBtn').animate({width:"200", textAlign:"center"},1000);
        $('.main').hide (speed,"swing");
        $('.book').hide(speed, "swing");
         $('.edu').show(speed, "swing");
         
          $('#educationBtn').animate({width:"-=50", textAlign:"center"},1000);
        
         
     });

//Skill Book

     $('#skillBtn').on('click',function(){
         $('#skillBtn').animate({width:"200", textAlign:"center"},1000);
        $('.main').hide(speed,"swing");
        $('.edu').hide(speed,"swing");
         $('.book').show(speed,"swing");
           $('#skillBtn').animate({width:"-=50", textAlign:"center"},1000);
     });
     
     
     //boxes image animation
     $("div.box img").hover(function(){
         $(this).css({"transform":"rotation(90deg)"},1000);
     })


});
