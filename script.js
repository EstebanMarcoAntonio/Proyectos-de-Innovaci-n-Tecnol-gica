// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('photo');
    const previewImg = document.getElementById('preview');
    
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImg.src = e.target.result;
                previewImg.style.display = 'block'; // Mostrar la imagen
            };
            reader.readAsDataURL(file);
        } else {
            previewImg.style.display = 'none'; // Ocultar la imagen si no hay archivo
        }
    });
});
