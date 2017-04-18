;
var countPlusMinus = function(JustInputSys){
	var form = document.querySelectorAll(JustInputSys);
	for (var i = form.length - 1; i >= 0; i--) {
		form[i].onclick = function(event){
			var inputHere = this.querySelector('input');
			if(event.target.getAttribute("data-key") == 'plus' && Number(inputHere.value) < 9999){
				inputHere.value = Number(inputHere.value)+1;
			}
			else if(event.target.getAttribute("data-key") == 'minus' && Number(inputHere.value) > 0){
				inputHere.value = Number(inputHere.value)-1;
			}
		}
		var inputHere = form[i].querySelector('input');
		inputHere.onchange = function(){
			if (Number(this.value)  < 0 ) {
				this.value = 0;
			}
			else if (Number(this.value)  > 999 ) {
				this.value = 999;
			}
			else if (Number(this.value) % 1 != 0) {
				this.value = 0;
			}
		}
	}
}
countPlusMinus('.plusMinus');
 $(function(){
  // datapicker 
  $("#datepicker").datepicker();
 });