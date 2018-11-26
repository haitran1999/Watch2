$(function(){
  $(window).scroll(function(){
    let height = $(this).scrollTop();
    
    $('.title').css({
      'transform': 'translate(0px, '+ height+'px)'
    })

    $('.circle1').css({
      'transform': 'translate(0px, '+ height+'px)'
    })
    if(height > 30){
      $('.navbar').addClass('active');
    }
    else if(height < 30){
      $('.navbar').removeClass('active');
    }
  })

  $('#home').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: 0});
  })
  $('#about').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.top2').offset().top - 80}, 900);
  })
  $('#feature').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.top3').offset().top - 80}, 900);
  })
  $('#product').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.top5').offset().top - 80}, 900);
  })
  $('#contact').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.contact').offset().top - 80}, 900);
  })
  $('#testmonial').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.feedback').offset().top - 80}, 900);
  })
  $('#faq').click((event)=>{
    event.preventDefault();
    $('*').animate({scrollTop: $('.faq').offset().top - 80}, 900);
  })
   
})


let bar = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
bar.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})