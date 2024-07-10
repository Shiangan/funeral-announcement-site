document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('obituary-form');
    const memorialMessage = document.getElementById('memorial-message');
    const hallSelect = document.getElementById('hall');
    const funeralLocationSelect = document.getElementById('funeral-location');

    // 更新選擇禮廳的選項
    funeralLocationSelect.addEventListener('change', function () {
        const location = this.value;
        hallSelect.innerHTML = ''; // 清空禮廳選項
        hallSelect.disabled = false; // 启用禮廳選項

        if (location === '第二殯儀館') {
            hallSelect.innerHTML = '<option value="1號廳">1號廳</option><option value="2號廳">2號廳</option>';
        } else if (location === '新北板橋殯儀館') {
            hallSelect.innerHTML = '<option value="A廳">A廳</option><option value="B廳">B廳</option>';
        } else if (location === '桃園殯儀館') {
            hallSelect.innerHTML = '<option value="桃A廳">桃A廳</option><option value="桃B廳">桃B廳</option>';
        } else if (location === '南榮殯儀館') {
            hallSelect.innerHTML = '<option value="南A廳">南A廳</option><option value="南B廳">南B廳</option>';
        } else {
            hallSelect.disabled = true; // 没有有效的出殯地點时禁用禮廳選項
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表單提交

        // 显示訃聞信息
        memorialMessage.style.display = 'block';
    });
});
