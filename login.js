document.addEventListener("DOMContentLoaded", () => {
    // عند الضغط على زر تسجيل الدخول
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Login functionality is under development!");
    });

    // التعامل مع أزرار تسجيل الدخول الاجتماعي
    const socialButtons = document.querySelectorAll(".social-buttons button");

    socialButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const platform = button.textContent.trim().split(" ")[2];
            alert(`You selected to continue with ${platform}!`);
        });
    });
});
