// JavaScript to add simple interactivity, such as rotating slogans or animations
const slogan = document.getElementById('slogan');

function changeSlogan() {
  slogan.classList.add('fade');
  setTimeout(() => {
    slogan.textContent = '"A confident smile is a powerful tool!"';
    slogan.classList.remove('fade');
  }, 3000);
}

// Change slogan text after 3 seconds on page load
setTimeout(changeSlogan, 3000);


  