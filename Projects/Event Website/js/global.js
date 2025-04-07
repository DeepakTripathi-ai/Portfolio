function toggleMenu() {
    const navbarLinks = document.querySelector(".navbar-links");
    navbarLinks.classList.toggle("show");
}


// ⬆️ Scroll to top function
function scrollToTop() {
    window.scrollTo({
      top: 0,               // Scroll page to top (0 means very top)
      behavior: 'smooth'    // Scroll should be smooth, not instant jump
    });
  }


  // for searchbar

// js/main.js

function searchEvent() {
  const input = document.getElementById("searchBox").value.toLowerCase();

  if (input.includes("ai") || input.includes("workshop")) {
    window.location.href = "schedule.html";
  } else if (input.includes("speaker") || input.includes("guest")) {
    window.location.href = "speakers.html";
  } else if (input.includes("register")) {
    window.location.href = "registration.html";
  } else {
    alert("No matching event found. Try searching with keywords like 'AI', 'Speaker', or 'Register'.");
  }
}
