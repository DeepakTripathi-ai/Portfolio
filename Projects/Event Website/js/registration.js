// 👇 Step 1: Get the form using its ID
const form = document.getElementById("registrationForm");

// 👇 Step 2: Listen for the form "submit" event
form.addEventListener("submit", function(event) {

  // 👇 Stop the form from submitting (reloading the page)
  event.preventDefault();

  // 👇 Get the values entered in the inputs
  const name = document.getElementById("name").value.trim();     // remove extra spaces
  const email = document.getElementById("email").value.trim();
  const college = document.getElementById("college").value.trim();

  // 👇 Check if any field is empty
  if (name === "" || email === "" || college === "") {
    alert("Please fill all fields!");  // show alert if empty
    return; // stop the function
  }

 // 👇 Check if email is valid
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//  Code Part	        Meaning (in very simple words)
//      ^	                Start of the string
//      [^ ]+	            At least one character (not a space) — मतलब: username
//      @	                "@" symbol (must be present in email)
//      [^ ]+	            At least one character after "@" (domain name)
//      \.	                Dot (.) symbol — जैसे .com
//      [a-z]{2,3}	        2 या 3 small letters — जैसे com, in, org
//      $	                End of the string



if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  // 👇 If all checks pass, show success message
  alert("🎉 Registration successful!");
});

