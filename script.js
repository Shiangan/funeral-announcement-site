document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('obituary-form');
    const shareLineButton = document.getElementById('share-line');
    const shareFacebookButton = document.getElementById('share-facebook');
    const shareSmsButton = document.getElementById('share-sms');
    const submitTributeButton = document.getElementById('submit-tribute');
    const tributeList = document.getElementById('tribute-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateObituary();
    });

    shareLineButton.addEventListener('click', () => {
        const url = window.location.href;
        window.open(`https://line.me/R/msg/text/?${encodeURIComponent(url)}`);
    });

    shareFacebookButton.addEventListener('click', () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
    });

    shareSmsButton.addEventListener('click', () => {
        const url = window.location.href;
        window.open(`sms:?body=${encodeURIComponent(url)}`);
    });

    submitTributeButton.addEventListener('click', () => {
        const message = document.getElementById('tribute-message').value;
        if (message.trim() !== '') {
            const tributeItem = document.createElement('p');
            tributeItem.textContent = message;
            tributeList.appendChild(tributeItem);
            document.getElementById('tribute-message').value = '';
        }
    });
});

function generateObituary() {
    const deceasedName = document.getElementById('deceased-name').value;
    const gender = document.getElementById('gender').value;
    const birthDate = document.getElementById('birth-date').value;
    const deathDate = document.getElementById('death-date').value;
    const deathTime = document.getElementById('death-time').value;
    const placeName = document.getElementById('place-name').value;
    const funeralDate = document.getElementById('funeral-date').value;
    const funeralLocation = document.getElementById('funeral-location').value;
    const hall = document.getElementById('hall').value;
    const textStyle = document.getElementById('text-style').value;

    localStorage.setItem('obituaryData', JSON.stringify({
        deceasedName,
        gender,
        birthDate,
        deathDate,
        deathTime,
        placeName,
        funeralDate,
        funeralLocation,
        hall,
        textStyle
    }));

    window.location.href = 'obituary.html';
}
