document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const deceasedName = urlParams.get('name');
    const birthDate = urlParams.get('birth-date');
    const deathDate = urlParams.get('death-date');
    const ageType = urlParams.get('age-type');
    const age = parseInt(urlParams.get('age'), 10);
    const funeralSpace = urlParams.get('funeral-sapce');
    const funeralDate = urlParams.get('funeral-date');
    const funeralLocation = urlParams.get('funeral-location');
    const lifeStory = urlParams.get('life-story');
    const familyCeremonyTime = urlParams.get('family-ceremony-time');
    const publicCeremonyTime = urlParams.get('public-ceremony-time');

    const calculateAgeType = (age) => {
        if (age < 30) return '得年';
        if (age >= 30 && age <= 59) return '享年';
        if (age >= 60 && age <= 89) return '享壽';
        if (age >= 90 && age <= 99) return '享耆壽';
        return '享嵩壽';
    };

    // 填充页面信息
    document.getElementById('deceased-name').textContent = deceasedName;
    document.getElementById('birth-date').textContent = birthDate;
    document.getElementById('death-date').textContent = deathDate;
    document.getElementById('age-type').textContent = calculateAgeType(age);
    document.getElementById('age').textContent = age;
    document.getElementById('funeral-space').textContent = funeralSpace;
    document.getElementById('funeral-date').textContent = funeralDate;
    document.getElementById('funeral-location').textContent = funeralLocation;
    document.getElementById('family-ceremony-time').textContent = familyCeremonyTime || '暫無';
    document.getElementById('public-ceremony-time').textContent = publicCeremonyTime || '暫無';

    // 回憶照片和视频上传
    const memoryUpload = document.getElementById('memory-upload');
    const memoryGallery = document.getElementById('memory-gallery');

    memoryUpload.addEventListener('change', function (event) {
        const files = event.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const mediaElement = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
                mediaElement.src = e.target.result;
                if (file.type.startsWith('video')) mediaElement.controls = true;
                memoryGallery.appendChild(mediaElement);
            };
            reader.readAsDataURL(file);
        }
    });

    // 追思留言提交
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');
    const submitMessage = document.getElementById('submit-message');

    submitMessage.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText) {
                        const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.textContent = messageText;
            messageList.appendChild(messageDiv);
            messageInput.value = '';
        }
    });

    // 背景音乐控制
    const backgroundMusic = document.getElementById('background-music');
    const musicFiles = [
        'music1.mp3',
        'music2.mp3',
        'music3.mp3',
        'music4.mp3',
        'music5.mp3'
    ];

    // 让用户选择背景音乐
    const musicSelection = document.createElement('div');
    musicSelection.classList.add('music-selection');

    musicFiles.forEach((musicFile, index) => {
        const musicOption = document.createElement('button');
        musicOption.textContent = `播放音乐 ${index + 1}`;
        musicOption.addEventListener('click', () => {
            backgroundMusic.src = musicFile;
            backgroundMusic.play();
        });
        musicSelection.appendChild(musicOption);
    });

    document.body.appendChild(musicSelection);
    
    // 照片渐显
    const deceasedPhoto = new Image();
    deceasedPhoto.src = urlParams.get('photo');
    deceasedPhoto.classList.add('fade-in');
    document.body.insertBefore(deceasedPhoto, document.getElementById('announcement'));

    // 点击进入页面
    deceasedPhoto.addEventListener('click', () => {
        deceasedPhoto.style.display = 'none';
        document.getElementById('announcement').classList.add('fade-in');
    });
});
