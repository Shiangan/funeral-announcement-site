function updateHalls() {
    const funeralLocation = document.getElementById("funeralLocation").value;
    const hallSelect = document.getElementById("hall");

    hallSelect.innerHTML = ""; // 清空现有选项

    if (funeralLocation === "second_funeral_home") {
        const options = [
            { value: "hall1", text: "禮廳1" },
            { value: "hall2", text: "禮廳2" }
            // 添加更多选项
        ];
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.text = option.text;
            hallSelect.appendChild(opt);
        });
        hallSelect.disabled = false;
    } else if (funeralLocation === "banqiao_funeral_home") {
                const options = [
            { value: "hall3", text: "禮廳3" },
            { value: "hall4", text: "禮廳4" }
            // 添加更多选项
        ];
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.text = option.text;
            hallSelect.appendChild(opt);
        });
        hallSelect.disabled = false;
    } else {
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "請先選擇出殯地點";
        hallSelect.appendChild(defaultOption);
        hallSelect.disabled = true;
    }
}

document.getElementById("funeralLocation").addEventListener("change", updateHalls);
