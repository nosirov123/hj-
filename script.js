
const btn=document.getElementById("btn");
let typed=new Typed("#title",{strings:["Mening oilamga xush kelibsiz","Qani kettik! 🚀"],typeSpeed:60,backSpeed:30,backDelay:1500,loop:false,
onBegin:()=>{gsap.from("#title",{opacity:0,y:-50,duration:1,ease:"power3.out"});},
onComplete:()=>{gsap.to("#btn",{opacity:1,y:0,duration:1,ease:"back.out(1.7)"});}});
btn.addEventListener("click",()=>{window.location.href="ikkinchi.html";});
