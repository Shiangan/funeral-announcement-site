// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {

    // 初始化 Google Maps
    if (document.getElementById('map')) {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 25.0330, lng: 121.5654 }, // 默认位置
            zoom: 15
        });

        const geocoder = new google.maps.Geocoder();
        const address = document.getElementById('ceremony_address') ? document.getElementById('ceremony_address').value : '';
        if (address) {
            geocoder.geocode({ 'address': address }, function(results, status) {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    }

    // 提交公告表单
    const announcementForm = document.getElementById('announcement-form');
    if (announcementForm) {
        announcementForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(announcementForm);
            fetch('/submit-announcement', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = "/announcement/" + data.announcement_id;
                } else {
                    console.error('公告提交失败:', data.message);
                }
            })
            .catch(error => console.error('提交失败:', error));
        });
    }

    // 提交追思留言表单
    const tributeForm = document.getElementById('tribute-form');
    if (tributeForm) {
        tributeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(tributeForm);
            fetch('/leave-tribute', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const tributesDiv = document.getElementById('tributes');
                    const p = document.createElement('p');
                    p.innerHTML = `<strong>${data.name}</strong>: ${data.message}`;
                    tributesDiv.appendChild(p);
                } else {
                    console.error('留言提交失败:', data.message);
                }
            })
            .catch(error => console.error('提交失败:', error));
        });
    }

    // 提交照片上传表单
    const photoUploadForm = document.getElementById('photo-upload-form');
    if (photoUploadForm) {
        photoUploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(photoUploadForm);
            fetch('/upload-photo', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const photosDiv = document.getElementById('photos');
                    const img = document.createElement('img');
                    img.src = data.filename;
                    img.alt = '追思照片';
                    img.style.width = '100px';
                    img.style.height = '100px';
                    photosDiv.appendChild(img);
                } else {
                    console.error('照片上传失败:', data.message);
                }
            })
            .catch(error => console.error('上传失败:', error));
        });
    }

    // 提交联系表单
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            fetch('/contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('感谢您的留言，我们会尽快与您联系。');
                    contactForm.reset();
                } else {
                    console.error('留言提交失败:', data.message);
                }
            })
            .catch(error => console.error('提交失败:', error));
        });
    }

});
