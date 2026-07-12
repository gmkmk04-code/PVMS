function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (u === "admin" && p === "12345") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").textContent = "Invalid Username or Password";
    }
}
