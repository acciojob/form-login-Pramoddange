function getFormvalue() {
    //Write your code here
	let from=document.getElementById('form1');
	from.addEventListener("submit",(event)=>{
		event.preventDefault();
		let firstName=document.getElementByTag('input')[0].value;
		let LastName=document.getElementByTag('input')[1].value;
		alert(firstName+" "+LastName);
	})

}
