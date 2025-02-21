async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function filterData(data, query) {
    return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result.name;
        resultsContainer.appendChild(resultItem);
    });
}

document.getElementById('searchBar').addEventListener('input', async function() {
    const query = this.value;
    const data = await fetchData('https://api.chucknorris.io/jokes/categories'); // Replace with your API URL
    const filteredResults = filterData(data, query);
    displayResults(filteredResults);
});