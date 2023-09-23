document.getElementById('see-more-button').addEventListener('click', function() {
    var extraProjects = document.getElementById('extra-projects');
    
    if (extraProjects.style.display === 'none') {
        extraProjects.style.display = 'block';
        this.textContent = 'See Less'; 
    } else {
        extraProjects.style.display = 'none';
        this.textContent = 'See More'; 
    }
});