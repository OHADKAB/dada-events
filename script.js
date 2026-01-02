document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pkg = document.getElementById("package").value;
  const message = document.getElementById("message").value;

  const subject = `Event Coverage Inquiry – ${pkg}`;
  const body =
    `Name: ${name}%0D%0A` +
    `Email: ${email}%0D%0A` +
    `Package: ${pkg}%0D%0A%0D%0A` +
    message;

  window.location.href =
    `mailto:studio@dadastudiony.com?subject=${subject}&body=${body}`;
});
