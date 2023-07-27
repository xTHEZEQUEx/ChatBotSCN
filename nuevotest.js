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
  { header: ' Escribe tu nombre 👤:', input: nameInput },
  { header: ' Escribe tu correo 📧:', input: emailInput },
  { header: ' Escribe tu número telefónico 📞:', input: phoneInput }
];
const respuestasUsuario = {
  name: '',
  email: '',
  phone: ''
}
let currentQuestionIndex = 0;

botonChat.addEventListener('click', () => {
  formContainer.classList.toggle('hidden');
});
function storeUserResponses() {
  const nameResponse = nameInput.value.trim();
  const emailResponse = emailInput.value.trim();
  const phoneResponse = phoneInput.value.trim();

  respuestasUsuario.name = nameResponse;
  respuestasUsuario.email = emailResponse;
  respuestasUsuario.phone = phoneResponse;

  console.log('Respuestas del usuario:', 'Nombre: ', respuestasUsuario.name, 'Correo: ', respuestasUsuario.email, 'Teléfono: ', respuestasUsuario.phone);
}

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
    questionHeader.innerText = 'Gracias, nos pondremos en contacto contigo.😊';
    responsesInput.value = ''; // Limpiamos el campo de respuestas
    questionHeader.classList.add('show');
    responsesInput.classList.remove('show');
    nextQuestionButton.classList.remove('show');
    // submitButton.style.display = 'block';
    ;
    // Ocultar la última pregunta también
    questions[currentQuestionIndex - 1].input.classList.remove('show');
    storeUserResponses()
  }
}


function goToNextQuestion() {
  const userResponse = responsesInput.value.trim();
  if(userResponse === ""){
    return;
  }
  if (currentQuestionIndex === 1 && !userResponse.includes('@')) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.className = 'preguntas';
    errorMessageElement.textContent = 'Por favor, ingrese una dirección de correo electrónico válida.';
    
    // Get the chat-box element
    const chatBox = document.getElementById('cajachat');
    const divUsuario = document.querySelector('.divUsuario');
    
    chatBox.insertBefore(errorMessageElement, divUsuario);
    responsesInput.value = ""; // Limpiar el campo de respuesta para que permanezca en la parte inferior
    return; // No se avanza a la siguiente pregunta si la dirección de correo no es válida
  }
  questions[currentQuestionIndex].input.value = userResponse;
  console.log(`Question ${currentQuestionIndex + 1}: ${userResponse}`); // Log the response

  // Create a new element to represent the user's message
  const userMessageElement = document.createElement('div');
  userMessageElement.className = 'mensajesUsuario';
  userMessageElement.textContent = userResponse;

  // Get the chat-box element
  const chatBox = document.getElementById('cajachat');
  const divUsuario = document.querySelector('.divUsuario')

  chatBox.insertBefore(userMessageElement, divUsuario);

  // Append the user's message to the chat-box
  // chatBox.appendChild(userMessageElement);

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
