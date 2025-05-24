let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo');
let enterBtn = document.getElementById('enterBtn');



window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    });

    //Enter butt behavior
    enterBtn.addEventListener('click', () => {
        window.location.href = 'Homepage.html';
    });
});
