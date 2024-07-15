<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>逝者訃聞 - 祥安生命有限公司</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>逝者訃聞</h1>
    </header>

    <main>
        <section id="deceased-details">
            <h2>逝者資料</h2>
            <form id="deceased-form" action="deceased.html" method="POST">
                <label for="name">姓名:</label>
                <input type="text" id="name" name="name" required><br><br>

                <label for="birth-date">出生日期:</label>
                <input type="date" id="birth-date" name="birth-date" required><br><br>

                <label for="death-date">死亡日期:</label>
                <input type="date" id="death-date" name="death-date" required><br><br>

                <label for="funeral-space">牌位安置地點:</label>
                <input type="text" id="funeral-space" name="funeral-space"><br><br>

                <label for="funeral-date">出殯日期:</label>
                <input type="date" id="funeral-date" name="funeral-date" required><br><br>

                <label for="funeral-location">出殯地點:</label>
                <select id="funeral-location" name="funeral-location" required>
                    <option value="第二殯儀館">第二殯儀館 禮廳</option>
                    <option value="板橋殯儀館">板橋殯儀館 禮廳</option>
                    <option value="其他">其他</option>
                </select><br><br>

                <input type="text" id="other-funeral-location" name="other-funeral-location" placeholder="若選擇其他，請填寫地點"><br><br>

                <label for="family-service-time">家奠禮時間:</label>
                <input type="time" id="family-service-time" name="family-service-time" required><br><br>

                <label for="public-service-time">公奠禮時間:</label>
                <input type="time" id="public-service-time" name="public-service-time" required><br><br>

                <label for="life-story">生平介紹:</label><br>
                <textarea id="life-story" name="life-story"></textarea><br><br>

                <!-- 按鈕觸發 JavaScript 函式生成訃聞 -->
                <button type="button" id="generate-details">生成訃聞</button>
            </form>
        </section>

        <!-- 顯示動態生成的訃聞內容 -->
        <section id="generated-content" style="display: none;">
            <h2>生成的訃聞內容</h2>
            <div id="deceased-content"></div>
        </section>
    </main>

