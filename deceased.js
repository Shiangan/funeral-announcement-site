// deceased.js

// 用戶訃聞資料（模擬）
const deceasedData = {
    name: "逝者姓名",
    birthDateType: "gregorian",
    birthDate: "1990-01-01",
    deathDateType: "gregorian",
    deathDate: "2024-07-15",
    ageType: "享年",
    age: "34",
    funeralSpace: "墓園地址",
    funeralDate: "2024-07-20",
    funeralLocation: "第二殯儀館",
    familyServiceTime: "14:00",
    publicServiceTime: "15:00",
    lifeStory: "生平介紹..."
};

// 加載訃聞資料
function loadDeceasedInfo() {
    const deceasedDetails = document.getElementById('deceased-details');
    deceasedDetails.innerHTML = `
        <p><strong>逝者姓名：</strong>${deceasedData.name}</p>
        <p><strong>出生日期：</strong>${deceasedData.birthDateType === 'gregorian' ? '國曆' : '農曆'} ${deceasedData.birthDate}</p>
        <p><strong>死亡日期：</strong>${deceasedData.deathDateType === 'gregorian' ? '國曆' : '農曆'} ${deceasedData.deathDate}</p>
        <p><strong>${deceasedData.ageType}：</strong>${deceasedData.age}${deceasedData.ageType}</p>
        <p><strong>牌位安置地點：</strong>${deceasedData.funeralSpace}</p>
        <p><strong>出殯日期：</strong>${deceasedData.funeralDate}</p>
        <p><strong>出殯地點：</strong>${deceasedData.funeralLocation === '其他' ? deceasedData.otherFuneralLocation : deceasedData.funeralLocation}</p>
        <p><strong>家奠禮時間：</strong>${deceasedData.familyServiceTime}</p>
        <p><strong>公奠禮時間：</strong>${deceasedData.publicServiceTime}</p>
        <p><strong>生平介紹：</strong>${deceasedData.lifeStory}</p>
    `;
}

// 加載追思照片
function loadTributePhotos() {
    const slideshowContainer = document.getElementById('slideshow-container');
    const photos = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg'
    ];

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `photos/${photo}`;
        img.alt = '追思照片';
        slideshowContainer.appendChild(img);
    });

    let slideIndex = 0;

    function showSlides() {
        const slides = slideshowContainer.getElementsByTagName('img');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // 切換間隔時間（ms）
    }

    showSlides();
}

// 加載訃聞資料和追思照片
document.addEventListener('DOMContentLoaded', function () {
    loadDeceasedInfo();
    loadTributePhotos();
});
