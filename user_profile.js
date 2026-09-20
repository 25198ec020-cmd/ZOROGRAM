let selected_user_id = localStorage.getItem("selectedUserId");

let getdata = localStorage.getItem("userdata");

let users = getdata ? JSON.parse(getdata) : [];

let getpost = localStorage.getItem("posts");

let posts = getpost ? JSON.parse(getpost) : [];

let userdata = users.find(function(user){
  return user.id === selected_user_id;
});

let user_posts = posts.filter(function(post){
  return post.userId === userdata.id;
});

let show_user = document.querySelector("#show_user");
show_user.textContent = userdata.username;

let label = document.querySelector("#label");
label.textContent = "@" + userdata.username;

console.log(userdata);
console.log(user_posts);

console.log(Object.keys(user_posts));


let show = document.querySelector("#show");

let post_count = document.querySelector("#post_count");
post_count.textContent = user_posts.length;

user_posts.forEach(function(post){
  
  let user_post1 = document.createElement("div");
  user_post1.className = "user_posts";
  
  let user_post2 = document.createElement("div");
  user_post2.className = "post_profile";
  
  let user_post3 = document.createElement("div");
  user_post3.className = "post_profile_pic";
  
  let username = document.createElement("h3");
  username.textContent = userdata.username;
  
  let content = document.createElement("h4");
  content.textContent = post.content;
  
  let user_post4 = document.createElement("div");
  user_post4.className = "buttons";
  
  let user_post5 = document.createElement("div");
  
  let button1 = document.createElement("button");
  button1.textContent = "❤️";
  
  let button2 = document.createElement("button");
  button2.textContent = "💬";
  
  let button3 = document.createElement("button");
  button3.textContent = "...";
  
  user_post2.appendChild(user_post3);
  user_post2.appendChild(username);
  
  user_post5.appendChild(button1);
  user_post5.appendChild(button2)
  
  user_post4.appendChild(user_post5);
  user_post4.appendChild(button3);
  
  user_post1.appendChild(user_post2);
  user_post1.appendChild(content);
  user_post1.appendChild(user_post4);
  
  show.appendChild(user_post1);
  
  
});

