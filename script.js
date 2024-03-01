function submitForm() {
  let username = document.getElementById("usernameInput").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      // Store user information in localStorage to pass it to profile.html
      localStorage.setItem("userData", JSON.stringify(data));

      // Redirect to profile.html
      window.location.href = "profile.html";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("User not found! Please enter a valid GitHub username.");
    });
}
