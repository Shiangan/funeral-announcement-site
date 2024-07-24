document.addEventListener('DOMContentLoaded', function() {
    initMap();

    document.getElementById('announcement-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        fetch('/submit-announcement', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = "/announcement/" + data.announcement_id;
            }
        });
    });

    document.getElementById('tribute-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        fetch('/leave-tribute', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                var tributeList = document.getElementById('tribute-list');
                var p = document.createElement('p');
                p.innerHTML = `<strong>${data.name}</strong>: ${data.message}`;
                tributeList.appendChild(p);
            }
        });
    });

    document.getElementById('photo-upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        fetch('/upload-photo', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                var photoGallery = document.getElementById('photo-gallery');
                var img = document.createElement('img');
                img.src = data.filename;
                img.alt = '追思照片';
                photoGallery.appendChild(img);
            }
        });
    });

    document.getElementById('flower-order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
                fetch('/order-flowers', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                var orderSummary = document.getElementById('order-summary');
                orderSummary.innerHTML = `
                    <h3>订单确认</h3>
                    <p>花篮类型: ${data.flower_type}</p>
                    <p>数量: ${data.quantity}</p>
                    <p>发票: ${data.invoice ? '需要' : '不需要'}</p>
                    <p>总金额: ${data.total_amount}</p>
                    <p>支付方式: ${data.payment_method}</p>
                `;
                // Redirect to payment instructions or thank you page if needed
                window.location.href = "/payment-instructions";
            }
        });
    });

    function initMap() {
        // Example map initialization
        var mapOptions = {
            center: new google.maps.LatLng(25.037, 121.563),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Example marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.037, 121.563),
            map: map,
            title: '公奠地点'
        });
    }
});
