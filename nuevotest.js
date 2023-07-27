const questionHeader = document.getElementById('questionHeader');
const responsesInput = document.getElementById('responses');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nextQuestionButton = document.getElementById('nextQuestionButton');
const submitButton = document.getElementById('submitButton');


const formContainer = document.querySelector('.contenedorChat');
const botonChat = document.getElementById('botonChat');



const questions = [
  { header: '1. Escribe tu nombre:', input: nameInput },
  { header: '2. Escribe tu correo:', input: emailInput },
  { header: '3. Escribe tu número telefónico:', input: phoneInput }
];
let currentQuestionIndex = 0;

botonChat.addEventListener('click', () => {
  formContainer.classList.toggle('hidden');
});


function showNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionHeader.innerText = questions[currentQuestionIndex].header;
    questionHeader.classList.add('show');
    nextQuestionButton.classList.add('show');
    responsesInput.classList.add('show');
    responsesInput.value = ''; // Limpiamos el campo de respuestas

    // Ocultar preguntas anteriores
    for (let i = 0; i < currentQuestionIndex; i++) {
      questions[i].input.classList.remove('show');
    }
  } else {
    questionHeader.innerText = '¡Gracias por responder las preguntas!';
    responsesInput.value = ''; // Limpiamos el campo de respuestas
    questionHeader.classList.add('show');
    responsesInput.classList.remove('show');
    nextQuestionButton.classList.remove('show');
    // submitButton.style.display = 'block';
    ;
    // Ocultar la última pregunta también
    questions[currentQuestionIndex - 1].input.classList.remove('show');
  }
}

function goToNextQuestion() {
  questions[currentQuestionIndex].input.value = responsesInput.value;
  console.log(`Question ${currentQuestionIndex + 1}: ${responsesInput.value}`); // Log the response
  currentQuestionIndex++;
  showNextQuestion();
}

nextQuestionButton.addEventListener('click', goToNextQuestion);

responsesInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita que el Enter genere una nueva línea en el campo de respuestas
    goToNextQuestion();
  }
});

showNextQuestion();
