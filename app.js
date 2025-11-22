document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function() {

        const xhr = new XMLHttpRequest(); // Creates the XMLHttpRequest object
        xhr.open('GET', 'superheroes.php', true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Shows the response in an alert
                alert(xhr.responseText);
            } else {
                // Error handling
                alert('Error fetching superheroes');
            }
        };
        
        xhr.onerror = function() {
            alert('Request failed');
        };
        
        // Send the request
        xhr.send();
    });
});