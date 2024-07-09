document.addEventListener("DOMContentLoaded", function() {
    // 等待生成动画结束后显示内容
    setTimeout(function() {
        document.querySelector('.intro-animation').style.display = 'none';
        document.querySelector('#obituary-content').classList.add('show');
    }, 5000); // 5秒后显示内容
});
