// import { db } from '../home/home';
// console.log(db);
let sideBar = document.getElementById('sideBar')
let menuIcon = document.getElementById('barIcon')
menuIcon.addEventListener('click', ()=>{
    sideBar.style.display='flex'
})

let closeBar = document.getElementById('closes')
closeBar.addEventListener('click', (e)=>{
    
    
    sideBar.style.display='none'      
    
})
let out = document.getElementById('outs')
out.addEventListener('click', ()=>{
    window.location.href = '/home/home.html';
})
let boite = document.getElementById('messagIcon')
let message = document.getElementById('messag')
boite.addEventListener('click', ()=>{
    message.style.visibility='visible'
})
message.addEventListener('click', ()=>{
    message.style.visibility='hidden'
})