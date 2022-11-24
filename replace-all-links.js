var funnyTarget = 'https://www.example.com/';

document.querySelectorAll("a").forEach(element => {
	element.setAttribute('href', funnyTarget);
});
