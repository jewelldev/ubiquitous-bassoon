document.getElementById("helloBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  alert(name ? `Hello, ${name}` : "Hello");
});
