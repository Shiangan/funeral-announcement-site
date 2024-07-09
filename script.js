document.addEventListener('DOMContentLoaded', function() {
    const memorialForm = document.getElementById('memorial-form');
    const messageForm = document.getElementById('message-form');
    const messagesContainer = document.getElementById('messages-container');
    const messageInput = document.getElementById('message-input');

    memorialForm.addEventListener('submit', function(event) {
        event.preventDefault();
        showDetails();
    });

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addMessage();
    });

    function showDetails() {
        const formData = new FormData(memorialForm);
        const deceasedName = formData.get('deceasedName');
        const deathDate = formData.get('deathDate');
        const deathDateLunar = formData.get('deathDateLunar');
        const funeralLocation = formData.get('funeralLocation');
        const hall = formData.get('hall');

        const details = {
            deceasedName,
            deathDate,
            deathDateLunar,
            funeralLocation,
            hall
        };

        // Replace '{{...}}' placeholders in details.html with actual data
        const detailsHtml = `
            <h2>亡者資訊</h2>
            <p>逝者姓名：${details.deceasedName}</p>
            <p>歿於（國曆）：${details.deathDate}</p>
            <p>歿於（農曆）：${details.deathDateLunar}</p>
            <p>地點：${details.funeralLocation}</p>
            <p>禮廳：${details.hall}</p>
        `;

        // Inject details into details.html
        const detailsContainer = document.querySelector('.details');
        detailsContainer.innerHTML = detailsHtml;

        // Show tribute section
        const tributeSection = document.querySelector('.tribute-section');
        tributeSection.style.display = 'block';
    }

    function addMessage() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            messageInput.value = '';
        }
    }
});
