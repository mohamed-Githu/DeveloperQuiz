const correctAnswers = ['B', 'A', 'B', 'B', 'A'];
const quiz = document.querySelector('.quiz');
const quistions = document.querySelectorAll('.quistion');
const board = document.querySelector('.header__board');
const redo = document.querySelector('.redo');

redo.addEventListener('click', () => {
    location.reload(true);
    scrollTo(0,0);
});

quiz.addEventListener('submit', e => {

    e.preventDefault();
    let score = 0;
    const userAnswers = [quiz.q1.value, quiz.q2.value, quiz.q3.value, quiz.q4.value, quiz.q5.value];

    correctAnswers.forEach((answer, index) => {
        if (answer === userAnswers[index]) {
            score += 20;
            quistions[index].style.backgroundColor = 'rgba(0, 0, 0, 0.507)';
        } else {
            quistions[index].style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
        }
    })

    const result = document.querySelector('.header__score');
    let temp = 0;

    scrollTo(0,0);
    board.style.opacity = '1';

    const timer = setInterval(() => {
        if (temp >= score) {
            clearInterval(timer);
        } else {
            temp++;
        }
        result.textContent = `${temp}%`;
    }, 20);
});