let user_id = localStorage.getItem("currentUserId");

let getdata = localStorage.getItem("userdata");
let users = getdata ? JSON.parse(getdata) : [];

let getpost = localStorage.getItem("posts");
let posts = getpost ? JSON.parse(getpost) : [];




let current_user = users.find(function(user){
  return user.id === user_id;
  
});

let username = document.querySelector("#username");
username.textContent = current_user.username;

let handle = document.querySelector("#handle");
handle.textContent = "@" + current_user.username;

let user_posts = posts.filter(function(post){
  return post.userId === current_user.id;
});

let post_count = document.querySelector("#post_count");
post_count.textContent = user_posts.length;

let userposts = document.querySelector("#user_posts");



user_posts.forEach(function(post){
  
  let post_box0 = document.createElement("div");
  post_box0.className = "full_page3";
  
  let post_box1 = document.createElement("div");
  post_box1.className = "post_profile";
  
  let post_box2 = document.createElement("div");
  post_box2.className = "post_profile_pic";
  
  let post_box3 = document.createElement("div");
  
  let user_name = document.createElement("h3");
  user_name.textContent = current_user.username;
  
  let content_time = document.createElement("pre")
  
  
  let post_box4 = document.createElement("div");
  post_box4.className = "post_content";
  
  let content = document.createElement("h4");
  content.textContent = post.content;
  
  
  let post_box5 = document.createElement("div");
  post_box5.className = "hastages";
  
  let hastages = document.createElement("pre");
  
  let post_box6 = document.createElement("div");
  post_box6.className = "buttons";
  
  let post_box7 = document.createElement("div");
  post_box7.className = "button";
  
  let button1 = document.createElement("button");
  button1.textContent = "❤️";
  
  let button2 = document.createElement("button");
  button2.textContent = "💬";
  
  let button3 = document.createElement("button");
  button3.textContent = "...";
  
  post_box1.appendChild(post_box2);
  
  post_box3.appendChild(user_name);
  post_box3.appendChild(content_time);
  
  post_box1.appendChild(post_box3);
  
  
  
  post_box4.appendChild(content);
  post_box4.appendChild(post_box5);
  
  post_box7.appendChild(button1);
  post_box7.appendChild(button2);
  
  post_box6.appendChild(post_box7);
  post_box6.appendChild(button3);
  
  
  post_box0.appendChild(post_box1);
  post_box0.appendChild(post_box4);
  post_box0.appendChild(post_box6);
  
  userposts.appendChild(post_box0);
  
});

