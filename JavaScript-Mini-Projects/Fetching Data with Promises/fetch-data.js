document.addEventListener('DOMContentLoaded', function() {
    const fetchDataButton = document.getElementById('fetchData');
    const dataDisplay = document.getElementById('data');

    fetchDataButton.addEventListener('click', function() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // Dog API URL

        // Clear previous data
        dataDisplay.innerHTML = '';

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display the dog image
                const img = document.createElement('img');
                img.src = data.message;
                img.alt = 'Random Dog Image';
                dataDisplay.appendChild(img);
            })
            .catch(error => {
                // Display an error message
                dataDisplay.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
            });
    });
});
