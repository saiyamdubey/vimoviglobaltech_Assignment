document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submitBtn");
  button.addEventListener("click", function () {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    if (name === "" || email === "") {
      alert("Please fill out all fields");
    } else {
      alert("Form submitted successfully!");
      console.log("Form submitted successfully!");
    }
  });
});
