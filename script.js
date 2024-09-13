let level = 1;
let correctAnswers = 0;

const questions = [
    // Nível 1 - Fácil
    { question: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Júpiter", "Saturno", "Marte"], answer: 2 },
    { question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Cecília Meireles"], answer: 1 },
    { question: "Qual é a capital da França?", options: ["Londres", "Paris", "Roma", "Madri"], answer: 2 },
    
    // Nível 2 - Médio
    { question: "Em que ano o homem pisou na Lua?", options: ["1969", "1959", "1975", "1980"], answer: 1 },
    { question: "Qual elemento tem o símbolo 'O' na tabela periódica?", options: ["Ouro", "Oxigênio", "Osmium", "Óxido"], answer: 2 },
    { question: "Quem pintou a Mona Lisa?", options: ["Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Rembrandt"], answer: 2 },
    
    // Nível 3 - Difícil
    { question: "Qual país tem a maior população do mundo?", options: ["Índia", "China", "Rússia", "Estados Unidos"], answer: 2 },
    { question: "Qual é o número atômico do hélio?", options: ["1", "2", "3", "4"], answer: 2 },
    { question: "Quem descobriu o Brasil?", options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Amerigo Vespucci"], answer: 2 },

    // Nível 4 - Muito Difícil
    { question: "Quem foi o primeiro homem a alcançar o Polo Sul?", options: ["Ernest Shackleton", "Roald Amundsen", "Robert Scott", "Edmund Hillary"], answer: 2 },
    { question: "Qual é a fórmula química da água?", options: ["CO2", "H2O", "O2", "C6H12O6"], answer: 2 },
    { question: "Quem ganhou o Prêmio Nobel de Física em 1921?", options: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Niels Bohr"], answer: 2 },

    // Nível 5 - Extremamente Difícil
    { question: "Qual é a raiz quadrada de 144?", options: ["10", "11", "12", "14"], answer: 3 },
    { question: "Qual é o idioma oficial do Egito?", options: ["Árabe", "Inglês", "Francês", "Egípcio Antigo"], answer: 1 },
    { question: "Quantos planetas existem no Sistema Solar?", options: ["7", "8", "9", "10"], answer: 2 }
];

function loadQuestion() {
    if (level <= questions.length) {
        const currentQuestion = questions[level - 1];
        document.getElementById('question-text').innerHTML = currentQuestion.question;
        document.getElementById('choices').innerHTML = currentQuestion.options.map((option, index) => 
            `<button onclick="makeChoice(${index + 1})">${option}</button>`
        ).join('');
        document.querySelector('h1').innerHTML = `Perguntados - Nível ${level}`;
        document.getElementById('result-text').innerHTML = '';
    } else {
        document.getElementById('question-text').innerHTML = `Parabéns! Você completou o quiz com ${correctAnswers} respostas corretas!`;
        document.getElementById('choices').innerHTML = `<button onclick="restartGame()">Recomeçar</button>`;
        document.querySelector('h1').innerHTML = `Fim do Quiz!`;
    }
}

function makeChoice(choice) {
    const currentQuestion = questions[level - 1];
    if (choice === currentQuestion.answer) {
        correctAnswers++;
        document.getElementById('result-text').innerHTML = 'Correto!';
    } else {
        document.getElementById('result-text').innerHTML = 'Errado!';
    }
    setTimeout(() => {
        level++;
        loadQuestion();
    }, 1000);
}

function restartGame() {
    level = 1;
    correctAnswers = 0;
    loadQuestion();
}

window.onload = loadQuestion;
