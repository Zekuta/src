//SUBMENU INTERFACE
document.addEventListener('DOMContentLoaded', function () {
    let lastClickedButtonId = null;
  
    // Add click event listeners to the buttons
    document.getElementById('btnUSER').addEventListener('click', toggleSubMenu);
    document.getElementById('btnMENU').addEventListener('click', toggleSubMenu);
  
    function toggleSubMenu(event) {
      const currentButtonId = event.currentTarget.id;
      const submenuId = 'submenu' + currentButtonId.slice(3);
      const submenu = document.getElementById(submenuId);
  
      if (lastClickedButtonId === currentButtonId) {
        // If clicking on the same button, toggle the visibility
        submenu.classList.toggle('visible');
      } else {
        // If clicking on a different button, hide the previous submenu and show the current one
        if (lastClickedButtonId) {
          const lastSubmenuId = 'submenu' + lastClickedButtonId.slice(3);
          const lastSubmenu = document.getElementById(lastSubmenuId);
          lastSubmenu.classList.remove('visible');
        }
        submenu.classList.add('visible');
      }
  
      lastClickedButtonId = currentButtonId;
    }
  });


//SUBMENU MENU
function showSubmenu() {
    var submenu = document.getElementById('categoriasSubmenu');
    submenu.style.display = 'block';
}

function hideSubmenu() {
    var submenu = document.getElementById('categoriasSubmenu');
    submenu.style.display = 'none';
}

// Add an event listener to cancel the timer if the mouse leaves the submenu
document.getElementById('categoriasSubmenu').addEventListener('mouseleave', function () {
    hideSubmenu();
});


// DAYS TO PROCESO
function calcDaysToProceso() {
    // Define the target date (30/11/2024)
    var targetDate = new Date("2024-11-30T12:00:00");

    // Get the current date and set the time to noon
    var currentDate = new Date();
    currentDate.setHours(12, 0, 0, 0);

    // Log current and target dates to the console
    console.log("Current Date:", currentDate);
    console.log("Target Date:", targetDate);

    // Calculate the time difference between the two dates in milliseconds
    var difference = targetDate - currentDate;

    // Calculate the number of days remaining by dividing the time difference by the number of milliseconds in a day
    var daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Get a reference to the <div> element where the result will be displayed
    var resultDiv = document.querySelector(".daysToProceso");

    // Display the result in the <div>
    resultDiv.innerHTML = "Faltan <span class='daysToProcesoColor'>" + daysRemaining + "</span> días para el próximo proceso selectivo.";
}

// Call the function immediately
calcDaysToProceso();


// DEPOIMENTOS

var comentarios = [
  { imagen: 'images/usuarios/user-icon-1.png', nombre: 'Zekuta', texto: '¡Excelente noticia sobre los cursos de "Análisis y Desarrollo en Sistemas"! Estoy emocionado por la amplitud y profundidad que estos cursos ofrecen. La combinación de teoría sólida y aplicaciones prácticas realmente destaca, preparándonos de manera integral para los desafíos del mundo real en el desarrollo de sistemas. ¡Agradecido por formar parte de este programa educativo innovador y orientado al futuro!' },
  { imagen: 'images/usuarios/user-icon-2.png', nombre: 'Zekken', texto: 'Os cursos de "Análise e Desenvolvimento de Sistemas" realmente superaram minhas expectativas. A estrutura do currículo e a qualidade dos professores demonstram um compromisso genuíno com nosso aprendizado. Adoro como cada disciplina está diretamente relacionada às demandas atuais do campo, proporcionando-nos uma visão prática e atualizada. Sinto que estou adquirindo habilidades essenciais para me destacar no mundo da tecnologia!' },
  { imagen: 'images/usuarios/user-icon-3.png', nombre: 'Diagon1', texto: 'Quiero destacar la relevancia de los proyectos prácticos en los cursos de "Análisis y Desarrollo en Sistemas". La oportunidad de aplicar lo aprendido en proyectos del mundo real ha sido invaluable. Además, el enfoque en las últimas tendencias tecnológicas y metodologías ágiles realmente prepara a los estudiantes para la industria. ¡Gracias por ofrecer una experiencia educativa tan completa y aplicada!' },
  { imagen: 'images/usuarios/user-icon-4.png', nombre: 'Zeku', texto: 'A comunidade em torno dos cursos de "Análise e Desenvolvimento de Sistemas" é incrível. A troca constante de ideias e a colaboração entre estudantes e professores enriqueceram minha experiência educacional. A atmosfera de apoio e motivação torna a aprendizagem ainda mais empolgante. Realmente sinto que estou no lugar certo para cultivar minha paixão pelo desenvolvimento de sistemas!' },
  { imagen: 'images/usuarios/user-icon-5.png', nombre: 'ZekkenUta', texto: 'Los cursos de "Análisis y Desarrollo en Sistemas" han marcado la diferencia en mi enfoque hacia la resolución de problemas y el desarrollo de software. La combinación de teoría sólida y práctica intensiva ha fortalecido mi confianza en mis habilidades. Estoy emocionado por el camino que estoy recorriendo y agradecido por el excepcional respaldo que recibimos de los profesores y el personal. ¡Definitivamente, recomendaría estos cursos a cualquier apasionado por la tecnología!' }
];

function cambiarComentario(index) {
  document.getElementById('comments-profile').src = comentarios[index].imagen;
  document.getElementById('nombre').innerHTML = comentarios[index].nombre;
  document.getElementById('texto').innerHTML = comentarios[index].texto;

  var circles = document.getElementsByClassName('circle');
  for (var i = 0; i < circles.length; i++) {
      circles[i].classList.remove('active');
  }
  circles[index].classList.add('active');
}