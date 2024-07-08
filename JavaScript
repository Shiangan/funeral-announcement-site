document.getElementById('obituary-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const style = document.getElementById('style').value;
    const music = document.getElementById('music').value;
    const wreath = document.getElementById('wreath').value;
    const message = document.getElementById('message').value;
    const blessing = document.getElementById('blessing').value;

    const data = {
        name: name,
        date: date,
        style: style,
        music: music,
        wreath: wreath,
        message: message,
        blessing: blessing
    };

    fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('訃聞已提交！');
            document.getElementById('obituary-form').reset();
            document.getElementById('music-source').src = 'music1.mp3'; // Reset to default music
            document.getElementById('background-music').load();
        } else {
            throw new Error('訃聞提交失敗');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('music').addEventListener('change', function() {
    const selectedMusic = document.getElementById('music').value;
    document.getElementById('music-source').src = selectedMusic;
    document.getElementById('background-music').load();
});

document.getElementById('memorial-wall-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const photo = document.getElementById('photo').files[0];

    const commentElement = document.createElement('div');
    commentElement.innerHTML = `<p><strong>${username}</strong>: ${comment}</p>`;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            commentElement.appendChild(img);
        }
        reader.readAsDataURL(photo);
    }

    document.getElementById('memorial-wall').appendChild(commentElement);
});
