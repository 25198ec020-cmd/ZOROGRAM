let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login_btn = document.querySelector("#login");

let getdata = localStorage.getItem("userdata");
let users = getdata ? JSON.parse(getdata) : [];

login_btn.addEventListener("click", function(){
  
  let existinguser = users.find(function(user){
    return user.username === username.value.trim();
  });
  
  if(username.value.trim() !== "" && password.value.trim() !== "")
  {
    
    if(username.value === existinguser.username)
    {
      if(password.value === existinguser.password)
      {
        localStorage.setItem(
          "currentUserId",
          existinguser.id
        );
        
        window.location.href="home.html";
      }
    }
    
  }
  
});

console.log(users)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });