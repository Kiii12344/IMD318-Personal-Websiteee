
/* IMD318 JavaScript
   Purpose: navigation menu, live clock and greeting. */

function updateClock(){
  const clock=document.getElementById("clock");
  if(!clock)return;
  clock.textContent=new Date().toLocaleTimeString([],{
    hour:"2-digit",minute:"2-digit",second:"2-digit"
  });
}

function greeting(){
  const target=document.getElementById("greeting");
  if(!target)return;
  const hour=new Date().getHours();
  target.textContent=hour<12?"Good morning.":hour<18?"Good afternoon.":"Good evening.";
}

function setupMenu(){
  const button=document.getElementById("menuButton");
  const nav=document.getElementById("navLinks");
  if(!button||!nav)return;
  button.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    button.setAttribute("aria-expanded",open);
  });
  nav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>nav.classList.remove("open"));
  });
}

window.addEventListener("load",()=>{
  updateClock(); greeting(); setupMenu();
  setInterval(updateClock,1000);
});
