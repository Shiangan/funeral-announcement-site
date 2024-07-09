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

    // 組合訃聞內容
    var obituaryTitle = '訃聞標題';
    var obituaryText = '往生者姓名: ' + deceasedName + '<br>' +
                       '逝世日期: ' + deathDate + '<br>' +
                       '出殯日期: ' + funeralDate + '<br>' +
                       '出殯地點: ' + funeralLocation + '<br>' +
                       '內文風格: ' + textStyle + '<br>' +
                       '是否贈送花籃: ' + sendFlowerBasket;

    // 將訃聞內容存儲到 sessionStorage 中，以便在下一頁訪問
    sessionStorage.setItem('obituaryTitle', obituaryTitle);
    sessionStorage.setItem('obituaryText', obituaryText);

    // 跳轉到 page1.html 頁面
    window.location.href = 'page1.html';
}
