// Get external data
const regions = externalService.getRegionsList();
const languages = externalService.getLanguagesList();
const countryListByRegion = {};
const countryListByLanguage = {};

// Create object to map languages to countries
const countryListByLanguageMap = {};
for (const country of externalService.getCountryList()) {
  for (const language of country.languages) {
    if (!countryListByLanguageMap[language]) {
      countryListByLanguageMap[language] = [];
    }
    countryListByLanguageMap[language].push(country);
  }
}

// Create object to map regions to countries
const countryListByRegionMap = {};
for (const country of externalService.getCountryList()) {
  if (!countryListByRegionMap[country.region]) {
    countryListByRegionMap[country.region] = [];
  }
  countryListByRegionMap[country.region].push(country);
}

// Populate search query select based on selected search type
function populateQuerySelect() {
  const searchType = document.querySelector('input[name="searchType"]:checked').value;
  const querySelect = document.getElementById('querySelect');
  querySelect.innerHTML = '<option value="">Select value</option>';
  if (searchType === 'region') {
    for (const region of regions) {
      querySelect.innerHTML += `<option value="${region}">${region}</option>`;
    }
  } else {
    for (const language of languages) {
      querySelect.innerHTML += `<option value="${language}">${language}</option>`
    }
  }
}


// Function to update the results table with the selected query
function updateResultsTable() {
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    const query = document.getElementById('querySelect').value;
    const countryList = searchType === 'region' ? countryListByRegion[query] : countryListByLanguageMap[query];
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
  
    if (!query) {
      // Show "No items" message if no query selected
      document.getElementById('noResultsRow').style.display = 'table-row';
      tableBody.innerHTML = '';
    } else if (!countryList || countryList.length === 0) {
      // Show "No results" message if query not found
      document.getElementById('noResultsRow').style.display = 'table-row';
      tableBody.innerHTML = '';
    } else {
      // Populate table with results
      document.getElementById('noResultsRow').style.display = 'none';
      tableBody.innerHTML = '';
      for (const country of countryList) {
        const row = tableBody.insertRow();
        row.innerHTML = `
          <td>${country.name}</td>
          <td>${country.capital}</td>
          <td>${country.region}</td>
          <td>${country.languages.join(', ')}</td>
          <td>${country.area}</td>
          <td><img class="flag" src="${country.flagURL}"></td>
        `;
      }
    }
  }
  
  // Add event listeners to search type radio buttons and query select
  document.querySelectorAll('input[name="searchType"]').forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      const queryLabel = document.getElementById('queryLabel');
      if (radioButton.value === 'region') {
        queryLabel.textContent = 'Please choose search query:';
        for (const region of regions) {
          countryListByRegion[region] = externalService.getCountryListByRegion(region);
        }
      } else {
        queryLabel.textContent = 'Please choose search query:';
        for (const language of languages) {
          countryListByLanguage[language] = externalService.getCountryListByLanguage(language);
        }
      }
      updateResultsTable();
    });
  });
  
  document.getElementById('querySelect').addEventListener('change', updateResultsTable);
  