document.addEventListener('DOMContentLoaded', () => {
    const obituaryForm = document.getElementById('obituary-form');
    const obituaryDetails = document.querySelector('.obituary-details');
    const flowerForm = document.querySelector('.flower-info');
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
                textStyle: formData.get('text-style')
            };

            // 将数据存储到本地存储
            localStorage.setItem('obituaryData', JSON.stringify(obituaryData));

            // 跳转到訃聞页面
            window.location.href = 'obituary.html';
        });
    }

    if (obituaryDetails) {
        const storedData = localStorage.getItem('obituaryData');
        if (storedData) {
            const obituaryData = JSON.parse(storedData);

            document.getElementById('obituary-name').textContent = `逝者姓名: ${obituaryData.name}`;
            document.getElementById('obituary-birth-date').textContent = `出生日期: ${obituaryData.birthDate}`;
            document.getElementById('obituary-death-date').textContent = `死亡日期: ${obituaryData.deathDate}`;
            document.getElementById('obituary-death-time').textContent = `死亡時間: ${obituaryData.deathTime}`;
            document.getElementById('obituary-place-name').textContent = `牌位安靈地點: ${obituaryData.placeName}`;
            document.getElementById('obituary-funeral-date').textContent = `出殯日期: ${obituaryData.funeralDate}`;
            document.getElementById('obituary-funeral-location').textContent = `出殯地點: ${obituaryData.funeralLocation}`;
            document.getElementById('obituary-hall').textContent = `禮廳: ${obituaryData.hall}`;

            // 显示花篮订购表单
            flowerForm.style.display = 'block';
        }
    }

    if (flowerForm) {
        flowerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const flowerData = new FormData(flowerForm);
            const orderData = {
                flowerStyle: flowerData.get('flower-style'),
                invoice: flowerData.get('invoice'),
                contactName: flowerData.get('contact-name')
            };

            console.log(orderData);
            alert('花籃訂單已提交');
        });
    }

    // 分享功能
    document.getElementById('share-line').addEventListener('click', () => {
        const url = window.location.href;
        window.open(`https://line.me/R/msg/text/?${encodeURIComponent(url)}`, '_blank');
    });

    document.getElementById('share-facebook').addEventListener('click', () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    });

    document.getElementById('share-sms').addEventListener('click', () => {
        const url = window.location.href;
        window.open(`sms:?body=${encodeURIComponent(url)}`, '_blank');
    });

    // 提交追思留言
    document.getElementById('submit-tribute').addEventListener('click', () => {
        const tributeMessage = document.getElementById('tribute-message').value;
        const tributeList = document.getElementById('tribute-list');
        const messageElement = document.createElement('p');
        messageElement.textContent = tributeMessage;
        tributeList.appendChild(messageElement);
        document.getElementById('tribute-message').value = '';
    });
});
