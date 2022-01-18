

menuItems = ['home', 'portfolio', 'cv', 'contact'];

menuItems.forEach((item) => {
    $('.menu').append("<li>"+item+"</li>");
   // $('li').setAttribute("data-text");
    
    console.log("in der schlaufe");
});




$('button').on('click', function(){
    $('body').toggleClass('open');
  });