
$('#svg_1').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_2').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_3').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_4').on('click', function(){
	$(this).toggleClass('filled');
});







const button = document.querySelector('.button-catalog')
const menu = document.querySelector('.menu-burger')
const menuLinks = document.querySelectorAll('.menu-burger-link')

button.addEventListener('click', (e) => {
  button.classList.toggle('active')

  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
    menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
  }
});
