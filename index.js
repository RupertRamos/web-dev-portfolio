const email = document.querySelector("#email");
const formSubmit = document.querySelector("#form-submit");

formSubmit.addEventListener("click", function() {

	alert("Thank you for sending me an email. I will reach out to you at your email of " + email.value + " regarding your concern. Have a great day!");

})