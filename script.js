
// STUDENT REGISTRATION FORM

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const studentId = document.getElementById("studentId").value;

    if (name.trim() === "" ||
        email.trim() === "" ||
        studentId.trim() === "") {

        message.textContent = "Please complete all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful! Welcome, " + name + "!";
    message.style.color = "green";

    form.reset();
});
