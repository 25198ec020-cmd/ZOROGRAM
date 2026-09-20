let getdata = localStorage.getItem("userdata");

let users = getdata ? JSON.parse(getdata) : [];

let search_input = document.querySelector("#search");

search_input.addEventListener("input", function(){
 
 let search_text = search_input.value.trim().toLowerCase();
 
 
 let match_users = users.filter(function(user){
  return user.username.toLowerCase().includes(search_text);
 });
 
 
 console.log(match_users);
 
 let search_results = document.querySelector("#search_results");
 

 
 if(search_text === ""){
  search_results.innerHTML = "";
  return;
}

 
 search_results.innerHTML = "";
 
 if(match_users.length === 0){
  let message = document.createElement("h3");
  
  message.className = "message";

  message.textContent = "No users found";

  search_results.appendChild(message);

  return;
}
 
 match_users.forEach(function (user) {
  
  let result_box1 = document.createElement("div");
  result_box1.className = "users"
  
  let show = document.createElement("h3");
  
  show.textContent = "user";
  
  let result_box2 = document.createElement("div");
  result_box2.className = "user";
  
  let result_box3 = document.createElement("div");
  result_box3.className = "user_profile";
  
  let result_box4 = document.createElement("div");
  result_box4.className = "profile_pic";
  
  let result_box5 = document.createElement("div");
  
  let username = document.createElement("h4");
  username.textContent = user.username;
  
  let sub_name = document.createElement("pre");
  sub_name.textContent = "@" + user.username;
  
  let view_button = document.createElement("button");
  
  view_button.textContent = "View profile";
  
  view_button.dataset.id = user.id;
  
  view_button.addEventListener("click", function () {
   
   let selected_user_id = view_button.dataset.id;
   
   localStorage.setItem(
    "selectedUserId",
    selected_user_id
   );
   
   window.location.href="user_profile.html";
   
  });
  
  result_box5.appendChild(username);
  result_box5.appendChild(sub_name);
  
  result_box3.appendChild(result_box4);
  result_box3.appendChild(result_box5);
  
  result_box2.appendChild(result_box3);
  result_box2.appendChild(view_button);
  
  result_box1.appendChild(show);
  result_box1.appendChild(result_box2);
  
  search_results.appendChild(result_box1);
  
 })
 
 
 
});



