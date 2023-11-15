document.querySelector('.openMenu').addEventListener('click', () => {
    document.querySelector('.mainMenu').classList.add('active');
});

document.querySelector('.closeMenu').addEventListener('click', () => {
    document.querySelector('.mainMenu').classList.remove('active');
});