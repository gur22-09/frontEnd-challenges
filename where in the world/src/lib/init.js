import { fetchFlags, fetchByCode } from "./index.js";
import { handleError } from './handlers.js';
import { sectionFlags, countrySection } from "./elements.js";
import { displayFlags, enableDarkMode, getQueryVariable, displayFlagForCountry } from './utils.js';

export async function init(darkMode) {
    const data = await fetchFlags().catch(handleError);
    console.log(typeof data);
    const html = displayFlags(data);
    sectionFlags.innerHTML = html.join('');
    if(darkMode === "enabled") {
        enableDarkMode();
    }
}

export async function initFlags(darkMode) {
    const code = getQueryVariable('code');
    const data = await fetchByCode(code).catch(handleError);
    const html = displayFlagForCountry(data);
    countrySection.innerHTML = html;
    if(darkMode === "enabled") {
        enableDarkMode();
    }
}