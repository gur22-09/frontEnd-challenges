import { darkModeButton } from './lib/elements.js';
import { handleDarkMode } from './lib/handlers.js';
import { initFlags } from './lib/init.js';

let darkMode = localStorage.getItem('darkmode');

darkModeButton.addEventListener('click', () => handleDarkMode(darkMode));

initFlags(darkMode);


