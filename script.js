document.addEventListener('DOMContentLoaded', () => {
    const obituaryForm = document.getElementById('obituary-form');
    const hallSelect = document.getElementById('hall');
    const funeralLocationSelect = document.getElementById('funeral-location');

    // 更新禮廳選項
    const updateHallOptions = (location) => {
        const halls = {
            "第二殯儀館": ["禮廳1", "禮廳2", "禮廳3"],
            "新北板橋殯儀館": ["禮廳A", "禮廳B"],
            "桃園殯儀館": ["禮廳X", "禮廳Y", "禮廳Z"],
            "南榮殯儀館": ["禮廳M", "禮廳N"]
        };

        hallSelect.innerHTML = "";
        if (halls[location]) {
            halls[location].forEach(hall => {
                const option = document.createElement('option');
                option.value = hall;
                option.textContent = hall;
                hallSelect.appendChild(option);
            });
        }
    };

    // 初次加載時更新禮廳選項
    updateHallOptions(funeralLocationSelect.value);

    // 當出殯地點改變時更新禮廳選項
    funeralLocationSelect.addEventListener('change', (event) => {
        updateHallOptions(event.target.value);
    });

    if (obituaryForm) {
        obituaryForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(obituaryForm);
            const photo = formData.get('photo');

            // 读取照片数据
            const reader = new FileReader();
            reader.onload = () => {
                const obituaryData = {
                    name: formData.get('deceased-name'),
                    gender: formData.get('gender'),
                    birthDate: formData.get('birth-date'),
                    deathDate: formData.get('death-date'),
                    deathTime: formData.get('death-time'),
                    placeName: formData.get('place-name'),
                    funeralDate: formData.get('funeral-date'),
                    funeralLocation: formData.get('funeral-location'),
                    hall: formData.get('hall'),
                    textStyle: formData.get('text-style'),
                    photo: reader.result // 照片的Base64数据
                };

                // 将数据存储到本地存储
                localStorage.setItem('obituaryData', JSON.stringify(obituaryData));

                // 跳转到訃聞页面
                window.location.href = 'obituary.html';
            };
            reader.readAsDataURL(photo);
        });
    }
});
