document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = ''; // Start with empty result
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim(); // Get search query
        
        let url = 'superheroes.php';
        if (query) {
            url += '?query=' + encodeURIComponent(query);
        }
        
        // Create XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                // Display the response in the result div
                resultDiv.innerHTML = xhr.responseText;
            } else {
                // Error handling
                resultDiv.innerHTML = 'Error fetching superheroes: ' + xhr.status;
            }
        };

        xhr.onerror = function() {
            resultDiv.innerHTML = 'Request failed. Please check if the server is running.';
        };
        
        // Send the request
        xhr.send();
    });
});