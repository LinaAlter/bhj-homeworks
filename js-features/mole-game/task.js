function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

function updateCounters() {
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

function checkGameStatus() {
    if (dead >= 10) {
        alert('Победа! Кроты не пройдут!');
        resetGame();
    } else if (lost >= 5) {
        alert('Поражение! Кроты победили!');
        resetGame();
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateCounters();
}   
    
for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            this.classList.remove('hole_has-mole');
        } else {
            lost++;
        }
        
        updateCounters();
        checkGameStatus();
    };
}


