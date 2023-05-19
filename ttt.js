const cases = [...document.getElementsByClassName("square")];
let player = document.getElementById("player");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let draws = document.getElementById("draws");
let alertCheckbox = document.getElementById("alertBox");
let alertText = document.getElementById("alertText");
let checkbox = document.getElementById("checkbox");

// store state of players
let state = {
    playerTurn: 1,
    scorePlayer1: 0,
    scorePlayer2: 0,
    draws: 0,
    it1: 0,
    it2: 0,
    it3: 0,
    it4: 0,
    it5: 0,
    it6: 0,
    it7: 0,
    it8: 0,
    it9: 0,
};

//reset states
const resetState = () => {
    playerTurn = 1;
    state.it1 = 0;
    state.it2 = 0;
    state.it3 = 0;
    state.it4 = 0;
    state.it5 = 0;
    state.it6 = 0;
    state.it7 = 0;
    state.it8 = 0;
    state.it9 = 0;
};

const checkVictory = () => {
    if (
        (state.it1 === state.it2 && state.it2 === state.it3 && state.it1 > 0) ||
        (state.it1 === state.it4 && state.it4 === state.it7 && state.it1 > 0) ||
        (state.it1 === state.it5 && state.it5 === state.it9 && state.it1 > 0) ||
        (state.it3 === state.it5 && state.it5 === state.it7 && state.it7 > 0) ||
        (state.it2 === state.it5 && state.it5 === state.it8 && state.it2 > 0) ||
        (state.it3 === state.it6 && state.it6 === state.it9 && state.it3 > 0) ||
        (state.it4 === state.it5 && state.it5 === state.it6 && state.it4 > 0) ||
        (state.it7 === state.it8 && state.it8 === state.it9 && state.it7 > 0)
    ) {
        return true;
    } else if (
        state.it1 !== 0 &&
        state.it2 !== 0 &&
        state.it3 !== 0 &&
        state.it4 !== 0 &&
        state.it5 !== 0 &&
        state.it6 !== 0 &&
        state.it7 !== 0 &&
        state.it8 !== 0 &&
        state.it9 !== 0
    ) {
        return null;
    } else {
        return false;
    }
};

const playerSquare = (e) => {
    let idCase = e.target.id;

    if (state[idCase] !== 0) return;

    state[idCase] = state.playerTurn;
    let isVictory = checkVictory();

    if (isVictory === true) {
        alertCheckbox.style.display = "block";

        if (state.playerTurn === 1) {
            alertText.textContent = "The winner is Player 1"
            state.scorePlayer1++;
            player1.textContent = state.scorePlayer1;
        } else {
            alertText.textContent = "The winner is Player 2"
            state.scorePlayer2++;
            player2.textContent = state.scorePlayer2;
        }

        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if (isVictory === null) {
        alertCheckbox.style.display = "block";
        alertText.textContent = "Draw match!"

        state.draws++;
        draws.textContent = state.draws;
        player.textContent = "1";
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    }
    else if (isVictory === false) {
        if (state.playerTurn === 1) {
            state.playerTurn = 2;
            e.target.textContent = "X";
            e.target.style.color = "cadetblue"
            player.textContent = "2";
        } else {
            state.playerTurn = 1;
            e.target.textContent = "O";
            e.target.style.color = "chocolate"
            player.textContent = "1";
        }
    }
};

const alertCheckBoxClick = (e) => {
    alertCheckbox.style.display = "none";
}

cases.forEach((el) => {
    el.addEventListener("click", playerSquare);
});

checkbox.addEventListener("click", alertCheckBoxClick);