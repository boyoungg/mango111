let backGroundimg = document.getElementById('backgroundImg')
let bottomImg = document.getElementById('bottomImg')
let character = document.getElementById('character')
let backColor = document.getElementById('MangoAni')
let mainSec = document.getElementById('sec01');
let secDiv = document.getElementById('sectionPosition');
let aniText = document.getElementById('aniText');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);


    // if(value <= 1800){
    //     mainSec.style.position = 'fixed';
    //     backColor.style.display = 'block';
    //     backGroundimg.style.left = value*-0.1+'px';
    //     bottomImg.style.left = value*0.8+'px';
    //     character.style.left = value*0.8+'px';
    //     character.classList.add('active');
    //     // aniText.style.display = 'none';
    // } else if(value <= 1000){
    //     aniText.style.display = 'block';
    // } else if( value === 0 ){
    //     backColor.style.display = 'none';
    //     character.classList.remove('active');
    //     mainSec.style.position = 'fixed';
    // } else{
    //     mainSec.style.position = 'static';
    // }

    if(value === 0){
        backColor.style.display = 'none';
        character.classList.remove('active');
        mainSec.style.position = 'fixed';
    } 
    else if(value <= 1800){
        mainSec.style.position = 'fixed';
        backColor.style.display = 'block';
        backGroundimg.style.left = value*-0.1+'px';
        bottomImg.style.left = value*0.8+'px';
        character.style.left = value*0.8+'px';
        character.classList.add('active');
    } else{
        backColor.style.display = 'none';
        mainSec.style.position = 'static';
    }

});

