document.getElementById('deceased-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const queryParams = new URLSearchParams(formData).toString();
    window.location.href = `deceased.html?${queryParams}`;
});
