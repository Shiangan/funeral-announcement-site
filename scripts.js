document.addEventListener('DOMContentLoaded', function() {
    // 模拟从URL参数中获取数据并填充页面
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('deceased_name').textContent = urlParams.get('deceased_name');
    document.getElementById('birthdate').textContent = urlParams.get('birthdate');
    document.getElementById('deathdate').textContent = urlParams.get('deathdate');
    document.getElementById('age').textContent = urlParams.get('age');
    document.getElementById('story').textContent = urlParams.get('story');
    document.getElementById('ceremony_address').textContent = urlParams.get('ceremony_address');
    document.getElementById('funeral_date').textContent = urlParams.get('funeral_date');
    document.getElementById('funeral_time').textContent = urlParams.get('funeral_time');
    
    // 初始化地图
    function initMap() {
        var address = urlParams.get('ceremony_address');
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status === 'OK') {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: results[0].geometry.location
                });
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    initMap();
    
    // 处理留言表单提交
    document.getElementById('tribute-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        // 在这里处理表单数据
        var name = formData.get('tribute_name');
        var message = formData.get('tribute_message');
        
        var tributesDiv = document.getElementById('tribute-list');
        var p = document.createElement('p');
        p.innerHTML = '<strong>' + name + '</strong>: ' + message;
        tributesDiv.appendChild(p);
    });

    // 处理照片上传
    document.getElementById('photo-upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        // 在这里处理照片上传
        var file = formData.get('photo_upload');
        
        var photosDiv = document.getElementById('photo-gallery');
        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = '追思照片';
        photosDiv.appendChild(img);
    });
});
