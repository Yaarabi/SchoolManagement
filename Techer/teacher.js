// import { db } from '/home/home.js';
// console.log(db);
// export let nameOfteacher = 555

// document.getElementById('teacherName')

let db={
    group1:[],
    group2:[],
    group3:[],
    group4:[],
}
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
let groupManag = document.getElementById('gestion')
let list = document.getElementById('groups')
let dash = document.querySelector('.dashboard')
let back = document.getElementById('return')
groupManag.addEventListener('click', ()=>{
    dash.style.display='none'
    list.style.display='flex'
})
back.addEventListener('click', ()=>{
    dash.style.display='grid'
    list.style.display='none'
})