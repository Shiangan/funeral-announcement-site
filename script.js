document.addEventListener('DOMContentLoaded', function() {
    // 從 URL 參數中獲取資料
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const birthDate = urlParams.get('birth-date');
    const deathDate = urlParams.get('death-date');
    const funeralSpace = urlParams.get('funeral-space');
    const funeralDate = urlParams.get('funeral-date');
    const funeralLocation = urlParams.get('funeral-location');
    const otherFuneralLocation = urlParams.get('other-funeral-location');
    const familyServiceTime = urlParams.get('family-service-time');
    const publicServiceTime = urlParams.get('public-service-time');
    const lifeStory = urlParams.get('life-story');
    const musicChoice = urlParams.get('music-choice');
    const fontChoice = urlParams.get('font-choice') || 'Arial, sans-serif';

    // 填充訃聞內容
    document.getElementById('deceased-name').textContent = name;
    document.getElementById('birth-date-text').textContent = birthDate;
    document.getElementById('death-date-text').textContent = deathDate;
    document.getElementById('funeral-space-text').textContent = funeralSpace;
    document.getElementById('funeral-date-text').textContent = funeralDate;
    document.getElementById('funeral-location-text').textContent = funeralLocation === '其他' ? otherFuneralLocation : funeralLocation;
    document.getElementById('family-service-time-text').textContent = familyServiceTime;
    document.getElementById('public-service-time-text').textContent = publicServiceTime;
    document.getElementById('life-story-text').textContent = lifeStory;

    // 設置背景音樂
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.src = musicChoice;
    backgroundMusic.play();

    // 處理照片上傳
    const photoUpload = urlParams.get('photo');
    if (photoUpload) {
        document.getElementById('deceased-photo').src = photoUpload;
    }

    // 設置字體
    changeFont(fontChoice);

    // 留言表單提交
    document.getElementById('message-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const message = document.getElementById('message-input').value.trim();
        if (message === '') return;

        const messagesDiv = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);

        document.getElementById('message-form').reset(); // 清空留言表單
    });

    // 花籃訂購表單提交
    document.getElementById('flower-order-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const senderName = document.getElementById('sender-name').value.trim();
        const recipientName = document.getElementById('recipient-name').value.trim();
        const recipientAddress = document.getElementById('recipient-address').value.trim();
        const invoice = document.getElementById('invoice').value;
        const flowerBasketMessage = document.getElementById('flower-basket-message').value.trim();

        // 顯示訂購信息（這裡只是模擬顯示）
        alert(`訂購人姓名: ${senderName}\n收件人姓名: ${recipientName}\n收件人地址: ${recipientAddress}\n是否需要發票: ${invoice}\n花籃留言: ${flowerBasketMessage}`);

        // 清空訂購表單
        document.getElementById('flower-order-form').reset();
    });

    // 字體選擇變更
    document.getElementById('font-choice').addEventListener('change', function() {
        const selectedFont = this.value;
        changeFont(selectedFont);
    });

    function changeFont(font) {
        document.body.style.fontFamily = font;
    }
});
