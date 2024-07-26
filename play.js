let correctCardIndex = Math.floor(Math.random() * 4);
let hintUsed = false;

function checkCard(card) {
    const cards = document.querySelectorAll('.card');
    const wrongImage = document.getElementById('wrong-image');

    if (Array.from(cards).indexOf(card) === correctCardIndex) {
        alert("Вітаю! Ви Вижили!");
    } else {
        wrongImage.classList.remove('hidden');
        setTimeout(() => {
            wrongImage.classList.add('hidden');
        }, 1500); // Зображення зникає через 1 секунду
    }
}

function useHint() {
    if (hintUsed) return;

    const cards = document.querySelectorAll('.card');
    let incorrectCardIndex;

    do {
        incorrectCardIndex = Math.floor(Math.random() * 4);
    } while (incorrectCardIndex === correctCardIndex);

    cards[incorrectCardIndex].style.backgroundColor = '#ff6666'; // Позначаємо неправильну карту червоним

    hintUsed = true;
    document.getElementById('hint-button').disabled = true;
}
