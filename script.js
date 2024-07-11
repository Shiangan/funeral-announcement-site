document.addEventListener("DOMContentLoaded", function() {
    const funeralLocationSelect = document.getElementById("funeral-location");
    const hallSelect = document.getElementById("hall");

    funeralLocationSelect.addEventListener("change", function() {
        const selectedLocation = this.value;
        hallSelect.innerHTML = ""; // 清空之前的選項

        if (selectedLocation === "第二殯儀館") {
            hallSelect.innerHTML = `
                <option value="禮廳1">禮廳1</option>
                <option value="禮廳2">禮廳2</option>
                <option value="禮廳3">禮廳3</option>
            `;
        } else if (selectedLocation === "新北板橋殯儀館") {
            hallSelect.innerHTML = `
                <option value="禮廳A">禮廳A</option>
                <option value="禮廳B">禮廳B</option>
                <option value="禮廳C">禮廳C</option>
            `;
        } else if (selectedLocation === "桃園殯儀館") {
            hallSelect.innerHTML = `
                <option value="禮廳X">禮廳X</option>
                <option value="禮廳Y">禮廳Y</option>
                <option value="禮廳Z">禮廳Z</option>
            `;
        } else if (selectedLocation === "南榮殯儀館") {
            hallSelect.innerHTML = `
                <option value="禮廳1">禮廳1</option>
                <option value="禮廳2">禮廳2</option>
                <option value="禮廳3">禮廳3</option>
            `;
        }
    });

    // 表单提交处理
    const form = document.getElementById("obituary-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(form);
        console.log("表单数据:", Object.fromEntries(data.entries()));
        alert("訃聞已生成！");
    });
});
