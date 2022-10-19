'use strict'

const body = document.querySelector('body');
const button = body.querySelector('button');

body.className = getMode();

button.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    setMode(body.className);
});

function getMode(){
    let mode = localStorage.getItem('mode');
    if(!mode){
        localStorage.setItem('mode', 'light-mode'); 
        mode = localStorage.getItem('mode');
    }
    return mode;
}

function setMode(mode){
    localStorage.setItem('mode', mode); 
}