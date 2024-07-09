document.addEventListener('DOMContentLoaded', function() {
    const obituaryForm = document.getElementById('obituary-form');
    const musicButtons = document.querySelectorAll('.music-options button');
    const audioPreview = document.getElementById('audio-preview');
    let selectedMusicUrl = '';

    musicButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedMusicUrl = this.getAttribute('data-music-url');
            audioPreview.src = selectedMusicUrl;
            audioPreview.hidden = false;
            audioPreview.play();
        });
    });

    obituaryForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(obituaryForm);
        const deceasedName = formData.get('deceased-name');
        const birthDate = formData.get('birth-date');
        const deathDate = formData.get('death-date');
        const funeralDate = formData.get('funeral-date');
        const funeralLocation = formData.get('funeral-location');
        const hall = formData.get('hall');
        const textStyle = formData.get('text-style');
        const sendFlowerBasket = formData.get('send-flower-basket');
        const photoFile = formData.get('photo-upload');

        const reader = new FileReader();
        reader.onload = function(event) {
            const photoUrl = event.target.result;

            const urlParams = new URLSearchParams({
                deceasedName,
                birthDate,
                deathDate,
                funeralDate,
                funeralLocation,
                hall,
                textStyle,
                sendFlowerBasket,
                photoUrl,
                musicUrl: selectedMusicUrl
            });

            window.location.href = 'details.html?' + urlParams.toString();
        };
        reader.readAsDataURL(photoFile);
    });
});
function updateHalls() {
    const funeralLocationSelect = document.getElementById('funeralLocation');
    const hallSelect = document.getElementById('hall');

    // 清空现有的选项
    hallSelect.innerHTML = '';

    // 根据选择的地點添加对应的禮廳选项
    if (funeralLocationSelect.value === 'second_funeral_home') {
        const options = [
            { text: '至仁一廳', value: 'ziren_hall' },
            { text: '至忠一廳', value: 'zhizhong_hall' }
            // Add more options as needed
        ];
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.text;
            optionElement.value = option.value;
            hallSelect.appendChild(optionElement);
        });
    } else if (funeralLocationSelect.value === 'banqiao_funeral_home') {
        const options = [
            { text: '明善廳', value: 'minshan_hall' },
            { text: '明道廳', value: 'mindao_hall' }
            // Add more options as needed
        ];
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.text;
            optionElement.value = option.value;
            hallSelect.appendChild(optionElement);
        });
    }
}
