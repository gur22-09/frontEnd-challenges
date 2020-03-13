import { init } from "./lib/init.js";
import { optionContainer, selected, optionsList, searchCountry, darkModeButton } from './lib/elements.js';
import { handleActive, handleRegion, handleDarkMode } from './lib/handlers.js';
import { filterByCountries } from './lib/utils.js';

let darkMode = localStorage.getItem('darkmode');

// Event Listeners

selected.addEventListener('click', () => handleActive(optionContainer));

// Event Listener on filter regions
optionsList.forEach(o => o.addEventListener('click', () => handleRegion(selected, o, optionContainer)));

// Event listeners on filter countries
searchCountry.addEventListener('keyup', filterByCountries)

darkModeButton.addEventListener('click', () => handleDarkMode(darkMode));

// start the app!
init(darkMode);

