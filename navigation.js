document.addEventListener("DOMContentLoaded", function () {
    const navPlaceholder = document.createElement("div");
    navPlaceholder.id = "nav-placeholder";
    document.body.insertBefore(navPlaceholder, document.body.firstChild); // Insert at the top of the body
  
    // Load the navigation HTML
    fetch("nav.html")
      .then(response => response.text())
      .then(data => {
        navPlaceholder.innerHTML = data;
      })
      .catch(error => console.error("Error loading navigation:", error));
  });
  