document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let valid = true;

    if (name === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }

    if (email === "") {
      emailError.textContent = "Please enter your email.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      valid = false;
    }

    if (message.length < 10) {
      messageError.textContent = "Message should be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "Form submitted successfully!";
      form.reset();
    }
  });
});