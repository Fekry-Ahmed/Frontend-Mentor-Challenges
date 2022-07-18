const adviceText = document.querySelector(".advice-text");
const number = document.querySelector(".number");
const dice = document.querySelector(".dice-button");

// Getting advice from API
const getAdvice = async function () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceText = data.slip.advice;
    const id = data.slip.id;

    return { adviceText, id };
};

// Render advice on screen
const renderAdvice = async function () {
    data = await getAdvice();
    const id = data.id;
    const advice = data.adviceText;

    number.textContent = id;
    adviceText.textContent = advice;
};

renderAdvice();
dice.addEventListener("click", renderAdvice);
