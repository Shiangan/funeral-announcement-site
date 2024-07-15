// 獲取URL中的查詢參數
const urlParams = new URLSearchParams(window.location.search);

// 檢查查詢參數中是否有從index.html傳遞過來的資料
if (urlParams.has('name') && urlParams.has('birth-date') && urlParams.has('death-date')) {
    // 獲取填寫的資料
    const name = urlParams.get('name');
    const birthDate = urlParams.get('birth-date');
    const deathDate = urlParams.get('death-date');
    const funeralSpace = urlParams.has('funeral-space') ? urlParams.get('funeral-space') : '';
    const funeralDate = urlParams.get('funeral-date');
    const funeralLocation = urlParams.get('funeral-location');
    const familyServiceTime = urlParams.get('family-service-time');
    const publicServiceTime = urlParams.get('public-service-time');
    const lifeStory = urlParams.has('life-story') ? urlParams.get('life-story') : '';

    // 更新往生者詳細資料區域
    const deceasedDetails = `
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>出生日期:</strong> ${birthDate}</p>
        <p><strong>逝世日期:</strong> ${deathDate}</p>
    `;
    document.getElementById('details').innerHTML = deceasedDetails;

    // 更新出殯安排區域
    const funeralDetails = `
        <p><strong>牌位安置地點:</strong> ${funeralSpace}</p>
        <p><strong>出殯日期:</strong> ${funeralDate}</p>
        <p><strong>出殯地點:</strong> ${funeralLocation === '其他' ? urlParams.get('other-funeral-location') : funeralLocation}</p>
        <p><strong>家奠禮時間:</strong> ${familyServiceTime}</p>
        <p><strong>公奠禮時間:</strong> ${publicServiceTime}</p>
    `;
    document.getElementById('funeral-info').innerHTML = funeralDetails;

    // 更新生平介紹區域
    const lifeStoryContent = `
        <p>${lifeStory}</p>
    `;
    document.getElementById('story').innerHTML = lifeStoryContent;
} else {
    // 如果沒有填寫資料，可以顯示提示或導向回首頁等操作
    alert('沒有找到有效的往生者資料。請填寫資料後再試一次。');
    window.location.href = 'index.html';
}
