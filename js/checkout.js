
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");    

	// regexp
	var regexLETTER = /^[a-zA-Z]+$/;
	var regexMIX = /^[a-zA-Z0-9]+$/;
	let regexpEMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	let regexpNUM = /^09[0-9]{7}$/;
	
	// Validate fields entered by the user: name, phone, password, and email
	
	//Validación campo del nombre
	if(!regexLETTER.test(fName.value)){
		error++;
		fName.classList.add('is-invalid');
		errorName.textContent = "This field is required and must have at least 3 characters";	
	} else {
		fName.classList.remove('is-invalid');
	}
	
	//Validación campo del Email
	if(!regexpEMAIL.test(fEmail.value)){
		error++;
		fEmail.classList.add('is-invalid');
		errorEmail.textContent = "This field is required and must contain an '@' and have at least 3 characters";
	} else {
		fEmail.classList.remove('is-invalid');
		errorEmail.textContent = "";
	}

	//Validación campo Address
	if (fAddress.value.trim().length < 3){
		error++;
		fAddress.classList.add('is-invalid');
		errorAddress.textContent = "This field is required and must have at least 3 characters";
	} else {
		fAddress.classList.remove('is-invalid');
		errorAddress.textContent = "";
	}

	//Validación campo apellido
	if(!regexLETTER.test(fLastN.value)){
		error++;
		fLastN.classList.add('is-invalid');
		errorLastN.textContent = "This field is required and must have at least 3 characters";	
	} else {
		fLastN.classList.remove('is-invalid');
	}
	 
	//Validación campo password
	if(!regexMIX.test(fPassword.value)){
		error++;
		fPassword.classList.add('is-invalid');
		errorPassword.textContent = "Enter a correct password";
	} else {
		fPassword.classList.remove('is-invalid');
	}

	//Validación campo telf
	if(!regexpNUM.test(fPhone.value)){
		error++;
		fPhone.classList.add('is-invalid');
		errorPhone.textContent = "Invalid phone number!! Must be 9 digits with no letters";
	} else {
		fPhone.classList.remove('is-invalid');
	}

	if(error > 0){
		alert("Error");
	}else{
		alert("OK");
	}

}
