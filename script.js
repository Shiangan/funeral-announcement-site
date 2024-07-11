document.getElementById('deceased-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthDateType = document.getElementById('birth-date-type').value;
    const birthDate = document.getElementById('birth-date').value;
    const deathDateType = document.getElementById('death-date-type').value;
    const deathDate = document.getElementById('death-date').value;
    const ageType = document.getElementById('age-type').value;
    const age = document.getElementById('age').value;
    const funeralDate = document.getElementById('funeral-date').value;
    const funeralLocation = document.getElementById('funeral-location').value;
    const lifeStory = document.getElementById('life-story').value;
    
    const obituaryText = `
        我們摯愛的親人 ${name} 於 ${deathDateType} ${deathDate} 安詳離世，享${ageType} ${age} 歲，
        距生於 ${birthDateType} ${birth Date}。出殯儀式將於 ${funeralDate} 在 ${funeralLocation} 舉行。
        ${lifeStory ? '生平介紹：' + lifeStory : ''}
    `;
    
    document.getElementById('obituary-text').innerText = obituaryText;
    document.getElementById('deceased-info').style.display = 'none';
    document.getElementById('obituary').style.display = 'block';
    document.getElementById('tributes').style.display = 'block';
    document.getElementById('flower-order').style.display = 'block';
});

document.getElementById('tribute-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('tribute-name').value;
    const message = document.getElementById('tribute-message').value;

    const tributeEntry = document.createElement('div');
    tributeEntry.classList.add('tribute-entry');
    tributeEntry.innerHTML = `<strong>${name}</strong>: ${message}`;

    const tributesList = document.getElementById('tributes-list');
    tributesList.appendChild(tributeEntry);

    document.getElementById('tribute-form').reset();
});

document.getElementById('flower-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const flowerType = document.getElementById('flower-type').value;
    const dedication = document.getElementById('dedication').value;
    const invoiceRequired = document.getElementById('invoice').checked;
    const recipientName = document.getElementById('recipient-name').value;
    const recipientAddress = document.getElementById('recipient-address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    
    let price = flowerType === 'type1' ? 1000 : 2000;
    if (invoiceRequired) {
        price *= 1.1;
    }

    const orderSummary = `
        花籃種類: ${flowerType === 'type1' ? '種類1 - $1000' : '種類2 - $2000'}\n
        總金額: $${price}\n
        落款名單: ${dedication}\n
        ${invoiceRequired ? '需要發票\n收件人姓名: ' + recipientName + '\n收件人地址: ' + recipientAddress : '不需要發票'}
    `;
    
    alert(orderSummary);

    document.getElementById('flower-form').reset();
});

document.getElementById('invoice').addEventListener('change', function() {
    document.getElementById('invoice-info').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('background-music').volume = 0.2;
