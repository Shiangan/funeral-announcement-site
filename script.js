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
        const sendFlowerBasket = urlParams.get('sendFlowerBasket');

    if (deceasedName && birthDate && deathDate && funeralDate && funeralLocation && hall && textStyle) {
        document.getElementById('obituary-details').innerHTML = `
            <h2>${deceasedName} 訃聞</h2>
            <p>出生日期: ${birthDate}</p>
            <p>逝世日期: ${deathDate}</p>
            <p>出殯日期: ${funeralDate}</p>
            <p>出殯地點: ${funeralLocation} ${hall}</p>
            <p>文本樣式: ${textStyle === 'traditional' ? '傳統' : '現代'}</p>
            <p>致贈花籃: ${sendFlowerBasket === 'yes' ? '是' : '否'}</p>
        `;
    }

    const messagesContainer = document.getElementById('messages-container');
    const messageInput = document.getElementById('message-input');

    function addMessage() {
    const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            messageInput.value = '';
        }
    }

    document.querySelector('.memorial-board form').addEventListener('submit', function(event) {
        event.preventDefault();
        addMessage();
    });
});
