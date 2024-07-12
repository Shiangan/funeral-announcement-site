document.addEventListener('DOMContentLoaded', () => {
    const obituaryData = JSON.parse(localStorage.getItem('obituaryData'));
    if (obituaryData) {
        document.getElementById('obituary-name').textContent = `逝者姓名：${obituaryData.name}`;
        document.getElementById('obituary-birth-date').textContent = `出生日期：${obituaryData.birthDate}`;
        document.getElementById('obituary-death-date').textContent = `死亡日期：${obituaryData.deathDate}`;
        document.getElementById('obituary-death-time').textContent = `死亡時間：${obituaryData.deathTime}`;
        document.getElementById('obituary-place-name').textContent = `牌位安靈地點：${obituaryData.placeName}`;
        document.getElementById('obituary-funeral-date').textContent = `出殯日期：${obituaryData.funeralDate}`;
        document.getElementById('obituary-funeral-location').textContent = `出殯地點：${obituaryData.funeralLocation}`;
        document.getElementById('obituary-hall').textContent = `禮廳：${obituaryData.hall}`;
        document.getElementById('obituary-photo').src = obituaryData.photo;
    }

    document.getElementById('share-line').addEventListener('click', () => {
        alert('分享到Line');
    });

    document.getElementById('share-facebook').addEventListener('click', () => {
        alert('分享到Facebook');
    });

    document.getElementById('share-sms').addEventListener('click', () => {
        alert('分享簡訊');
    });

    document.getElementById('submit-tribute').addEventListener('click', () => {
        const message = document.getElementById('tribute-message').value;
        const tributeList = document.getElementById('tribute-list');
        const newTribute = document.createElement('div');
        newTribute.textContent = message;
        tributeList.appendChild(newTribute);
        document.getElementById('tribute-message').value = '';

        // 添加動畫效果，例如漸顯新留言
        newTribute.style.opacity = '0';
        setTimeout(() => {
            newTribute.style.opacity = '1';
        }, 300); // 300毫秒後漸顯新留言
    });

    document.getElementById('flower-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const orderDetails = {
            flowerStyle: formData.get('flower-style'),
            invoice: formData.get('invoice'),
            contactName: formData.get('contact-name'),
            recipientName: formData.get('recipient-name'),
            recipientAddress: formData.get('recipient-address')
        };
        // 在這裡可以添加提交訂單的邏輯，例如保存到數據庫
        console.log(orderDetails);
        event.target.reset(); // 清空表單
    });
});
