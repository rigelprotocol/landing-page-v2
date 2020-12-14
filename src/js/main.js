const intro = document.querySelector('.intro');
const body = document.getElementsByTagName('BODY')[0];

function init() {
  setTimeout(() => {
    intro.style.opacity = 0;
    intro.style.display = 'none';
    body.style.display = 'block';
    setTimeout(() =>  {
      body.style.opacity = 1;
    },50);
  }, 4000);
}

init();

if(document.querySelectorAll('.menu-container').length > 0) {
  const element = document.querySelector('.menu-container');
  document.getElementById('open-menu').addEventListener('click', function() {
    element.classList.add('open');
  })

  document.getElementById('close-menu').addEventListener('click', function() {
    element.classList.remove('open')
  })
}