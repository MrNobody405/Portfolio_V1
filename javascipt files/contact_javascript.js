function contact(input) {
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		
		if (input.value.match(validRegex)) {
			alert("Thank you for leaving a message, email will be used to contact you soon!")
			document.form1.text1.focus();
			return true;
		} else {
			alert("Invalid email address!");
			document.form1.text1.focus();
			return false;
		}
		
		if(!alert("Invalid email address!") || !alert("Thank you for leaving a message, email will be used to contact you soon!")){window.location.reload();}
	}
