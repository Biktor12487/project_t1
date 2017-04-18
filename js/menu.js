var menuShower = function(){
	var burger = document.getElementById("burgerMenu");
	burger.onclick = function(){
		if (burger.getAttribute("data-visaby") == "true") {
			var elLink = document.querySelectorAll(".navMenu a");
			for (var i = elLink.length - 1; i >= 0; i--) {
				document.querySelector(".navMenu nav").style.cssText = 'background-color: #fff';
				elLink[i].style.cssText = 'display: block';
				burger.setAttribute("data-visaby","false");
			}
		}
		else
		{
			if (burger.getAttribute("data-visaby") == "false") {
				var elLink = document.querySelectorAll(".navMenu a");
				for (var i = elLink.length - 1; i >= 0; i--) {
					document.querySelector(".navMenu nav").style.cssText = 'background-color: transparent';
					elLink[i].style.cssText = 'display: none';
					burger.setAttribute("data-visaby","true");
				}
			}
		}
	}
}();