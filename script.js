//responsive navbar
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

//Typing animation
function typeEffect(element, text, delay, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else if (callback) {
      setTimeout(callback, delay); // Call the callback function after finishing typing
    }
  }
  typing();
}

function startTypingEffect() {
  const firstNameElement = document.getElementById('firstName');
  const lastNameElement = document.getElementById('lastName');

  firstNameElement.innerHTML = '';
  lastNameElement.innerHTML = '';

  typeEffect(firstNameElement, 'Iyus', 200, () => {
    typeEffect(lastNameElement, 'Rustandi', 200, () => {
      setTimeout(startTypingEffect, 2000); // Restart the typing effect after a delay
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  startTypingEffect();
});

//about me active tab
function opentab(tabName) {
  var tabContents = document.getElementsByClassName('tab-contents');

  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.add('hidden');
    tabContents[i].classList.remove('block');
  }

  document.getElementById(tabName).classList.remove('hidden');
  document.getElementById(tabName).classList.add('block');

  var tabLinks = document.getElementsByClassName('tab-links');
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove('active-link');
  }
  event.currentTarget.classList.add('active-link');
}

//Dark mode
if (localStorage.getItem('darkmode') === 'enabled') {
  document.documentElement.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  function enableDarkMode() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkmode', 'enabled');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
  }

  function disableDarkMode() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkmode', 'disabled');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  }

  if (localStorage.getItem('darkmode') === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  themeToggleBtn.addEventListener('click', () => {
    if (localStorage.getItem('darkmode') !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

//contact form google https://beproblemsolver.com/html-form-to-google-sheet/#google_vignette
window.addEventListener('load', function () {
  const form = document.getElementById('my-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        alert('Message sent successfully');
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
