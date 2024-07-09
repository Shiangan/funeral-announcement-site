document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('obituary-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const queryParams = new URLSearchParams(formData).toString();
        window.location.href = `details.html?${queryParams}`;
    });

    const locationSelect = document.getElementById('funeral-location');
    const hallSelect = document.getElementById('hall');

    locationSelect.addEventListener('change', function() {
        const selectedLocation = locationSelect.value;
        hallSelect.innerHTML = '<option value="">請選擇</option>';

        if (selectedLocation) {
            hallSelect.disabled = false;
            if (selectedLocation === '第二殯儀館') {
                hallSelect.innerHTML += '<option value="至真1廳">至真1廳</option>';
                hallSelect.innerHTML += '<option value="至真2廳">至真2廳</option>';
            } else if (selectedLocation === '新北板橋殯儀館') {
                hallSelect.innerHTML += '<option value="至真3廳">至真3廳</option>';
                hallSelect.innerHTML += '<option value="至真4廳">至真4廳</option>';
            } else if (selectedLocation === '桃園殯儀館') {
                hallSelect.innerHTML += '<option value="至真5廳">至真5廳</option>';
                hallSelect.innerHTML += '<option value="至真6廳">至真6廳</option>';
            } else if (selectedLocation === '南榮殯儀館') {
                hallSelect.innerHTML += '<option value="至真7廳">至真7廳</option>';
                hallSelect.innerHTML += '<option value="至真8廳">至真8廳</option>';
            }
        } else {
            hallSelect.disabled = true;
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const deceasedName = urlParams.get('deceasedName');
    const birthDate = urlParams.get('birthDate');
    const deathDate = urlParams.get('deathDate');
    const funeralDate = urlParams.get('funeralDate');
    const funeralLocation = urlParams.get('funeralLocation');
    const hall = urlParams.get('hall');
    const textStyle = urlParams.get('textStyle');
    const sendFlowerBasket = urlParams.get
