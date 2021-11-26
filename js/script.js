var mymenuright = document.querySelector('.menu-toggle'),
    mumenumob = document.querySelector('.menu-mobile'),
    mymenu = document.querySelector('.menu-toggle-down');
mymenuright.addEventListener('click',function(){
    mymenu.classList.toggle('active');
    mumenumob.classList.toggle('menu-mobile');
});
var silderimg = ['images/banner.jpg','images/thumb-01.jpg','images/thumb-02.jpg',
'images/thumb-03.jpg','images/thumb-04.jpg',
'images/thumb-05.jpg','images/thumb-06.jpg',
'images/thumb-07.jpg','images/thumb-08.jpg',
'images/thumb-09.jpg','images/thumb-10.jpg'];
var mytitle = document.querySelector('.silder-all');
var i = 0;
var sildershow = function(){
    document.sildershow.src = silderimg[i];
    if(i < silderimg.length - 1 ){
        i++;
    } else {
        i = 0;
    }
    setTimeout('sildershow()','3000');
};
sildershow();
var mycontent = document.querySelectorAll('.content-item'),
    myFAU = document.querySelectorAll('.author-item');
window.onscroll = function(){
    if(window.scrollY == 500){
        mycontent.forEach( e => {
            e.style.animation = "animated ease-in-out 0.5s alternate";
            e.style.opacity = "1";
        })
    } 
    if(window.scrollY == 1500){
        myFAU.forEach(item => {
            item.style.animation = "animated ease-in-out 0.5s alternate";
            item.style.opacity = "1";
        });
    } 
};


 










