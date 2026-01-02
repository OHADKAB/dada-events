// Change this to your studio inbox
const STUDIO_EMAIL = "contact@dadastudiony.com";

function buildMailto({ name, email, pkg, message }) {
  const subject = `Event inquiry: ${pkg}`;
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Package: ${pkg}`,
    "",
    "Message:",
    message,
    "",
    "Sent from events.dadastudiony.com"
  ];

  const body = bodyLines.join("\n");
  return `mailto:${encodeURIComponent(STUDIO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Choose buttons -> preselect package and scroll to form
  document.querySelectorAll(".card-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pkg = btn.getAttribute("data-package");
      const select = document.getElementById("package");
      if (select) select.value = pkg;

      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Form submit -> open email client with prefilled message
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pkg = document.getElementById("package").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !pkg || !message) {
      alert("Please fill in all fields.");
      return;
    }

    window.location.href = buildMailto({ name, email, pkg, message });
  });
});
