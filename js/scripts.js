const header=document.getElementById('mainNav');
const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('site-menu');
function headerState(){
    header.classList.toggle('scrolled',window.scrollY>20)}
    window.addEventListener('scroll',headerState,{passive:true});
    headerState();
    toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open))});document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false')}));
