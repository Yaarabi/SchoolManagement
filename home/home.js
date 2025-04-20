export let db={
    techears: [
        {
            userName:'yaarabi318@gmail.com',
            fullName: 'Youssef Aarabi',
            password: 'aarabi'
        }
    ],
    students :[
        {
            userName:'yaarabi318@gmail.com',
            fullName: 'Youssef Aarabi',
            password: 'aarabi'
        }
    ]
}
let condition = true;
let span = document.querySelectorAll('span')

function alternateText() {
    if (condition) {
        span[0].textContent = '"One School"';
        span[1].textContent = '"One School"';
    } else {
        span[0].textContent = '"One Place"';
        span[1].textContent = '"One Place"';
    }
    condition = !condition; 
}

setInterval(alternateText, 2000);
let btnLog = document.getElementById('login');
btnLog.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('section').style.border = "3px solid green";
    }, 0);

    setTimeout(() => {
        document.querySelector('section').style.border = "none";
    }, 2000);
});
let btnClose = document.getElementById('close')
btnClose.addEventListener('click', ()=>{
    document.getElementById('loginForm').style.display='none'
    // document.getElementById('singinForm').style.display='none'
})
let logTeacher= document.getElementById('teacherPlace')
let logStud= document.getElementById('studPlace')
logTeacher.addEventListener('click', ()=>{
    document.getElementById('loginForm').style.display='flex'
})
logStud.addEventListener('click', ()=>{
    document.getElementById('loginForm').style.display='flex'
    document.getElementById('btnForTeacher').style.display='none'
    document.getElementById('btnForStud').style.display='block'

})
let btnCloseSign = document.getElementById('closeSign')
btnCloseSign.addEventListener('click', ()=>{
    document.getElementById('singinForm').style.display='none'
})
let btnSign = document.getElementById('signIn')
btnSign.addEventListener('click', ()=>{
    document.getElementById('singinForm').style.display='flex'
})
let inputName= document.getElementById('email')
let inputPass= document.getElementById('password')
let btnLogTecher = document.getElementById('btnForTeacher')
let btnLogStud = document.getElementById('btnForStud')

let teacherValidation = ()=>{
    for (let i = 0 ; i<db.techears.length; i++){
        if ((inputName.value==db.techears[i].userName) && (inputPass.value==db.techears[i].password)){
            return  true
        }
    }
        return false
}

let studValidation = ()=>{
    for (let i = 0 ; i<db.students.length; i++){
        if ((inputName.value==db.students[i].userName) && (inputPass.value==db.students[i].password)){
            return  true
        }
    }
        return false
}

btnLogTecher.addEventListener('click', ()=>{
    let check = teacherValidation()
    console.log(check);
    if(check == true){
    document.getElementById('loginForm').style.display='none'
    window.location.href = '/Techer/ensig.html';
    }else{
        alert('check your input')
    }
})
btnLogStud.addEventListener('click', ()=>{
    let check = studValidation()
    console.log(check);
    if(check == true){
    document.getElementById('loginForm').style.display='none'
    window.location.href = '/student/stud.html';
    }else{
        alert('check your input')
    }
})
let newUser = document.getElementById("newEmail")
let newName = document.getElementById("name")
let therePass = document.getElementById("newPass")
let samePass = document.getElementById("samePass")
let job = document.getElementById('Choose')
function insert () {
    let obj = {
        userName: newUser.value,
        fullName: newName.value,
        password: therePass.value,
    }
    if(job.value=='Teacher'){
        db.techears.push(obj)
    }else{
        db.students.push(obj)
    }
}
let newSign = document.getElementById('submit')
newSign.addEventListener('click', ()=>{
    if(!(newName.value=='' || newUser.value=='' || therePass.value=='' || therePass.value!==samePass.value)){
        insert();
        console.log(db);
        document.getElementById('singinForm').style.display='none'
        if(job.value=='Teacher'){
            window.location.href = '/Techer/ensig.html';
        }else{
            window.location.href = '/student/stud.html';
        }
    }else{
        alert('check your information')
    }
})
console.log(db);

