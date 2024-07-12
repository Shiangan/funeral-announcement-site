document.addEventListener('DOMContentLoaded', () => {
    // 取得表單和元素
    const deceasedForm = document.getElementById('deceased-form');
    const obituarySection = document.getElementById('obituary');
    const tributesSection = document.getElementById('tributes');
    const flowerOrderSection = document.getElementById('flower-order');
    const tributeForm = document.getElementById('tribute-form');
    const flowerForm = document.getElementById('flower-form');
    const invoiceCheckbox = document.getElementById('invoice');
    const invoiceInfo = document.getElementById('invoice-info');

    // 提交訃聞表單
    deceasedForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(deceasedForm);
        const obituaryText = `
            姓名：${formData.get('name')}
            出生日期：${formData.get('birth-date')}
            死亡日期：${formData.get('death-date歲數：${formData.get('age')} ${formData.get('age-type')}
            出殯日期：${formData.get('funeral-date')}
            出殯地點：${formData.get('funeral-location')}
            生平介紹：${formData.get('life-story')}
        `;

        document.getElementById('obituary-text').textContent = obituaryText;
        obituarySection.style.display = 'block';
        tributesSection.style.display = 'block';
        flowerOrderSection.style.display = 'block';
    });

    // 訂購花籃表單
    flowerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(flowerForm);
        let totalPrice = 0;

        switch (formData.get('flower-type')) {
            case 'type1':
                totalPrice += 1000;
                break;
            case 'type2':
                totalPrice += 2000;
                break;
        }

        if (formData.get('invoice')) {
            totalPrice *= 1.1; // 添加10%附加費
        }

        document.getElementById('total-price').textContent = `總金額: $${totalPrice}`;

        // 清空表單
        flowerForm.reset();
        invoiceInfo.style.display = 'none';
    });

    // 显示或隐藏发票信息
    invoiceCheckbox.addEventListener('change', () => {
        if (invoiceCheckbox.checked) {
            invoiceInfo.style.display = 'block';
        } else {
            invoiceInfo.style.display = 'none';
        }
    });

    // 提交追思留言表单
    tributeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(tributeForm);
        const tributeMessage = `
            姓名：${formData.get('tribute-name')}
            留言：${formData.get('tribute-message')}
        `;
        const tributeDiv = document.createElement('div');
        tributeDiv.textContent = tributeMessage;
        document.getElementById('tributes-list').appendChild(tributeDiv);

        // 清空表单
        tributeForm.reset();
    });
});
