// 假設這裡是從後端動態獲取的訂單數據
const orders = [
    { id: 1, name: '張三', date: '2024-07-15', status: '已完成' },
    { id: 2, name: '李四', date: '2024-07-16', status: '處理中' }
];

// 生成訂單列表
const orderList = document.getElementById('order-list');

orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.date}</td>
        <td>${order.status}</td>
    `;
    orderList.appendChild(row);
});
