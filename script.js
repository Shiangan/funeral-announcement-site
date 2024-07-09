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

        // 根据选择更新生成的内容
        const deathInfo = document.getElementById('death-info');
        if (style === 'chinese') {
            // 中式寫法
            if (date) {
                const deathDate = new Date(date);
                const year = deathDate.getFullYear();
                const month = deathDate.getMonth() + 1;
                const day = deathDate.getDate();
                const gender = document.querySelector('input[name="gender"]:checked').value;

                if (gender === 'male') {
                    deathInfo.textContent = `${year}年${month}月${day}日，男生寫壽終正寢。`;
                } else if (gender === 'female') {
                    deathInfo.textContent = `${year}年${month}月${day}日，女生寫壽終內寢。`;
                }
            }
        } else {
            // 其他寫法
            deathInfo.textContent = '其他寫法的內容...';
        }

        // 显示生成的内容
        document.getElementById('obituary-content').classList.add('show');
    });
});
