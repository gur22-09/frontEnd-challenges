import { sectionFlags } from './elements.js';

//enable dark mode
export const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
}

//disable dark mode
export const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

// create html
export function displayFlags(data) {
    const html = data.map(country => {
        return `
        <figure class="flag">
        <a href="./flag.html?code=${country.alpha3Code}">
            <img src="${country.flag}" alt="${country.name}" />
            </a>
            <figcaption>
              <h2>${country.name}</h2>
              <p><strong>Population:</strong> ${country.population}</p>
              <p class="region"><strong>Region:</strong> ${country.region}</p>
              <p><strong>Capital:</strong> ${country.capital}</p>
            </figcaption>
        </figure>
            `;
    });
    return html;
    // sectionFlags.innerHTML = html.join('');
}


// create html for country page
export function displayFlagForCountry(data) {
    console.log(data.borders);
    let html =`
          <img src="${data.flag}" alt="${data.name}" />
          <div class="country-text">
            <h2>${data.name}</h2>
            <div>
              <div>
                <p><strong>Native Name:</strong> ${data.nativeName}</p>
                <p><strong>Population:</strong> ${data.population}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Sub Region:</strong> ${data.subregion}</p>
                <p><strong>Capital:</strong> ${data.capital}</p>
              </div>
              <div>
                <p><strong>Top Level Domain:</strong> ${data.topLevelDomain}</p>
                <p><strong>Currencies:</strong> ${data.currencies.map(el => el.name).join(' ,')}</p>
                <p><strong>Languages:</strong> ${data.languages.map(el => el.name).join(' ,')}</p>
              </div>
            </div>
            <div class="border">
              <p><strong>Border Countries:</strong></p>
              <ul class="taglist">`;
              if(data.borders.length>0) {
                for(let i=0; i < data.borders.length; i++) {
                  html += `<li>${data.borders[i]}</li>`;
                }
              }
              html += `</ul>
            </div>
          </div>
        `;
    return html;
}

// Filter flags by countries
export function filterByCountries(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get array from list of all countries
    const countriesEl = Array.from(sectionFlags.getElementsByTagName('h2'));
    countriesEl.forEach(countryEl => {
        if(countryEl.textContent.toLowerCase().indexOf(text) !== -1) {
            countryEl.closest('figure').style.display = 'block';
            // countryEl.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            countryEl.closest('figure').style.display = 'none';
            // countryEl.parentElement.parentElement.parentElement.style.display = 'none';
        };
    })
}

// Filter flags by regions
export function filterByRegion(name) {
    // convert text to lowercase
    const text = name.toLowerCase();
    // Get array from list of all regions
    const regionsEl = Array.from(sectionFlags.querySelectorAll('.region'));
    regionsEl.forEach(regionEl => {
        if(regionEl.textContent.toLowerCase().indexOf(text) !== -1) {
            regionEl.closest('figure').style.display = 'block';
        } else {
            regionEl.closest('figure').style.display = 'none';
        }
    })
}

// get value from url param
export function getQueryVariable(variable) {
    const query_string = window.location.search.toString();
    const search_params = new URLSearchParams(query_string);
    const code = search_params.get(variable);
    return code;
}