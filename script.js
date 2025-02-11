document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const exitCorrect = document.getElementById('exit-correct');
    const exitWrong = document.getElementById('exit-wrong');
    const mazeContainer = document.getElementById('maze-container');

    let posX = 0;
    let posY = 0;

    document.addEventListener('keydown', (event) => {
        const step = 40;
        switch(event.key) {
            case 'ArrowUp':
                posY = Math.max(posY - step, 0);
                break;
            case 'ArrowDown':
                posY = Math.min(posY + step, mazeContainer.clientHeight - 40);
                break;
            case 'ArrowLeft':
                posX = Math.max(posX - step, 0);
                break;
            case 'ArrowRight':
                posX = Math.min(posX + step, mazeContainer.clientWidth - 40);
                break;
        }
        character.style.top = `${posY}px`;
        character.style.left = `${posX}px`;

        checkExit();
    });

    function checkExit() {
        const characterRect = character.getBoundingClientRect();
        const correctRect = exitCorrect.getBoundingClientRect();
        const wrongRect = exitWrong.getBoundingClientRect();

        if (characterRect.left < correctRect.right && characterRect.right > correctRect.left &&
            characterRect.top < correctRect.bottom && characterRect.bottom > correctRect.top) {
            alert('You found the love! ❤️');
            resetGame();
        } else if (characterRect.left < wrongRect.right && characterRect.right > wrongRect.left &&
                   characterRect.top < wrongRect.bottom && characterRect.bottom > wrongRect.top) {
            alert('Oh no! Broken heart! 💔');
            resetGame();
        }
    }

    function resetGame() {
        posX = 0;
        posY = 0;
        character.style.top = `${posY}px`;
        character.style.left = `${posX}px`;
    }
});