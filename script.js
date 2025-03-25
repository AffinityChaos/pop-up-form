$(document).ready(function(){
    $('.bg-model').fadeIn(1000);
    $('.model').animate({"top":"140px"},1000);
    $('.bg-model').click(function(){
        
        $(".model").animate({"top":"-1000px"},500);
        $('.bg-model').fadeOut(1500);
    })
    $('.close-btn').click(function(){
        $('.bg-model').fadeOut(1500);
        $(".model").animate({"top":"-1000px"},1000);
    });
    $('.pop-up').click(function(){
        $('.bg-model').fadeIn(500);
        $('.model').animate({"top":"140px"},300);
    })
});
            
// document.addEventListener("DOMContentLoaded",()=>{
//     const model = document.querySelector('.model');
//     const bgModel = document.querySelector('.bg-model');
//     const closeBtn = document.querySelector('.close-btn');
            
//     setTimeout(()=>{
//         bgModel.style.display='block';
//         model.style.top = '140px';
//     },2000)
            
//     bgModel.addEventListener('click',()=>{
//         bgModel.style.display="none";
//         model.style.top = '-1000px';
//     })
//     closeBtn.addEventListener('click',()=>{
//         bgModel.style.display="none";
//         model.style.top = '-1000px';

//     })
// })
            
        