const button = document.getElementByID('submitBtn');
button.addEventlistener('click', function() {
 let name = document.querySelector('#name').value;
 let email = document.querySelector('#email').value;
 if (name === "" || email == "") {
 alert("Please fill out all fields");
 } else {
 console.log("Form submitted successfully!");
 }
});
