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
