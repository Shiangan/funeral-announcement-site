document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('obituary-form');
    const funeralLocation = document.getElementById('funeral-location');
    const hall = document.getElementById('hall');

    funeralLocation.addEventListener('change', function() {
        const location = this.value;
        hall.disabled = !location;
        if (location) {
            hall.innerHTML = '';
            const halls = getHalls(location);
            halls.forEach(h => {
                const option = document.createElement('option');
                option.value = h;
                option.textContent = h;
                hall.appendChild(option);
            });
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const photoFile = formData.get('photo');

        if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                formData.append('photoUrl', e.target.result);
                submitForm(formData);
            };
            reader.readAsDataURL(photoFile);
        } else {
            submitForm(formData);
        }
    });

    function submitForm(formData) {
        const data = {
            deceasedName: formData.get('deceased-name'),
            gender: formData.get('gender'),
            birthDate: formData.get('birth-date'),
            deathDate: formData.get('death-date'),
            funeralDate: formData.get('funeral-date'),
            funeralLocation: formData.get('funeral-location'),
            hall: formData.get('hall'),
            textStyle: formData.get('text-style'),
            sendFlowerBasket: formData.get('send-flower-basket'),
            photoUrl: formData.get('photoUrl'),
            music: formData.get('music')
        };
        const params = new URLSearchParams(data).toString();
        window.location.href = `details.html?${params}`;
    }

    function getHalls(location) {
        const halls = {
            "第二殯儀館": ["至真1廳", "至真2廳", "至真3廳"],
            "新北板橋殯儀館": ["至善1廳", "至善2廳", "至善3廳"],
            "桃園殯儀館": ["桃園1廳", "桃園2廳", "桃園3廳"],
            "南榮殯儀館": ["基隆1廳", "基隆2廳", "基隆3廳"]
        };
        return halls[location] || [];
    }
});
