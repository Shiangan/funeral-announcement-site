document.addEventListener("DOMContentLoaded", function() {
    // 等待生成动画结束后显示内容
    setTimeout(function() {
        document.querySelector('.intro-animation').style.display = 'none';
        document.querySelector('#obituary-content').classList.add('show');
    }, 5000); // 5秒后显示内容

    // 监听表单提交事件
    document.getElementById('obituary-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单选择的值
        const style = document.getElementById('style').value;
        const date = document.getElementById('date').value;
// 根据日期和选择的内容更新内页信息
    updateDetails(funeralDate, funeralLocation, hall);
});

function generateObituaryAndRedirect() {
    // 獲取表單中的數據
    var deceasedName = document.getElementById('deceased-name').value;
    var deathDate = document.getElementById('death-date').value;
    var funeralDate = document.getElementById('funeral-date').value;
    var funeralLocation = document.getElementById('funeral-location').value;
    var textStyle = document.getElementById('text-style').value;
    var sendFlowerBasket = document.getElementById('send-flower-basket').value;
    var musicSelection = document.getElementById('music').value;

   // 計算年齡
    var deathYear = new Date(deathDate).getFullYear();
    var birthYear = deathYear - 80; // 假設80歲
    var age = deathYear - birthYear;

    // 根據性別和年齡條件選擇訃聞內容
    var obituaryContent;
    if (gender === 'male' && age <= 30) {
         obituaryContent = `我們摯愛的${deceasedName}先生，已於國曆${deathDate}辭世往生，得年${age}歲。<br>謹擇於國曆${funeralDate}於${funeralLocation}舉行追思告別儀式，敬邀親朋好友蒞臨告別致意。`;
    } else if (gender === 'female' && age <= 30){
    if (gender === 'male' && age <= 60) {
        obituaryContent = `我們摯愛的${deceasedName}先生，已於國曆${deathDate}辭世往生，享年${age}歲。<br>謹擇於國曆${funeralDate}於${funeralLocation}舉行追思告別儀式，敬邀親朋好友蒞臨告別致意。`;
    } else if (gender === 'female' && age <= 60) {
        obituaryContent = `我們摯愛的${deceasedName}先生，已於國曆${deathDate}辭世往生，享年${age}歲。<br>謹擇於國曆${funeralDate}於${funeralLocation}舉行追思告別儀式，敬邀親朋好友蒞臨告別致意。`;
    } else if (gender === 'female' && age <= 90) {
        obituaryContent = `我們摯愛的${deceasedName}女士，已於國曆${deathDate}辭世往生，享嵩壽${age}歲。<br>謹擇於${funeralDate}於${funeralLocation}舉行追思告別儀式，敬邀親朋好友蒞臨告別致意。`;
    } else if (gender === 'female' && age <= 100) {
        obituaryContent = `我們摯愛的${deceasedName}，已於國曆${deathDate}辭世往生，享耆壽${age}歲。<br>謹擇於${funeralDate}於${funeralLocation}舉行追思告別儀式，敬邀親朋好友蒞臨告別致意。`;
    }

    // 將訃聞內容存儲到 sessionStorage 中，以便在下一頁訪問
    sessionStorage.setItem('obituaryContent', obituaryContent);

    // 根據音樂選擇播放不同音樂
    playMusic(musicSelection);

    // 跳轉到 page1.html 頁面
    window.location.href = 'page1.html';
}

function playMusic(selection) {
    var audio = new Audio();
    if (selection === 'music1') {
        audio.src = 'path/to/music1.mp3'; // 更換為音樂1的路徑
    } else if (selection === 'music2') {
        audio.src = 'path/to/music2.mp3'; // 更換為音樂2的路徑
    }
    audio.play();
}
