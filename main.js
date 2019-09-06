function validateform() {
	var Name = document.contact.Name.value;
	var x = document.contact.Email.value;
	var atposition = x.indexOf("@");
	var dotposition = x.lastIndexOf(".");
	var Title = document.contact.Title.value;
	var Message = document.contact.Message.value;


	if ( Name == null || Name == ""){
		alert("Name field is blank");
		return false;
	}
	else if ( Name.length < 4){
		alert("Name has to be at least 4 characters");
		return false;
	}

	if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length){
		alert("Email is not valid");
		return false;
	}

	if (Title == null || Title == ""){
		alert("Title field is empty");
		return false;
	}

	if (Message == null || Message == ""){
		alert("Message field is empty");
		return false;
	}

	else if (Message.length < 20){
		alert("Message cannot be less than 20 characters");
		return false;
	}
	
	



}