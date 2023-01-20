let select = document.getElementById("select");
let list = document.getElementById("list");

let selected = document.getElementById("selected");
let listed = document.getElementById("listed");

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

select.onclick = function(){
	list.classList.toggle("open")
}

selected.onclick = function(){
	listed.classList.toggle("open")
}

toggleButton.onclick = function() {
	navbarLinks.classList.toggle('active')
}
