// 👇 Step 1: Get the contact form using its ID
const contactForm = document.getElementById("contactForm");

// 👇 Step 2: Listen for the "submit" event
contactForm.addEventListener("submit", function(event) {

  // 👇 Stop page from refreshing
  event.preventDefault();

  // 👇 Get values from inputs
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // 👇 Check if any field is empty
  if (fullname === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  // 👇 Check if email is valid
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    alert("Invalid email address!");
    return;
  }

  // 👇 Show success alert
  alert("✅ Message sent successfully!");
});
