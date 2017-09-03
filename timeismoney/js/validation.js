function validateMessage(textarea) {
	   if (textarea.value.length < 2) {
		  textarea.setCustomValidity("Message must be longer, than 2 symbols");   
	   }
	   else {
		  textarea.setCustomValidity("");
	   }
}