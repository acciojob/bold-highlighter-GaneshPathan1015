function highlight() {
    //Write your code 
	let elements = document.querySelectorAll("strong");
	elements.forEach((e)=>{
		e.style.color = "green";
	})


}


function return_normal() {
    //Write your code here
	let elements = document.querySelectorAll("strong");
	elements.forEach((e)=>{
		e.style.color = "black";
	})
    
}
