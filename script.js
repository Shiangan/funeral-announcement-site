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

function updateDetails(date, location, hall) {
    // 根据日期设置相关文本
    let message = '';
    if (location === '第二殯儀館') {
        message = `尊敬的親朋好友們，本公司即日起公布親愛的XXX於${date}安詳辭世，${hall}等您的到來。`;
    } else if (location === '新北板橋殯儀館') {
        message = `親愛的親友們，XXX於${date}靜靜地離開我們，${hall}為您準備了一個溫馨的場地。`;
    }
    
    // 更新页面元素，例如显示照片和消息
    document.getElementById('photo').setAttribute('src', 'path/to/deceased-photo.jpg'); // 设置亡者照片
    document.getElementById('invitation-text').textContent = '敬請邀請參加'; // 设置邀请文字
    document.getElementById('message').textContent = message; // 显示消息内容
}
