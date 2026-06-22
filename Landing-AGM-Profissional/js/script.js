const header=document.querySelector('[data-header]');
const nav=document.querySelector('[data-nav]');
const menu=document.querySelector('[data-menu-toggle]');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
