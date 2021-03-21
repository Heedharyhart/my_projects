// function validate() {
//   let username = document.getElementById("users");
//   let emailAdreess = document.getElementById("email");
//   let password = document.getElementById("password");

//   if (
//     username.value === "" ||
//     emailAdreess.value === "" ||
//     password.value === ""
//   ) {
//     alert("No blank values allowed");
//     return false;
//   } else {
//     true;
//   }
// }

function validate() {
  let username = document.getElementById("users");
  let emailAdreess = document.getElementById("email");
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm");

  if (username.value.trim() === "") {
    username.style.border = "solid 2px red";
    document.getElementById("uname").style.display = "Block";
    return false;
  } else if (emailAdreess.value.trim() === "") {
    emailAdreess.style.border = "solid 2px red";
    document.getElementById("mail").style.display = "Block";
    return false;
  } else if (password.value.trim() === "") {
    password.style.border = "solid 2px red";
    document.getElementById("passwrd").style.display = "Block";
    return false;
  } else if (password.value.trim().length < 5) {
    document.getElementById("pass").style.display = "Block";
    return false;
  } else if (confirm.value.trim() === "") {
    confirm.style.border = "solid 3px red";
    document.getElementById("conpass").style.display = "Block";
    return false;
  } else if (confirm.value.trim() === password.value.trim()) {
    document.getElementById("conpass").style.display = "Block";
    return false;
  } else {
    true;
  }
}

function showPassword() {
  let show = document.getElementById("password");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
