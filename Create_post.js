let user_input = document.querySelector("#user_input");
let file_upload = document.querySelector("#file");

let post_btn = document.querySelector("#post");

let getpost = localStorage.getItem("posts");
let posts = getpost ? JSON.parse(getpost) : [];




post_btn.addEventListener("click", function () {
  
  if(user_input.value.trim() !== ""){
    
    let new_post = {
      id : crypto.randomUUID(),
      userId : localStorage.getItem("currentUserId"),
      content : user_input.value
    }
    
    posts.push(new_post);
    
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    )
    
    user_input.value = "";
    file_upload.value = "";
    
    alert("Post successfully created!")
    
    window.location.href="home.html";
    
  }
  
  
  
});