import { enableDarkMode, disableDarkMode } from './utils.js';
import { filterByRegion } from './utils.js';

// handle error 
export function handleError(err) {
    console.log('Oh no no');
    console.log(err);
}

export function handleRegion(selected, o, optionContainer) {
    selected.firstElementChild.innerHTML = o.querySelector("label").innerHTML;
    optionContainer.classList.remove("active");
    filterByRegion(o.querySelector("label").textContent);
}

export function handleActive(optionContainer) {
    optionContainer.classList.toggle("active");
}

export function handleDarkMode(darkMode) {
    darkMode = localStorage.getItem('darkmode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}