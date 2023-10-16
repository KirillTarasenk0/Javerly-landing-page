const generalContainer = document.getElementById('generalContainer');
const burgerMenuContainer = document.getElementById('burgerMenuContainer');
const openBurgerBtn = document.getElementById('openBurgerBtn');
const closeBurgerBtn = document.getElementById('closeBurgerBtn');

openBurgerBtn.addEventListener('click', function() {
    burgerMenuContainer.style.display = 'block';
    generalContainer.style.display = 'none';
});
closeBurgerBtn.addEventListener('click', function() {
    burgerMenuContainer.style.display = 'none';
    generalContainer.style.display = 'block';
});