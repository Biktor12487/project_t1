;
var showerFaq = function(){
	var elText = document.getElementsByClassName("textAskCard");
	var arrHeightText = [];
	for (var i = elText.length - 1; i >= 0; i--) {
		elText[i].setAttribute("data-height",getComputedStyle(elText[i]).height)
		elText[i].style.height = "0px";
	}
	var elCard = document.getElementsByClassName("askCards");
	for (var i = elCard.length - 1; i >= 0; i--) {
			elCard[i].onclick = function(){
				for (var z = elCard.length - 1; z >= 0; z--) {
					if (elCard[z].getAttribute("data-show") != null) {
						elCard[z].querySelector(".textAskCard").style.height = "0px";
						elCard[z].removeAttribute("data-show");
					}
				}
				this.setAttribute("data-show","");
				var el = this.querySelector(".textAskCard");
				el.style.height = el.getAttribute("data-height");
			}
	}
}
showerFaq();