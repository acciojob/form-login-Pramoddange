function getFormvalue() {
    //Write your code here
	let submit=document.getElementByTag('input')[2];
	submit.addEventListener("click",()=>{
		let firstName=document.getElementByTag('input')[0].value;
		let LastName=document.getElementByTag('input')[1].value;
		alert(firstName+" "+LastName);
	})

}
