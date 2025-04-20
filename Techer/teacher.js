// import { db } from '/home/home.js';
// console.log(db);
// export let nameOfteacher = 555

// document.getElementById('teacherName')
let menu = document.getElementById('dropMenu')
let menuIcon = document.getElementById('menuBar')
menuIcon.addEventListener('click', ()=>{
    menu.style.display='flex'
})

let closeBar = document.getElementById('close')
closeBar.addEventListener('click', (e)=>{
    
    
    menu.style.display='none'      
    
})
let out = document.getElementById('out')
out.addEventListener('click', ()=>{
    window.location.href = '/home/home.html';
})
let boite = document.getElementById('boitIcon')
let message = document.getElementById('boite')
boite.addEventListener('click', ()=>{
    message.style.visibility='visible'
})
message.addEventListener('click', ()=>{
    message.style.visibility='hidden'
})