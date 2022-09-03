function RetElement(ItClass) {
	ret=document.getElementsByClassName(ItClass)
	ret[0].style="visibility: ;";
	return ret[0]
}
let but=RetElement("collapsible__button")
let show =RetElement("collapsible__action collapsible__action--hidden")//показать содержимое
let hide=RetElement("collapsible__action collapsible__action--visible")//скрыть содержимое
let cont=RetElement("collapsible__content")

hide.style.visibility="visible"
cont.style.visibility="visible"
show.style.visibility="hidden"
console.log(but[but.length-1])
but.addEventListener('click', function(){
	if(show.style.visibility=="visible"){
		cont.style="visibility:visible;"
		show.style="visibility:hidden;"
		hide.style="visibility:visible;"
	}
	else{
		cont.style="visibility:hidden;"
		show.style="visibility:visible;"
		hide.style="visibility:hidden;"
	}
})