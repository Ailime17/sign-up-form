let pwd = document.querySelector("#pwd")
let confirm_pwd = document.querySelector("#confirm-pwd")
let pwd_error_text = document.querySelector("#error-pwd-message")

confirm_pwd.addEventListener("input", () => {
  if (!(pwd.value === confirm_pwd.value)) {
    pwd.classList.add("error");
    confirm_pwd.classList.add("error");
    confirm_pwd.setCustomValidity("Password confirmation doesn't match the password");
    pwd_error_text.textContent = "* Passwords don't match";
  } else {
    pwd.classList.remove("error");
    confirm_pwd.classList.remove("error");
    confirm_pwd.setCustomValidity("");
    pwd_error_text.textContent = "";
  }
});

pwd.addEventListener("input", () => {
  if (!(pwd.value === confirm_pwd.value)) {
    pwd.classList.add("error");
    confirm_pwd.classList.add("error");
    confirm_pwd.setCustomValidity("Password confirmation doesn't match the password");
    pwd_error_text.textContent = "* Passwords don't match";
  } else {
    pwd.classList.remove("error");
    confirm_pwd.classList.remove("error");
    confirm_pwd.setCustomValidity("");
    pwd_error_text.textContent = "";
  }
});


