let username = document.querySelector("#username");
let email = document.querySelector("#user_email");
let password = document.querySelector("#user_password");
let confirm_password = document.querySelector("#confirm_password");
let terms = document.querySelector("#check_terms");
let signup_btn = document.querySelector("#signup");


let getdata = localStorage.getItem("userdata");
let users = getdata ? JSON.parse(getdata) : [];
console.log(users)





signup_btn.addEventListener("click", function () {
  
  let existinguser = users.find(function(user){
    return user.username === username.value.trim()
  });
  
  if (
    username.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    confirm_password.value.trim() !== "" &&
    password.value === confirm_password.value && 
    terms.checked == true &&
    existinguser === undefined
  ) {
    
    let new_user = {
      id : crypto.randomUUID(),
      username : username.value,
      email : email.value,
      password : password.value
    }
    users.push(new_user);
    window.location.href="Login.html";
  }
  
  
  
  localStorage.setItem(
    "userdata",
    JSON.stringify(users)
  )
  
  username.value = "";
  email.value = "";
  password.value = "";
  confirm_password.value = "";
  terms.checked = false;
  
  

})