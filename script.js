document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Placeholder for form submission logic
    // In a real application, you would send this data to a server

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById("contact-form").reset();
  });
