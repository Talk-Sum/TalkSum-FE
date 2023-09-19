const pwShowHide = document.querySelectorAll(".eye-icon");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwField = eyeIcon.previousElementSibling;  // 아이콘의 바로 이전 sibling 요소를 가져옵니다.

        if (pwField.type === "password") {
            pwField.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
        } else {
            pwField.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        }
    });
});
    

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function redirectToLogin() {
    window.location.href = "Login.html";
}

function checkPasswords() {
    // 비밀번호 입력 필드의 값 가져오기
    var password = document.getElementById("password1").value;
    var confirmPassword = document.getElementById("password2").value;

    // 두 값이 동일한지 확인
    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    } else {
        alert("비밀번호가 일치합니다.");
        return true;
    }
}



        