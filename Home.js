let user_id = localStorage.getItem("currentUserId");

let getdata = localStorage.getItem("userdata");
let users = getdata ? JSON.parse(getdata) : [];

let getpost = localStorage.getItem("posts");
let posts = getpost ? JSON.parse(getpost) : [];

let current_user = users.find(function(user){
  return user.id === user_id;
});


let feed = document.querySelector("#feed");
feed.className = "feed";


posts.forEach(function(post){
  
  let user = users.find(function(user){
    return user.id === post.userId;
  });
  
  
  
  let create_post1 = document.createElement("div");
  create_post1.className = "posts";

  let create_post2 = document.createElement("div");
  create_post2.className = "profile";

  let create_post3 = document.createElement("div");
  create_post3.className = "profile_pic";


  let create_post4 = document.createElement("div");
  create_post4.className = "bio"

  let user_name = document.createElement("h3");
  user_name.textContent = user.username;
  

  let bio = document.createElement("p");

  let create_post5 = document.createElement("div");
  create_post5.className = "post_content"

  let post_content = document.createElement("p");


  let create_post6 = document.createElement("div");
  create_post6.className = "button1";

  let button1 = document.createElement("button");
  button1.textContent = "❤️";

  let button2 = document.createElement("button");
  button2.textContent = "💬";

  let create_post7 = document.createElement("div");
  create_post7.className = "button2";

  let button3 = document.createElement("button");
  button3.textContent = "📌";

  let button4 = document.createElement("button");
  button4.textContent = "...";
  
  let create_post8 = document.createElement("div");
  
  create_post8.className = "allbuttons";
  
  
  post_content.textContent = post.content;
  
  
  
  
  create_post4.appendChild(user_name);
  
  create_post5.appendChild(post_content);
  

  create_post6.appendChild(button1);
  create_post6.appendChild(button2);

  create_post7.appendChild(button3);
  create_post7.appendChild(button4);

  create_post2.appendChild(create_post3);
  create_post2.appendChild(create_post4);
  
  create_post8.appendChild(create_post6)
  create_post8.appendChild(create_post7)

  create_post5.appendChild(create_post8);


  create_post1.appendChild(create_post2);
  create_post1.appendChild(create_post5);
  
  feed.appendChild(create_post1);
  
  
  
});






let welcome = document.querySelector("#welcome");

let output = document.createElement("h4");

output.textContent = "Welcome " + current_user.username;

welcome.appendChild(output)
