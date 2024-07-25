let correctCardIndex = Math.floor(Math.random() * 7);

function checkCard(card) {
    const cards = document.querySelectorAll('.card');
    const wrongImage = document.getElementById('wrong-image');

    if (Array.from(cards).indexOf(card) === correctCardIndex) {
        alert("Вітаю! Ви вижили!");
    } else {
        wrongImage.classList.remove('hidden');
        setTimeout(() => {
            wrongImage.classList.add('hidden');
        }, 1500); // Зображення зникає через 1 секунду
    }
}
