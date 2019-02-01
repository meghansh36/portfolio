var currentIndex = 0;
var $select;
function image_load_default()
{   //defualt images
    for(var i=2 ; i<=10 ; i++)
        {
            $(".buttons").before('<img class = "inactive" src="images/' + i+'.jpg">')
        }
    $select = $('.inactive');
    currentIndex = 0;
    updateCount(currentIndex,$select);
}

function image_load_others(folder,size,classname){
     for(var i=1 ; i<=size ; i++)
        {
            $(".buttons").before('<img class ='+classname+'_inactive src="images/'+folder+'/' +i+'.jpg">')
        }
}

function updateCount(currentIndex_local,$select_local)
{   
    if(currentIndex_local+1<10)
        {
            $('#current_count').html("0"+(currentIndex_local+1));
        }
    else
        {
            $('#current_count').html(currentIndex_local+1);
        }
    
    $('#total_count').html($select_local.length);
}
function Update(key)
{   var preIndex = currentIndex;
 
    currentIndex = currentIndex+key;
    if(currentIndex < 0)
        {
            currentIndex = $select.length-1;
        }
    else if(currentIndex == $select.length)
        {
            currentIndex=0;
        }
  $select.eq(preIndex).removeClass("active");
$select.eq(currentIndex).addClass("active");
 updateCount(currentIndex,$select);
}
$(document).ready(function(){
   //load all images
    image_load_default();
 image_load_others('wedding_img',10,"wedding");
    image_load_others('commercial_img',10,"commercial");
    image_load_others('editorial_img',10,"editorial");
    
    
    $('#home').click(function(){
        $select.removeClass("active");
       $select = $('.inactive');
        $select.eq(0).addClass("active");
        currentIndex = 0 ;
        updateCount(currentIndex,$select);
    });
    $('.logo').click(function(){
        $select.removeClass("active");
       $select = $('.inactive');
        $select.eq(0).addClass("active");
        currentIndex = 0 ;
        updateCount(currentIndex,$select);
    });
    
    $("#wedding").click(function(){
        $select.removeClass("active");
       $select = $('.wedding_inactive');
        $select.eq(0).addClass("active");
        currentIndex = 0 ;
        updateCount(currentIndex,$select); 
    });
    $("#editorial").click(function(){
        $select.removeClass("active");
        $select = $('.editorial_inactive');
        $select.eq(0).addClass("active");
        currentIndex = 0;
        updateCount(currentIndex,$select);
    });   
    
     $("#commercial").click(function(){
        $select.removeClass("active");
        $select = $('.commercial_inactive');
        $select.eq(0).addClass("active");
        currentIndex = 0;
        updateCount(currentIndex,$select);
    });   
    $('#portfolio').click(function(){
       debugger; $select.eq(currentIndex).addClass("blur");
        $('.portfolio_options').fadeIn('slow');
        debugger;
    });
    
    $(document).click(function(e) {
   if(!$(e.target).is('#portfolio') && !$(e.target).is('.about_section'))
      {
          $('.portfolio_options').fadeOut('fast');
          $select.eq(currentIndex).removeClass("blur");
      }    
}); 

    $('#about').click(function(){
     $(".about_section").fadeIn("slow");
    });

    $(document).click(function(e) {
   if(!$(e.target).is('#about,.about_section,.about_section h3,.about_section p')|| $(e.target).is('#about_close')) 
      {      $('.about_section').fadeOut('fast');
      }    
});
    
    $('#contact').click(function(){
     $(".contact_section").fadeIn("slow");
    });

    $(document).click(function(e) {
   if(!$(e.target).is('#contact,.contact_section,.contact_section h3,.contact_section p,label,input,textarea')|| $(e.target).is('#contact_close')) 
      {      $('.contact_section').fadeOut('fast');
      }    
});
    
    
    $('#right_arrow').click(function(){
        Update(1);
    });
    $('#left_arrow').click(function(){
        Update(-1);
    });
    
    
});
