// JavaScript 文件 script.js

// 當文檔完全加載後運行以下內容
document.addEventListener("DOMContentLoaded", function() {
    var generateButton = document.getElementById("generate-details");
    var form = document.getElementById("deceased-form");
    var generatedContent = document.getElementById("generated-content");
    var deceasedContent = document.getElementById("deceased-content");

    generateButton.addEventListener("click", function() {
        // 取得表單輸入的值
        var name = document.getElementById("name").value;
        var birthDate = document.getElementById("birth-date").value;
        var deathDate = document.getElementById("death-date").value;
        var funeralSpace = document.getElementById("funeral-space").value;
        var funeralDate = document.getElementById("funeral-date").value;
        var funeralLocation = document.getElementById("funeral-location").value;
        var otherFuneralLocation = document.getElementById("other-funeral-location").value;
        var familyServiceTime = document.getElementById("family-service-time").value;
        var publicServiceTime = document.getElementById("public-service-time").value;
        var lifeStory = document.getElementById("life-story").value;

        // 生成訃聞內容並顯示
        var content = `
            <div class="deceased-info">
                <h3>姓名：${name}</h3>
                <p>出生日期：${birthDate}</p>
                <p>死亡日期：${deathDate}</p>
                <p>牌位安置地點：${funeralSpace ? funeralSpace : "未填寫"}</p>
                <p>出殯日期：${funeralDate}</p>
                <p>出殯地點：${funeralLocation === "其他" ? otherFuneralLocation : funeralLocation}</p>
                <p>家奠禮時間：${familyServiceTime}</p>
                <p>公奠禮時間：${publicServiceTime}</p>
            </div>
            <div class="life-story">
                <h2>生平介紹</h2>
                <p>${lifeStory ? lifeStory : "暫無生平介紹"}</p>
            </div>
        `;

        // 將生成的內容插入到頁面中並顯示
        deceasedContent.innerHTML = content;
        generatedContent.style.display = "block";
    });
});
