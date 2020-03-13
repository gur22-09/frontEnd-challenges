import { displayFlags } from './utils.js';

const baseEndpointFull = 'https://restcountries.eu/rest/v2/all';
const baseEndpointByCode = 'https://restcountries.eu/rest/v2/alpha';

// fetch flags
export async function fetchFlags() {
    const res = await fetch(`${baseEndpointFull}`);
    const data = await res.json();
    return data;
}

// fetch by Code
export async function fetchByCode(code) {
    const res = await fetch(`${baseEndpointByCode}/${code}`);
    const data = await res.json();
    return data;
}